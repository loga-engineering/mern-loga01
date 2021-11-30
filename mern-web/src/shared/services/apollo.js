import {
    ApolloClient,
    HttpLink,
    ApolloLink,
    InMemoryCache,
    concat
} from '@apollo/client';

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            // 'Authorization': `Bearer ${auth.getToken()}`,
        }
    }));

    return forward(operation);
})

const httpLink = new HttpLink({ uri: 'http://localhost:8080/graphql' });

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
});

export default client;
