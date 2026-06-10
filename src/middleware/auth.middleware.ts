import express,{Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const middlewareAuth = (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined;

    const accessToken = req.cookies.accessToken; // for production purposes
    const accessTokenSecret = process.env.JWT_ACCESS_SECRET;
    const authHeader = req.headers.authorization; // for development purposes


    console.log("authHeader",authHeader)
    console.log("accessToken",accessToken)

    // Check if access token is present in cookies or authorization header
    if (accessToken){
        token = accessToken
    }else if(authHeader){
        token = authHeader.split(' ')[1]; // Extract token from "Bearer <token>"
    }

    console.log("token",token)

    if (!token) {
        return res.status(401).json({ message: 'Access token not found' });
    }

    try {
        const decoded = jwt.verify(token,accessTokenSecret!)
        console.log("decoded",decoded),
        (req as any).userId = (decoded as jwt.JwtPayload).userId;
    }catch (err) {
        return res.status(401).json({ message: 'Invalid access token' });
    }
}