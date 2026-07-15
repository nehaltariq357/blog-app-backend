import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const searchPosts = async (
  req: Request,
  res: Response
) => {
  try {
    const query = req.query.q as string;
    console.log("query",query);

    // Empty search
    if (!query) {
      return res.json([]);
    }

    const posts = await prisma.post.findMany({
      where: {
        visibility: "PUBLIC",

        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },

          {
            content: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
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
    });

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to search posts",
    });
  }
};