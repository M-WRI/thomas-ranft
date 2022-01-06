import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cky1tltmp089a01xs6v2a5r2b/master",
  cache: new InMemoryCache(),
});
