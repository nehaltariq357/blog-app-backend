import {prisma} from "../../lib/prisma"
import { Request, Response } from "express";

export const getPostById = async(req: Request, res: Response) => {
    try{
        const postId = Number(req.params.postId); // get postId from request params

        const userId = (req as any).user?.userId // get userId from request object

        const post = await prisma.post.findUnique({
            where:{
                id: postId
            },
            include:{
                author: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                comments:true,
                likes:true,
                
            }
        })

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // private logic

        if(post.visibility==="PRIVATE"){
            if(!userId || post.authorId !==userId){
                return res.status(403).json({
                    message:"access denied. You are not authorized to view this post."
                })
            }
        }
        // public logic
        res.status(200).json(post);

    }catch (error) {
        console.log("GET POST ERROR:", error);
        res.status(500).json({ message: "Error occurred while fetching post by ID" });
    }
}