import React from 'react';
import { Typography, Container } from '@material-ui/core';
import ListTransactions from './components/ListTransactions';

const Transactions = () => {
  return (
    <Container>
      <Typography variant="h6" className="font-weight-bold">
        Transações
      </Typography>
      <ListTransactions />
    </Container>
  );
};

export default Transactions;
