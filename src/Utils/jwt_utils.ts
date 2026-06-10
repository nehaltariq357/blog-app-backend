import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const accessToken = process.env.JWT_ACCESS_SECRET
const refreshToken = process.env.JWT_REFRESH_SECRET

if (!accessToken || !refreshToken) {
  throw new Error('JWT secrets are not defined in the environment variables');
}


// access token short life

export const generateAccessToken = (payload: any) => {
  return jwt.sign(
    payload,
    accessToken,
    { expiresIn: '1h',
        algorithm: 'HS256'
     }
  )
};

// refresh token long life

export const generateRefreshToken = (payload: any) => {
    return jwt.sign(
        payload,
        refreshToken,
        { expiresIn: '7d',
            algorithm: 'HS256'
         }
    )
}