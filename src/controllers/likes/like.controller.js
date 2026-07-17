import { prisma } from "../../lib/prisma";
export const getLikesByPost = async (req, res) => {
    try {
        const postId = Number(req.params.postId); // get postId from request params
        const userId = req.user.userId;
        // already liked check
        const existingLike = await prisma.like.findUnique({
            where: {
                userId_postId: {
                    postId,
                    userId
                }
            }
        });
        if (existingLike) {
            return res.status(400).json({ message: "You have already liked this post" });
        }
        // create like 
        const like = await prisma.like.create({
            data: {
                postId,
                userId
            }
        });
        res.status(200).json({
            message: "Post liked successfully",
            like
        });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch likes" });
    }
};
