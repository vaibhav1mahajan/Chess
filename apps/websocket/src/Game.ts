import { GameResult, GameStatus, timerValue, type messageSentByServer } from "@repo/common";
import { Chess, Move } from "chess.js";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "@repo/db";
import { socketManager, User } from "./User";
import { PauseableTimeout } from "./PauseableTimeout";
import redis from "./redisClient";

export class Game {
  gameId: string;
  usernameOfPlayer1: string;
  usernameOfPlayer2: string | null;
  board: Chess;
  timerValue: timerValue = timerValue.TEN_MIN;
  timerPlayer1: PauseableTimeout | null = null;
  timerPlayer2: PauseableTimeout | null = null;
  gameResult: GameResult | null = null;
  moves: [] = []

  public constructor(
    usernameOfPlayer1: string,
    usernameOfPlayer2: string | null = null,
    timerValue: timerValue
  ) {
    this.gameId = uuidv4();
    this.usernameOfPlayer1 = usernameOfPlayer1;
    this.usernameOfPlayer2 = usernameOfPlayer2;
    this.timerValue = timerValue;
    this.board = new Chess();
  }

  public async gameStarted(usernameOfPlayer2: string) {
    this.usernameOfPlayer2 = usernameOfPlayer2;
    try {
      const game = await prisma.game.create({
        data: {
          gameId: this.gameId,
          whitePlayerId: this.usernameOfPlayer1,
          blackPlayerId: this.usernameOfPlayer2,
          currentFen: this.board.fen(),
          status: "IN_PROGRESS",
          timeControl:
            this.timerValue === timerValue.TEN_MIN
              ? "TEN_MIN"
              : this.timerValue === timerValue.FIFTEEN_MIN
                ? "FIFTEEN_MIN"
                : "THIRTY_MIN",
          startAt: new Date(Date.now()),
        },
      });
    } catch (error) {
      console.error("Error creating game", error);
      return;
    }
    const setTimoutValue =
      this.timerValue === timerValue.TEN_MIN
        ? 1000* 60 * 10
        : this.timerValue === timerValue.FIFTEEN_MIN
          ?1000* 60 * 15
          :1000* 60 * 30;

          this.timerPlayer1 = new PauseableTimeout(
            this.handleTimeout.bind(this, this.usernameOfPlayer1),
            setTimoutValue
          );
    const toBeBrodcasted :messageSentByServer = {
        type:GameStatus.INIT_GAME,
        payload:{
          blackPlayer:this.usernameOfPlayer2,
          whitePlayer:this.usernameOfPlayer1,
          currentFen:this.board.fen(),
          gameId:this.gameId,
          move:[],
          timerValue:this.timerValue
        }
    }

    socketManager.broadcast(this.gameId,JSON.stringify(toBeBrodcasted));
    console.log("game has started");
  }
  public async makeMove(
    user: User,
    move: {
      from: string;
      to: string;
    }
  ) {
    if (
      (this.board.turn() === "w" && user.name !== this.usernameOfPlayer1) ||
      (this.board.turn() === "b" && user.name !== this.usernameOfPlayer2)
    ) {
      return;
    }
    if (this.gameResult) {
      console.error(`User ${user.name} is making a move post game completion`);
      return;
    }
    if (this.board.turn() === "w" && user.name === this.usernameOfPlayer1) {
      if ( await this.timeUp(this.usernameOfPlayer1)) {
        return;
      }
      try {
        this.board.move(move);
      } catch (error) {
        const toBeBrodcasted : messageSentByServer = {
          type: GameStatus.GAME_ALERT,
          payload:{
            message:"Invalid Move"
          }
        }
        socketManager.broadcast(this.gameId,JSON.stringify(toBeBrodcasted));
        return;
      }
      if (this.board.moveNumber() === 1) {
        const setTimoutValue =
          this.timerValue === timerValue.TEN_MIN
            ? 1000* 60 * 10
            : this.timerValue === timerValue.FIFTEEN_MIN
              ?1000*  60 * 15
              : 1000* 60 * 30;

              this.timerPlayer2 = new PauseableTimeout(
                this.handleTimeout.bind(this, this.usernameOfPlayer2!),
                setTimoutValue
              );
      }
      this.timerPlayer1?.pause();
      this.timerPlayer2?.resume();
    }

    if (this.board.turn() === "b" && user.name === this.usernameOfPlayer2) {
      
      if (await this.timeUp(this.usernameOfPlayer2)) {
        return;
      }
      try {
        this.board.move(move);
      } catch (error) {
        const toBeBrodcasted : messageSentByServer = {
          type: GameStatus.GAME_ALERT,
          payload:{
            message:"Invalid Move"
          }
        }
        socketManager.broadcast(this.gameId,JSON.stringify(toBeBrodcasted));
        return;
      }
      this.timerPlayer2?.pause();
      this.timerPlayer1?.resume();
    }
    await redis.rpush(
      `game:${this.gameId}:moves`,
      JSON.stringify({
        move,
        fen: this.board.fen(),
        timestamp: Date.now(),
        player: user.name,
      })
    );
    
    const toBeBrodcasted : messageSentByServer = {
      type: GameStatus.MOVE,
        payload: {
          move,
          remaingTime: {
            player1: this.timerPlayer1?.remainingTime ? Math.floor(this.timerPlayer1.remainingTime/1000) : 600,
            player2: this.timerPlayer2?.remainingTime ? Math.floor(this.timerPlayer2.remainingTime/1000) : 600,
          },
        },
    }

    socketManager.broadcast(
      this.gameId,
      JSON.stringify(toBeBrodcasted)
    );
    if (this.board.isGameOver()) {
      const result = this.board.isDraw()
        ? GameResult.DRAW
        : this.board.turn() === "b"
          ? GameResult.WHITE_WON
          : GameResult.BLACK_WON;

          const response = await prisma.game.update({
            where:{
              gameId:this.gameId
            },
            data:{
              result:result === GameResult.DRAW ? 'DRAW' : result === GameResult.BLACK_WON ? 'BLACK_WINS' : 'WHITE_WINS'
            }
          })
          this.gameEnded(result)
     
    }
  }

  public async resign(user: User) {
    if (
      user.name !== this.usernameOfPlayer1 &&
      user.name !== this.usernameOfPlayer2
    ) {
      return;
    }
    const result =
      user.name === this.usernameOfPlayer1
        ? GameResult.BLACK_WON
        : GameResult.WHITE_WON;

    await this.gameEnded(result, {
      remaingTime: {
        player1: this.timerPlayer1?.remainingTime ? this.timerPlayer1.remainingTime/1000 : undefined,
        player2: this.timerPlayer2?.remainingTime ? this.timerPlayer2.remainingTime/1000 : undefined,
      }
    });
    this.timerPlayer1?.cancel();
    this.timerPlayer2?.cancel();
  }
  private async timeUp(playerName: string) {
    if (playerName === this.usernameOfPlayer1) {
      if (
        this.timerPlayer1?.remainingTime === 0 ||
        this.timerPlayer1?.remainingTime === undefined ||
        this.timerPlayer1.remainingTime === null
      ) {
        this.gameEnded(GameResult.BLACK_WON, {
          message: "Time is up for white player",
        });
        return true;
      }
    } else if (playerName === this.usernameOfPlayer2) {
      if (
        this.timerPlayer2?.remainingTime === 0 ||
        this.timerPlayer2?.remainingTime === undefined ||
        this.timerPlayer2.remainingTime === null
      ) {
       await this.gameEnded(GameResult.WHITE_WON, {
          message: "Time is up for black player",
        });
        return true;
      }
    }
    return false;
  }

  private async gameEnded(result: GameResult, message?: Object) {
    const toBeBrodcasted : messageSentByServer = {
      type: GameStatus.GAME_ENDED,
        payload: {
          gameId: this.gameId,
          result,
          ...message,
        },
    }
    socketManager.broadcast(
      this.gameId,
      JSON.stringify(toBeBrodcasted)
    );
    await this.flushMovesToDB();
  }
  async flushMovesToDB() {
    const key = `game:${this.gameId}:moves`;
    const moves = await redis.lrange(key, 0, -1);
    if (moves.length === 0) return;
  
    try {
      let moveNumber = 1;
      for (const moveStr of moves) {
        const parsed = JSON.parse(moveStr);
        await prisma.move.create({
          data: {
            gameId:this.gameId ,
            move: JSON.stringify(parsed.move),
            moveNumber: moveNumber++,
            timeTaken:1
          },
        });
      }
  
      console.log(`✅ Flushed ${moves.length} moves to DB for game ${this.gameId}`);
      await redis.del(key);
    } catch (err) {
      console.error("❌ Failed to flush moves to DB:", err);
    }
  }
  private async handleTimeout(playerName: string) {
    if (playerName === this.usernameOfPlayer1) {
      await this.gameEnded(GameResult.BLACK_WON, { message: "White ran out of time" });
    } else {
      await this.gameEnded(GameResult.WHITE_WON, { message: "Black ran out of time" });
    }
  }
  
}
