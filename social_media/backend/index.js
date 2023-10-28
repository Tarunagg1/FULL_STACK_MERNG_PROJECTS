const { ApolloServer, PubSub } = require('apollo-server');
const resolvers = require('./graphql/resolver');
const typeDefs = require('.//graphql/typeDef');
const {ApolloServerPluginLandingPageGraphQLPlayground} = require('apollo-server-core')
require('./config/db');

// const pubsub = new PubSub();

const PORT = process.env.port || 5000;


const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers,
    context: ({ req }) => ({ req, PubSub }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen({ port: PORT }, () => {
    console.log('server listening on port ' + PORT);
})
