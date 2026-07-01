import {prisma} from "../../lib/prisma";
import { Request, Response } from "express";

export const delComment = async (req: Request, res: Response) => {
    try{
        const commentId = Number(req.params.commentId); // get commentId from request params

        const userId = Number(req.user.userId) // req.user is added by authentication middleware; cast to any to satisfy TypeScript

        const comment = await prisma.comment.findUnique({
            where: {
                id: Number(commentId)
            }
        })

        if(!comment){
            return res.status(404).json({ error: "Comment not found" });
        }

        if(comment.userId !== userId){
            return res.status(403).json({ error: "You are not the owner of this comment" });
        }

        await prisma.comment.delete({
            where: {
                id: Number(commentId)
            }
        });

        res.status(200).json({ message: "Comment deleted successfully" });
    }catch(error){
        res.status(500).json({ error: "Failed to delete comment" });
    }
}