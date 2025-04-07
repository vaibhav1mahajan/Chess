import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken'

export function protectedRoute(req:Request,res:Response,next:NextFunction){
        try {
            const token = req.cookies.jwt;
            if(!token){
                res.status(401).json({
                    msg:"Unauthorized:No token provided"
                })
                return ;
            }
            const decoded = jwt.verify(token,process.env.JWT_SECRET as string)
            if(!decoded){
                res.status(401).json({
                    msg:"Invalid Token"
                })
                return ;
            }
            req.userId = (decoded as JwtPayload).id;
            next();
        } catch (error) {
            console.log(error)
            res.status(500).json({
                msg:"Internal server error"
            })
        }
}

