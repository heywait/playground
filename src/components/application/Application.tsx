import React from 'react';
import '../../styles/reset.css';
import styles from './styles.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ExchangeRates } from '../exchangeRates/ExchangeRates';

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

const Application = () => (
    <ApolloProvider client={client}>
        <div className={`${styles.root} ${styles.root_test}`}>
            <ExchangeRates />
        </div>
    </ApolloProvider>
);

export default Application;
