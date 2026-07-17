
import { prisma } from "../../lib/prisma.js";
import { Request, Response } from "express";
export const delPost = async (req: Request, res: Response) => {
    try {
       const { postId } = req.params;

    const userId = Number((req as any).user.userId);

        // Check if post exists and belongs to authenticated user
        const existingPost = await prisma.post.findUnique({
            where: { id: Number(postId) },
        })

        if (!existingPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        if (existingPost.authorId !== userId) {
            return res.status(403).json({ error: "Unauthorized to delete this post" });
        }
        // Delete post from database
        const post = await prisma.post.delete({
            where: { id: Number(postId) }, // post id from request params
        })
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "Internal server error" });
    }
}