require('dotenv').config();
const connectDB = require('./src/database/db');
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault
} = require('@apollo/server/plugin/landingPage/default');

const typeDefs = require('./src/graphQL/typeDefs');
const resolvers = require('./src/graphQL/resolver');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, 
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

const port = process.env.PORT || 4000;

async function startServer() {
  await connectDB();
  const { url } = await startStandaloneServer(server, {
    listen: { port },
  });

  console.log(`🚀 Server ready at ${url}`);
}

startServer();
