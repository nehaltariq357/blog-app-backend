import {prisma} from "../../lib/prisma"
import { Request, Response } from "express";

export const getLikeCount = async (req: Request, res: Response) => {
    try{
        const likeCount = await prisma.post.findMany({
           include:{
            author:true,
            _count:{ // 
                select:{
                    comments:true,
                    likes:true
                }
            }
           }
        })
        res.status(200).json({likes: likeCount });
    }catch (error) {
        res.status(500).json({ message: "Error occurred while fetching like count" });
    }
}