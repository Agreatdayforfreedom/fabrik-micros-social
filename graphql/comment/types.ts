import { gql } from 'apollo-server';

const commentTypes = gql`
  type Comment {
    id: ID!
    content: String!
    author: Author
    post: Post
  }
  type Query {
    comments: [Comment]
  }
`;

export { commentTypes };