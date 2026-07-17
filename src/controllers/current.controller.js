import { prisma } from "../lib/prisma";
export default async function getCurrentUser(req, res) {
    try {
        const userId = Number(req.user.userId);
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
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
}
