import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "http://fiipractic-react.cultofcoders.com/graphql",
});

export default client;