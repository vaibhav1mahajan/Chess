import { WebSocket } from "ws";
import { socketManager, User } from "./User";
import { GameStatus, timerValue, type message } from "@repo/common";
import { Game } from "./Game";

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
    const index = this._users.findIndex((user) => user.id === id);
    if (index !== -1) {
      delete this._users[index];
      console.log(`User with id ${id} has left the websocket server!`);
    }
  }


  removeGame(gameId: string) {
    this.games = this.games.filter((g) => g.gameId !== gameId);
  }

  private addHandlers(user: User) {
    user.socket.on("message", async (data) => {
      const message : message = JSON.parse(data.toString());
 

    if(message.type === GameStatus.INIT_GAME){
        if(!this._pendingGameId.hasOwnProperty(message.payload.timerValue)){
            const game = new Game(user.name, null, message.payload.timerValue);
            this.games.push(game);
            this._pendingGameId[message.payload.timerValue] = game.gameId;
            socketManager.addUser(user, game.gameId)
            socketManager.broadcast(game.gameId, 
                JSON.stringify({
                    type: GameStatus.GAME_ADDED,
                    payload: {
                        gameId: game.gameId,
                    }
                })
            );
        } else {
            const game = this.games.find((game)=> game.gameId === this._pendingGameId[message.payload.timerValue]);
            if(!game){
                const game = new Game(user.name, null, message.payload.timerValue);
            this.games.push(game);
            this._pendingGameId[message.payload.timerValue] = game.gameId;
            socketManager.addUser(user, game.gameId)
            socketManager.broadcast(game.gameId, 
                JSON.stringify({
                    type: GameStatus.GAME_ADDED,
                    payload: {
                        gameId: game.gameId,
                    }
                })
            );
            return;
            }
            if(user.name === game.usernameOfPlayer1){
                socketManager.broadcast(game.gameId , 
                    JSON.stringify({
                        type: GameStatus.GAME_ALERT,
                        payload:{
                            message:"Don't try to join a game twice! You are already in a game."
                        },
                    })
                );
                return;
            }
            socketManager.addUser(user,game.gameId);
            await game.gameStarted(user.name);
           delete this._pendingGameId[message.payload.timerValue];
            
        }
    } else if(message.type===GameStatus.MOVE) {
            const gameId = message.payload.gameId;
            const game = this.games.find((game)=> game.gameId === gameId);
            if(game){
                game.makeMove(user,message.payload.move)
                if(game.gameResult){
                    this.removeGame(gameId);
                }
            }
    } else if(message.type===GameStatus.RESIGN){
        const gameId = message.payload.gameId;
        const game = this.games.find((game)=> game.gameId === gameId);
        if(!game){
            socketManager.broadcast(gameId, 
                JSON.stringify({
                    type: GameStatus.GAME_ALERT,
                    payload:{
                        message:"The game has been ended. You have resigned."
                    },
                }))
          return;
        }
        if(game){
          game.resign(user);
        }
    }
    });
  }
}
