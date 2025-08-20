require('dotenv').config();
const connectDB = require('./src/database/db');
const {ApolloServer} = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./src/graphQL/typeDefs')
const resolvers = require('./src/graphQL/resolver')

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const port = process.env.PORT;

async function startServer () {
    await connectDB();
    const {url} = await startStandaloneServer(server,{
        listen:{port:port},
        cors: {
            origin: [
                "https://student-management-system-frontend-hzg2.onrender.com", 
            ]
    }
})

    console.log(`Server is ready at ${url}`)
}

startServer();