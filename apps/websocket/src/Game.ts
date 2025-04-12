import { GameResult, GameStatus, timerValue } from "@repo/common";
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
        ? 1000 * 60 * 10
        : this.timerValue === timerValue.FIFTEEN_MIN
          ? 1000 * 60 * 15
          : 1000 * 60 * 30;

    this.timerPlayer1 = new PauseableTimeout(() => {}, setTimoutValue);

    socketManager.broadcast(
      this.gameId,
      JSON.stringify({
        type: GameStatus.INIT_GAME,
        payload: {
          gameId: this.gameId,
          whitePlayer: this.usernameOfPlayer1,
          blackPlayer: this.usernameOfPlayer2,
          timerValue: this.timerValue,
          currentFen: this.board.fen(),
          move: [],
        },
      })
    );
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
      if (this.timeUp(this.usernameOfPlayer1)) {
        return;
      }
      try {
        this.board.move(move);
      } catch (error) {
        socketManager.broadcast(
          this.gameId,
          JSON.stringify({
            type: GameStatus.GAME_ALERT,
            payload: {
              move: "Invalid Move",
            },
          })
        );
        return;
      }
      this.timerPlayer1?.pause();
      this.timerPlayer2?.resume();
    }

    if (this.board.turn() === "b" && user.name === this.usernameOfPlayer2) {
      if (this.board.moveNumber() === 1) {
        const setTimoutValue =
          this.timerValue === timerValue.TEN_MIN
            ? 1000 * 60 * 10
            : this.timerValue === timerValue.FIFTEEN_MIN
              ? 1000 * 60 * 15
              : 1000 * 60 * 30;

        this.timerPlayer2 = new PauseableTimeout(() => {}, setTimoutValue);
      }
      if (this.timeUp(this.usernameOfPlayer2)) {
        return;
      }
      try {
        this.board.move(move);
      } catch (error) {
        socketManager.broadcast(
          this.gameId,
          JSON.stringify({
            type: GameStatus.GAME_ALERT,
            payload: {
              move: "Invalid Move",
            },
          })
        );
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
    socketManager.broadcast(
      this.gameId,
      JSON.stringify({
        type: GameStatus.MOVE,
        payload: {
          move,
          remaingTime: {
            player1: this.timerPlayer1?.remainingTime,
            player2: this.timerPlayer2?.remainingTime,
          },
        },
      })
    );
    if (this.board.isGameOver()) {
      const result = this.board.isDraw()
        ? GameResult.DRAW
        : this.board.turn() === "b"
          ? GameResult.WHITE_WON
          : GameResult.BLACK_WON;

      socketManager.broadcast(
        this.gameId,
        JSON.stringify({
          type: GameStatus.GAME_ENDED,
          payload: {
            gameId: this.gameId,
            result,
          },
        })
      );
    }
  }

  public resign(user: User) {
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

    this.gameEnded(result, {
      remainTime: {
        player1: this.timerPlayer1?.remainingTime,
        player2: this.timerPlayer2?.remainingTime,
      },
    });
    this.timerPlayer1?.cancel();
    this.timerPlayer2?.cancel();
  }
  private timeUp(playerName: string) {
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
        this.gameEnded(GameResult.WHITE_WON, {
          message: "Time is up for black player",
        });
        return true;
      }
    }
    return false;
  }

  private gameEnded(result: GameResult, message?: Object) {
    socketManager.broadcast(
      this.gameId,
      JSON.stringify({
        type: GameStatus.GAME_ENDED,
        payload: {
          gameId: this.gameId,
          result,
          ...message,
        },
      })
    );
  }
  // async flushMovesToDB() {
  //   const moves = await redis.lrange(`game:${this.gameId}:moves`, 0, -1);
  //   if (moves.length === 0) return;

  //   try {
  //     for (const move of moves) {
  //       await prisma.move.create({
  //         data: {
  //           gameId: this.gameId,
  //           move: move,
  //           moveNumber: this.board.moveNumber(),
  //           timeTaken: 1, // assuming a stringified object
  //         },
  //       });
  //     }
  //     console.log(`✅ Flushed ${moves.length} moves to DB`);
  //     await redis.del(`game:${this.gameId}:moves`);
  //   } catch (err) {
  //     console.error("❌ Failed to flush moves:", err);
  //   }
  // }

  
}
