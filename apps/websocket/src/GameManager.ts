import { WebSocket } from "ws";
import { socketManager, User } from "./User";
import { GameStatus, timerValue, type messageSentByClient, type messageSentByServer } from "@repo/common";
import { Game } from "./Game";
// import redis from "./redisClient";
let ID = 1;

export class GameManager {
  private _users: User[] = [];
  private static _instance: GameManager;
  private _pendingGameId: { [key: string]: string } = {};
  private games: Game[] = [];

  private constructor() {}

  public static getInstance() {
    if (!this._instance) {
      this._instance = new GameManager();
    }
    return this._instance;
  }

  addUser(ws: WebSocket, name: string) {
    let id = ID;
    const user = new User(id, name, ws);
    this._users.push(user);
    this.addHandlers(user);
    ws.send(`User ${name} has joined to the websocket server!`);
    ws.on("close", () => this.removeUser(id));
    ID++;
  }

  removeUser(id: number) {
    if (this._users.length === 0) return;
    const index = this._users.findIndex((user) => user?.id === id);
    if (index !== -1) {
      this._users.splice(index, 1); // removes the element at 'index'
      console.log(`User with id ${id} has left the websocket server!`);
    }
  }

  removeGame(gameId: string) {
    this.games = this.games.filter((g) => g.gameId !== gameId);
  }

  private addHandlers(user: User) {
    user.socket.on("message", async (data) => {
      const message: messageSentByClient = JSON.parse(data.toString());

      if (message.type === GameStatus.INIT_GAME) {
        if (!this._pendingGameId.hasOwnProperty(message.payload.timerValue)) {
          const game = new Game(user.name, null, message.payload.timerValue);
          this.games.push(game);
          this._pendingGameId[message.payload.timerValue] = game.gameId;
          socketManager.addUser(user, game.gameId);
          const toBeBrodcasted : messageSentByServer = {
            type: GameStatus.GAME_ADDED,
            payload:{
              gameId:game.gameId
            }
          } 
          socketManager.broadcast(game.gameId,JSON.stringify(toBeBrodcasted));
          console.log("event recieved");
        } else {
          const game = this.games.find(
            (game) =>
              game.gameId === this._pendingGameId[message.payload.timerValue]
          );
          if (!game) {
            const game = new Game(user.name, null, message.payload.timerValue);
            this.games.push(game);
            this._pendingGameId[message.payload.timerValue] = game.gameId;
            socketManager.addUser(user, game.gameId);
            const toBeBrodcasted : messageSentByServer = {
              type: GameStatus.GAME_ADDED,
              payload:{
                gameId:game.gameId
              }
            } 
            socketManager.broadcast(game.gameId,JSON.stringify(toBeBrodcasted));
            return;
          }
          
          if (user.name === game.usernameOfPlayer1) {
            const gameAlertMessage : messageSentByServer = {
              type: GameStatus.GAME_ALERT,
              payload:{
                message:"Don't try to join a game twice! You are already in a game."
              }    
            }
            socketManager.broadcast(game.gameId,JSON.stringify(gameAlertMessage));
            console.log("you are already in a game");
            return;
          }
          socketManager.addUser(user, game.gameId);
          await game.gameStarted(user.name);
          delete this._pendingGameId[message.payload.timerValue];
        }
      } else if (message.type === GameStatus.MOVE) {
        const { gameId, move } = message.payload;
        const game = this.games.find((game) => game.gameId === gameId);
        if (game) {
          console.log('game move', game.gameId)
          game.makeMove(user, move);
          if (game.gameResult) {
            this.removeGame(gameId);
          }
        }
      } else if (message.type === GameStatus.RESIGN) {
        const gameId = message.payload.gameId;
        const game = this.games.find((game) => game.gameId === gameId);
        if (!game) {
          const toBeBrodcasted: messageSentByServer = {
            type:GameStatus.GAME_ALERT,
            payload:{
              message:"Game not found or it has ended"
            }
          }
          socketManager.broadcast(gameId,JSON.stringify(toBeBrodcasted))
          return;
        }
        if (game) {
          game.resign(user);
          this.removeGame(gameId);
        }
      } 
      // else if(message.type === GameStatus.DISCONNECTING){
      //   const gameId = message.payload.gameId
      //   console.log(message.payload)
      //   console.log(gameId);
      //     const game = this.games.find( (game) => game.gameId === gameId)
      //     if(!game) return ;
      //     console.log('control is reaching here')
      //     const toBeBrodcasted : messageSentByServer = {
      //         type:GameStatus.DISCONNECTING,
      //         payload:{
      //           message: `${user.name} has disconnected`
      //         }
      //     }
      //     socketManager.broadcast(game.gameId,JSON.stringify(toBeBrodcasted))
      // }
       else if (message.type === GameStatus.REMOVE_IS_PENDING) { // GameStatus.removeispending
        const game = this.games.find(
          (game) => game.gameId === message.payload.gameId
        );
        if (!game) {
          return;
        }
        if (this._pendingGameId[game.timerValue] === user.name) {
          delete this._pendingGameId[game.timerValue];
          return;
        }
      } else if (message.type === GameStatus.RESTORE_GAME) {
        const { gameId, username } = message.payload;
        console.log(gameId,username , 'restore game')
      
        const game = this.games.find((g) => g.gameId === gameId);
        if (!game) {
          console.log(this.games);
          console.log(`Game not found for gameId: ${gameId}`);
          const toBeBrodcasted : messageSentByServer = {
            type:GameStatus.GAME_ALERT,
            payload:{
              message:"Game not found for reconnection." 
            }
          }
          console.log("Sending restore payload:", JSON.stringify(toBeBrodcasted, null, 2));
          user.socket.send(
            JSON.stringify(toBeBrodcasted)
          );
          console.log("Sending restore payload:", JSON.stringify(toBeBrodcasted, null, 2));
          return;
        }
        socketManager.addUser(user, gameId);

        const color =
          username === game.usernameOfPlayer1
            ? "white"
            : username === game.usernameOfPlayer2
              ? "black"
              : null;

        if (!color) {
          const toBeBrodcasted : messageSentByServer = {
            type:GameStatus.GAME_ALERT,
            payload:{
              message:"You are not a participant in this game."
            }
          }

          user.socket.send(
            JSON.stringify(toBeBrodcasted)
          );
          return;
        }
        
        const toBeBrodcasted : messageSentByServer = {
            type:GameStatus.RESTORE_GAME,
            payload:{
              gameId: game.gameId,
              whitePlayer: game.usernameOfPlayer1,
              blackPlayer: game.usernameOfPlayer2!,
              currentFen: game.board.fen(),
              color,
              remainingTime: {
                player1: game.timerPlayer1?.remainingTime ? Math.floor(game.timerPlayer1.remainingTime/1000) : 600,
                player2: game.timerPlayer2?.remainingTime ? Math.floor(game.timerPlayer2.remainingTime/1000): 600,
              },
              moves:game.moves
            }
        }
        console.log("Sending restore payload:", JSON.stringify(toBeBrodcasted, null, 2));

        user.socket.send(
          JSON.stringify(toBeBrodcasted)
        );
        socketManager.broadcast(
          gameId,
          JSON.stringify({
            type: GameStatus.GAME_ALERT,
            payload: {
              message: `${username} has reconnected.`,
            },
          })
        );
      }
    });
  }
}
