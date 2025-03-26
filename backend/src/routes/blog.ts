import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput,updateBlogInput } from "@ridhuuu/project-common";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  }
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization") || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
  try {
    const user = await verify(token, c.env.JWT_SECRET) as { id: string };
    c.set("userId", user.id);
    await next();
  } catch (error) {
    c.status(403);
    return c.json({ error: "You are not logged in !!" });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const { success }=createBlogInput.safeParse(body);
      if(!success) {
           c.status(400)
         return  c.json({ message: 'wrong inputs' });
          }
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: parseInt(userId), // Ensure Prisma expects an integer
    },
  });

  return c.json({
    id: blog.id,
  });
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const { success }=updateBlogInput.safeParse(body);
      if(!success) {
           c.status(400)
         return  c.json({ message: 'wrong inputs' });
          }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
 
    const blog = await prisma.blog.update({


    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json({
    id: blog.id,
  });
});


blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blogs = await prisma.blog.findMany({
      select:{
        content:true,
        title:true,
        id:true,
        author:{
          select:{
            name:true,
          }
        }
      }
    });
    return c.json({
      blogs
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    c.status(500);
    return c.json({ error: "Failed to fetch blogs" });
  }
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  
    try {
      const blog = await prisma.blog.findFirst({


      where: {
        id:Number(id),
      },
      select:{
        content:true,
        title:true,
        id:true,
        author:{
          select:{
            name:true,
            }
            }
            }
    });

    return c.json({
      blog,
    });
  } catch (e) {
    c.status(411);
    return c.json({
      message: "error while fetching data",
    });
  }
});

//todo:add pagination




