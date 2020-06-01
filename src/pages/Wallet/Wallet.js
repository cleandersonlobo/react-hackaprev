import React from 'react';
import { Container } from '@material-ui/core';
import CardSaldo from './components/CardSaldo';

const Wallet = () => {
  return (
    <Container>
      <CardSaldo />
    </Container>
  );
};

Wallet.propTypes = {};

export default Wallet;
