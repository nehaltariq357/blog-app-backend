import { prisma } from "../../lib/prisma";
export const getAllPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            where: {
                visibility: "PUBLIC"
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                    }
                },
                _count: {
                    select: {
                        comments: true,
                        likes: true
                    }
                }
            }
        });
        res.status(200).json(posts);
    }
    catch (error) {
        console.log("errorposts", error);
        res.status(500).json({ error: "Failed to fetch posts" });
    }
};
