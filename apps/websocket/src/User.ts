import { WebSocket } from "ws";


export class User {
     id: number;
     name:string;
     socket:WebSocket

     constructor(id: number, name: string, ws: WebSocket) {
         this.id = id;
         this.name = name;
         this.socket = ws;
     }

}


class SocketManager {
    private static instance: SocketManager;
    private interestedSockets: Map<string, User[]>;
    private userRoomMappping: Map<string, string>;
  
    private constructor() {
      this.interestedSockets = new Map<string, User[]>();
      this.userRoomMappping = new Map<string, string>();
    }
  
    static getInstance() {
      if (SocketManager.instance) {
        return SocketManager.instance;
      }
  
      SocketManager.instance = new SocketManager();
      return SocketManager.instance;
    }
  
    addUser(user: User, roomId: string) {
      this.interestedSockets.set(roomId, [
        ...(this.interestedSockets.get(roomId) || []),
        user,
      ]);
      this.userRoomMappping.set(user.name, roomId);
    }
  
    broadcast(roomId: string, message: string) {
      const users = this.interestedSockets.get(roomId);
      if (!users) {
        console.error('No users in room?');
        return;
      }
  
      users.forEach((user) => {
        user.socket.send(message);
      });
    }
  
    removeUser(user: User) {
      const roomId = this.userRoomMappping.get(user.name);
      if (!roomId) {
        console.error('User was not interested in any room?');
        return;
      }
      const room = this.interestedSockets.get(roomId) || []
      const remainingUsers = room.filter(u =>
        u.name !== user.name
      )
      this.interestedSockets.set(
        roomId,
        remainingUsers
      );
      if (this.interestedSockets.get(roomId)?.length === 0) {
        this.interestedSockets.delete(roomId);
      }
      this.userRoomMappping.delete(user.name);
    }
  }
  
  export const socketManager = SocketManager.getInstance()