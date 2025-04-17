
import { Router, type Request, type Response } from "express";
import { protectedRoute } from "../lib/middleware";
import { prisma } from "@repo/db";
const chessRouter = Router();

chessRouter.get('/completedGames',protectedRoute, async (req:Request,res:Response)=>{
   const userId = req.userId;
   const username = req?.username
   if(!userId){
        res.json({
            msg:"User id not found"
        })
        return ;
   } 
   console.log(userId)
   const games = await prisma.game.findMany({
        where:{
            OR:[
              {whitePlayerId:username},
              {blackPlayerId:username},  
            ]
        },
        include:{
            blackPlayer:{
                select:{
                    username:true
                }
            },
            whitePlayer:{
                select:{
                    username:true
                }
            }
        }
   })



   console.log(games)
   res.json({
    games
   })

})

chessRouter.get('/game/:id',protectedRoute,async (req:Request,res:Response)=>{
    const id = req.params
    const moves = await prisma.game.findMany({
        where:{
            gameId:id,
        },
        select:{
            moves:{
                orderBy:{
                    moveNumber:'asc'
                }
            }
        }
    })
    if(!moves){
        res.json({
            msg:'No moves found , end ended without a move'
        })
        return ;
    }
    res.json({
        moves,
    })
})

export default chessRouter