import {prisma} from "../../lib/prisma";
import {Request, Response} from "express";


export const getAllPosts = async (req: Request, res: Response) => {
    try{
        const posts = await prisma.post.findMany({
            include:{
                author:{
                    select:{
                        id: true,
                        name: true,
                        email: true
                    }
                }
            }
        })
        res.status(200).json(posts);
    }catch (error) {
        res.status(500).json({error: "Failed to fetch posts"});
    }
}