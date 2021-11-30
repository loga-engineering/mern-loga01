import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider} from '@apollo/client';
import {default as apolloClient} from './shared/services/apollo';

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <App/>
    </ApolloProvider>,
    document.getElementById('root')
);
