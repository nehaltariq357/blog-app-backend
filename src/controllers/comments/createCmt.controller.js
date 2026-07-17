import { prisma } from "../../lib/prisma";
export const createComment = async (req, res) => {
    try {
        const { text, postId } = req.body; // comment data from request body
        const userId = Number(req.user.userId); // req.user is added by authentication middleware; cast to any to satisfy TypeScript
        const comment = await prisma.comment.create({
            data: {
                text,
                postId: Number(postId),
                userId
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        });
        res.status(201).json({
            message: "Comment created successfully",
            comment
        });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create comment" });
    }
};
