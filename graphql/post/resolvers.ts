import { prisma } from '../../config/prisma';

const postResolvers = {
  Post: {
    comments: async (parent: any, args: any, context: any) => {
      return await prisma.comment.findMany({
        where: {
          postId: parent.id,
        },
      });
    },
    author: async (parent: any, args: any, context: any) => {
      return await prisma.author.findUnique({
        where: {
          id: parent.authorId,
        },
      });
    },
  },
  Query: {
    posts: async (parent: any, args: any, context: any) => {
      const psts = await prisma.post.findMany();
      return psts;
    },
  },
};

export { postResolvers };