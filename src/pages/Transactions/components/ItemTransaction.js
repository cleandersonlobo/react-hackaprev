import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { convertMoney } from 'helpers';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  category: {
    fontSize: '0.9em',
    color: theme.palette.text.secondary,
  },
  product: {
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
  },
  percentage: {
    fontWeight: 'bold',
    fontSize: '0.9em',
    color: theme.palette.success.dark,
  },
}));

const ItemTransaction = ({ transaction }) => {
  const classes = useStyles();
  const { product, category, cashback_percentage, price_currency, price_value } = transaction;
  const price = useMemo(() => convertMoney(price_currency, price_value), [price_value]);
  return (
    <>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt={category}>{category.charAt(0)}</Avatar>
        </ListItemAvatar>
        <Grid container direction="row" justify="space-between">
          <Grid item xs={6} lg="auto">
            <Typography component="p" noWrap color="light" className={classes.category}>
              {category}
            </Typography>
            <Typography component="p" className={classes.product}>
              {product}
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="p" align="right" className={classes.price}>
              {price}
            </Typography>
            <Typography component="p" align="right" className={classes.percentage}>
              {cashback_percentage}% de volta
            </Typography>
          </Grid>
        </Grid>
      </ListItem>
    </>
  );
};

ItemTransaction.propTypes = {
  transaction: PropTypes.shape({
    category: PropTypes.string,
    product: PropTypes.string,
    cashback_percentage: PropTypes.number,
    price_currency: PropTypes.string,
    price_value: PropTypes.number,
  }),
};

export default ItemTransaction;
