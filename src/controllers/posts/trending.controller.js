import { prisma } from "../../lib/prisma";
export const getTrendingPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            where: {
                visibility: "PUBLIC",
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                _count: {
                    select: {
                        likes: true,
                        comments: true,
                    },
                },
            },
            orderBy: {
                likes: {
                    _count: "desc",
                },
            },
            take: 10, // Fetch top 10 trending posts based on likes count
        });
        res.status(200).json(posts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to fetch trending posts",
        });
    }
};
