import { prisma } from "../../lib/prisma";
import sanitizeHtml from "sanitize-html";
import slugify from "slugify";
export const createPost = async (req, res) => {
    try {
        const { title, content, visibility, thumbnail } = req.body; // post data from request body
        // req.user is added by authentication middleware; cast to any to satisfy TypeScript
        const userId = req.user.userId;
        // Create new post in database
        const slug = slugify(title, { lower: true, strict: true }); // generate slug from title
        const cleanContent = sanitizeHtml(content, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                "img",
                "h1",
                "h2",
            ]),
            allowedAttributes: {
                a: ["href"],
                img: ["src"],
            },
        });
        const post = await prisma.post.create({
            data: {
                title,
                slug, // generated slug
                excerpt: cleanContent.substring(0, 100), // first 100 characters of sanitized content
                thumbnail,
                content: cleanContent, // sanitized content
                visibility, // public or private visibility
                authorId: userId // associate post with authenticated user
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        });
        res.status(201).json(post);
    }
    catch (error) {
        console.log("error", error);
        res.status(500).json({ error: "Failed to create post" });
    }
};
