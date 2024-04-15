import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import express from 'express'
import { buildSchema } from 'type-graphql'
import http from 'http'
import CountryResolver from './Resolver/Country.resolver';
import db from './db';



const app = express()
const httpServer = http.createServer(app)

    
async function main(){
    
    const schema = await buildSchema({
        resolvers: [CountryResolver],
        validate: true
    })

    const server = new ApolloServer<{}>({
        schema,
    }); 

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context: async ({ req, res }) => {
          return {};
        },
      });

      
    
      await db.initialize();
    
      console.log(`🚀  Server ready at: ${url}`);

  
} 
main()