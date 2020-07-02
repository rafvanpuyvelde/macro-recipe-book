import express from "express";
import "reflect-metadata";
import graphqlHTTP from "express-graphql";
import graphQlSchema from "./graphql/schema/schema";
import graphQlResolvers from "./graphql/resolvers/Recipe";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");

export default app;
