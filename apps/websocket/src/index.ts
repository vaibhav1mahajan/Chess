import { WebSocketServer } from 'ws';
import { IncomingMessage } from 'http';
import jwt, {type JwtPayload } from 'jsonwebtoken';
import cookie from 'cookie';
import { config } from 'dotenv';
import { GameManager } from './GameManager';
import {prisma} from '@repo/db'


config();

// Type for authenticated user (adjust to your token structure)
interface AuthenticatedUser extends JwtPayload {
  id: string; 
}

const SECRET_KEY = process.env.JWT_SECRET!; // Replace with your actual secret
const PORT = 8080;

const wss = new WebSocketServer({ port: PORT });

wss.on('connection',async (ws, req: IncomingMessage) => {
  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
  const token = cookies.jwt ; // adjust if your cookie has a different name
  if (!token) {
    ws.close(4001, 'Unauthorized: No token provided');
    return;
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as AuthenticatedUser;

    if(!decoded){
      ws.close(4001, 'Unauthorized: Invalid token');
      return;
    }

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
      select:{
        username:true,
      }
    });

    if(!user){
      ws.close(4001, 'Unauthorized: Invalid user');
      return;
    }

    console.log(`✅ Authenticated user: ${user.username}`);
    GameManager.getInstance().addUser(ws,user.username)
  } catch (err) {
    ws.close(4001, 'Unauthorized: Invalid token');
  }
});

console.log(`✅ WebSocket server listening on ws://localhost:${PORT}`);
