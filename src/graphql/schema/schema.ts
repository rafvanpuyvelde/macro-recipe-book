import { buildSchema, GraphQLSchema } from "graphql";

// Construct a schema, using GraphQL schema language
const schema: GraphQLSchema = buildSchema(`
  scalar Date

  type Query {
    getRecipe(id: ID!): Recipe
  }

  type Recipe {
    Id: ID!
    Name: String!
    Description: String
    PublishDate: Date!
    UserId: ID!
    Category: RecipeCategory!
  }

  type RecipeCategory {
    Id: ID!
    Name: String!
  }
`);

export default schema;
