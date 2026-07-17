import { prisma } from "../../lib/prisma.js";
import { Request, Response } from "express";

export const getLatestPosts = async (
  req: Request,
  res: Response
) => {
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
        id: "desc", // Order by the 'id' field in descending order to get the latest posts
      },

      take: 10,
    });

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch latest posts",
    });
  }
};