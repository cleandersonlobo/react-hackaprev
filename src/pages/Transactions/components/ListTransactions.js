import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { TransactionsContenxt } from '../Transactions';
import { BoxDivider } from '../styles';
import ItemTransaction from './ItemTransaction';

const ListTransactions = () => {
  const { client = null } = useContext(TransactionsContenxt);
  if (!client) return null;
  const { transactions } = client;
  return (
    <List>
      {transactions.map((trans) => (
        <React.Fragment key={`${trans.product}-${trans.date}`}>
          <ItemTransaction transaction={trans} />
          <BoxDivider>
            <Divider orientation="vertical" />
          </BoxDivider>
        </React.Fragment>
      ))}
    </List>
  );
};

ListTransactions.propTypes = {};

export default ListTransactions;
