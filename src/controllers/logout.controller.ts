import express, { Request, Response }from 'express';

export const logout = (req: Request, res: Response) => {
    // Clear the access token and refresh token cookies
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out successfully' });
}