
import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";
export const delPost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params // post id from request params

        const userId = Number(req.user.userId) 

        // Check if post exists and belongs to authenticated user
        const existingPost = await prisma.post.findUnique({
            where: { id: Number(id) },
        })

        if (!existingPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        if (existingPost.authorId !== userId) {
            return res.status(403).json({ error: "Unauthorized to delete this post" });
        }
        // Delete post from database
        const post = await prisma.post.delete({
            where: { id: Number(id) }, // post id from request params
        })
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}