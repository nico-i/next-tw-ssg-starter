import { getSdk } from "@/__generated__/gql";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://example.com/graphql-endpoint"); // Replace with your GraphQL endpoint URL

export const sdk = getSdk(client);
