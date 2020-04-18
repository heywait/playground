import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const EXCHANGE_RATES = gql`
        {
            rates(currency: "USD") {
                currency,
                rate
            }
        }
    `;

const ExchangeRates = () => {
    const { loading, data, error } = useQuery(EXCHANGE_RATES);

    if (error) {
        return <div>Error</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
            {data.rates.map(({ currency, rate }: any) => (
                <li key={currency}>
                    {currency}: {rate}
                </li>
            ))}
        </ul>
    );
};

export { ExchangeRates };