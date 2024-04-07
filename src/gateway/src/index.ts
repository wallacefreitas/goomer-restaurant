import "reflect-metadata";

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from "type-graphql";
import path from "path";

import { RestaurantResolver } from './resolvers/restaurant-resolver';
import { ProductResolver } from "./resolvers/product-resolver";

async function bootstrap() { 
  const schema = await buildSchema({
    resolvers: [
      RestaurantResolver,
      ProductResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  });

  const server = new ApolloServer({
    schema
  });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      return {
        dataSources: {
          restaurantsAPI: new RestaurantResolver(),
          productsAPI: new ProductResolver()
        }
      }
    },
    listen: { 
      port: parseInt(process.env.APOLLO_PORT || '') 
    }
  });

  console.log(`🚀  Server ready at: ${url}`);
}

bootstrap();