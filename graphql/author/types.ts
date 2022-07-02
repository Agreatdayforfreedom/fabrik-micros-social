import { gql } from 'apollo-server';
const authorTypes = gql`
    type Author {
        id: ID!
        posts: [Post]
        comments: [Comment]
        user: String
    }

    type Query {
        authors: [Author]
    }
`;

export { authorTypes };
