import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { generateAccessToken } from '../Utils/jwt_utils';
import dotenv from 'dotenv';
dotenv.config();

export const refreshToken = (req: Request, res: Response) => {
    const refreshToken = req.cookies.refreshToken;
    const refreshTokenSecret = process.env.JWT_REFRESH_SECRET;
    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token not found' });
    }
    try {
        const decoded = jwt.verify(refreshToken, refreshTokenSecret!)
        const userId = (decoded as jwt.JwtPayload).userId;
        // Generate new access token
        const newAccessToken = generateAccessToken(userId);

        //set new access token in cookie
        res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
        })
        // Return new access token in response
        res.json({ NewAccessToken: newAccessToken });
    } catch (err) {
        return res.status(401).json({ message: 'Invalid refresh token' });
    }
}