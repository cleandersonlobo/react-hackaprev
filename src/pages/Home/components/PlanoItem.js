import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper, Divider, Button } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  category: {
    fontSize: '0.9em',
    color: theme.palette.text.secondary,
  },
  name: {
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
  },
  yield: {
    fontWeight: 'bold',
    fontSize: '1.1em',
    color: theme.palette.success.main,
  },
  yield_time: {
    fontSize: '0.8em',
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: 15,
    marginBottom: 15,
  },
}));

const PlanoItem = ({ plano }) => {
  const classes = useStyles();
  const { name, category, yield_percentage, yield_time } = plano;
  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" justify="space-between">
        <Grid item xs={6} lg>
          <Typography component="p" noWrap className={classes.name}>
            {name}
          </Typography>
          <Typography component="p" className={classes.category}>
            {category}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography component="p" align="right" className={classes.yield}>
            <ArrowUpwardIcon style={{ fontSize: 14 }} />
            {yield_percentage}%
          </Typography>
          <Typography component="p" align="right" className={classes.yield_time}>
            {yield_time} meses
          </Typography>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" style={{ marginTop: 15, marginBottom: 15 }} />
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <Button variant="outlined" size="medium" color="secondary">
            SIMULAR
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" size="medium" color="secondary">
            COMPRAR
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
PlanoItem.propTypes = {
  plano: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    yield_percentage: PropTypes.number,
    yield_time: PropTypes.number,
  }),
};

export default PlanoItem;
