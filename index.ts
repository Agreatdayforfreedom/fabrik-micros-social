import { ApolloServer } from 'apollo-server';
import { types } from './graphql/types';
import { resolvers } from './graphql/resolvers';

const server = new ApolloServer({
    typeDefs: types,
    resolvers: resolvers
});

server.listen({port: 4002}).then((url) => {
    console.log('microservicio de usuario corriendo')
})