import {prisma} from "../../lib/prisma.js"
import { Request, Response } from "express";


export const unlikePost = async (req: Request, res: Response) => {
    const postId = Number(req.params.postId); // get postId from request params
    const userId = (req as any).user.userId 
    try{
        await prisma.like.delete({
            where:{
                userId_postId:{
                    postId,
                    userId
                }
            }
        })
        res.status(200).json({ message: "Post unliked successfully" });
    }catch (error) {
        res.status(500).json({ message: "Error occurred while unliking the post" });
    }
}