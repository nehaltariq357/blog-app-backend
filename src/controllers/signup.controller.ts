
import { prisma } from '../lib/prisma';
import { Request, Response } from 'express';
import { hashedPassword } from '../Utils/password_utils';

export const signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // hashed password
        const hashedPass = await hashedPassword(password);

        // Create new user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPass
            }
        })
        res.json({
            message: 'User created successfully',
            user:{
                id: user.id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}