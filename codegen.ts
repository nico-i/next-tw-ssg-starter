import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
      schema: "./graphql/schema.graphql",
      documents: "**/graphql/**/*.graphql",
  generates: {
    "__generated__/gql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        avoidOptionals: true,
      },
    },
  },
};

export default config;