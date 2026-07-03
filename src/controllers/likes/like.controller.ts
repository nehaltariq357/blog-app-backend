import { prisma } from "../../lib/prisma"

import { Request, Response } from "express";

export const getLikesByPost = async (req: Request, res: Response) => {
    try { 
     const postId = Number(req.params.postId); // get postId from request params
     const userId = (req as any).user.userId
     // already liked check
     const existingLike = await prisma.like.findUnique({
        where:{ 
            userId_postId:{
                postId,
                userId
            }
        }
     })

        if(existingLike){
            return res.status(400).json({ message: "You have already liked this post" });
        }

        // create like 
        const like = await prisma.like.create({
            data: {
                postId,
                userId
            }
        })
        res.status(200).json(like);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch likes" });
    }
}