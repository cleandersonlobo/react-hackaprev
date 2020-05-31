import React, { useContext, useMemo } from 'react';
import { WalletIcon } from 'components';
import Skeleton from '@material-ui/lab/Skeleton';
import { Paper, Grid, Box } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import StarIcon from '@material-ui/icons/Star';
import { ClienteContenxt } from 'contexts';
import { cashbackCalculate } from 'helpers';

const CardSaldo = () => {
  const { client } = useContext(ClienteContenxt);
  const { transactions } = client || { transactions: [] };
  const saldo = useMemo(() => cashbackCalculate(transactions), []);

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={8} md={6} justify="center">
        <Paper square={false} elevation={1}>
          <Box padding={2}>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid xs="auto" item style={{ opacity: 0.8 }}>
                <WalletIcon />
              </Grid>
              <Grid item xs={6}>
                <Box fontWeight="fontWeightLight" textAlign="center">
                  Saldo
                </Box>
                {saldo ? (
                  <Box fontWeight="fontWeightBold" textAlign="center" fontSize={22} lineHeight={2}>
                    {saldo.cashback_amount}
                  </Box>
                ) : (
                  <Skeleton animation="wave" height={40} />
                )}
                <Grid container justify="center" alignItems="center">
                  <Grid item>
                    <StarIcon style={{ color: yellow[700], fontSize: 22 }} />
                    <StarIcon style={{ color: yellow[700], fontSize: 22 }} />
                    <StarIcon style={{ color: yellow[700], fontSize: 22 }} />
                    <StarIcon style={{ color: yellow[700], fontSize: 22 }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CardSaldo;
