import {prisma} from "../../lib/prisma.js";
import { Request, Response } from "express";

export const getCommentsByPost = async (req: Request, res: Response) => {
    try{
        const postId = Number(req.params.postId); // get postId from request params

        const comments = await prisma.comment.findMany({
            where: {
                postId: Number(postId)
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc' // order comments by creation date in descending order
            }
        })
        res.status(200).json(comments);
        
    }catch(error){
        res.status(500).json({ error: "Failed to fetch comments" });
    }
}