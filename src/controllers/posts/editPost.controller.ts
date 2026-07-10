
import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const editPost = async (req: Request, res: Response) => {
    try {
        const { postId } = req.params // post id from request params
        const { title, content, visibility } = req.body // updated post data from request body

        const user = (req as any).user;
        const userId = typeof user?.userId === "string" ? Number(user.userId) : user?.userId; // from authentication middleware


        // Check if post exists and belongs to authenticated user
        const existingPost = await prisma.post.findUnique({
            where: { id: Number(postId) },
        })

        if (!existingPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        if (existingPost.authorId !== userId) {
            return res.status(403).json({ error: "Unauthorized to edit this post" });
        }
        // Update post in database
        const post = await prisma.post.update({
            where: { id: Number(postId) }, // post id from request params
            data: {
                title,
                content,
                visibility
            }

        })
        res.status(200).json(post);

    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "Internal server error" });
    }
}