import type { User } from '@repo/db'
import type { Response } from 'express';
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET;

export const assignToken = (user:User, res:Response) =>{
    const token = jwt.sign({id : user.id}, JWT_SECRET as string);
    res.cookie("jwt",token)
    return token;
}