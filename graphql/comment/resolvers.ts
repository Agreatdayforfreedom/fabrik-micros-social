import { prisma } from '../../config/prisma';

const commentResolvers = {
  Comment: {
    author: async (parent: any, args: any, context: any) => {
      return await prisma.author.findUnique({
        where: {
          id: parent.authorId,
        },
      });
    },
    post: async (parent: any, args: any, context: any) => {
      return await prisma.post.findUnique({
        where: {
          id: parent.postId,
        },
      });
    },
  },
  Query: {
    comments: async (parent: any, args: any, context: any) => {
      return await prisma.comment.findMany();
    },
  },
};

export { commentResolvers };