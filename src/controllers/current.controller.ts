import { prisma } from "../lib/prisma.js";
import { Request, Response } from "express";

export default async function getCurrentUser(req: Request, res: Response) {
    try {
        const userId = Number((req as any).user.userId);

        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json(user);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
}