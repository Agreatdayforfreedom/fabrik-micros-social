import { ApolloServer } from 'apollo-server';
import { userTypes } from './graphql/types';
import { userResolvers } from './graphql/resolvers';

const server = new ApolloServer({
    typeDefs: userTypes,
    resolvers: userResolvers
});

server.listen({port: 4002}).then((url) => {
    console.log('microservicio de usuario corriendo')
})