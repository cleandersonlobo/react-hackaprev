import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { CLIENTE_MOCK } from 'data/client';
import ListTransactions from './components/ListTransactions';

export const TransactionsContenxt = React.createContext({});

const Transactions = () => {
  return (
    <Container>
      <Typography variant="h6" className="font-weight-bold">
        Transações
      </Typography>
      <TransactionsContenxt.Provider value={{ client: CLIENTE_MOCK }}>
        <ListTransactions />
      </TransactionsContenxt.Provider>
    </Container>
  );
};

export default Transactions;
