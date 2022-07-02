import { authorResolvers } from './author/resolvers';
import { commentResolvers } from './comment/resolvers';
import { postResolvers } from './post/resolvers';

export const resolvers =  [authorResolvers, commentResolvers, postResolvers ];