import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const ItemTransaction = ({ transaction }) => {
  const { product, category } = transaction;
  return (
    <>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt={category}>{category.charAt(0)}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={product} secondary={category} />
      </ListItem>
    </>
  );
};

ItemTransaction.propTypes = {
  transaction: PropTypes.shape({
    category: PropTypes.string,
    product: PropTypes.string,
  }),
};

export default ItemTransaction;
