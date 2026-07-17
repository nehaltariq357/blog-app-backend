import { prisma } from '../lib/prisma';
import { comparePassword } from '../Utils/password_utils';
import { generateRefreshToken, generateAccessToken } from '../Utils/jwt_utils';
export const login = async (req, res) => {
    const { email, password } = req.body;
    // Check if user exists
    const user = await prisma.user.findUnique({
        where: { email },
        select: {
            id: true,
            email: true,
            name: true,
            password: true
        }
    });
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    // Compare password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    // Generate tokens
    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);
    // set access token in cookie
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
    });
    // set refresh token in cookie
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
    });
    res.json({
        message: 'Login successful',
        user: {
            id: user.id,
            email: user.email,
            name: user.name
        },
        token_access: accessToken,
        token_refresh: refreshToken
    });
};
