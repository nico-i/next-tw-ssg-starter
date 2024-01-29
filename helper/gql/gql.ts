import { getSdk } from "@/__generated__/gql";
import { GraphQLClient } from "graphql-request";

if (!process.env.GQL_API) {
  throw new Error("GQL_API is not defined");
}

const client = new GraphQLClient(process.env.GQL_API);

export const sdk = getSdk(client);
