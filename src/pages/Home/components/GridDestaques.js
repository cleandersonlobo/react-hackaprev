import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    overflowX: 'auto',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  },
  img: {
    maxHeight: 180,
    maxWidth: 375,
    objectFit: 'contain',
  },
}));
const GridDestaques = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.gridList} spacing={2}>
        <Grid item xs lg={3}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/plan_ex.png`}
            alt="plano"
            className={classes.img}
            draggable="false"
          />
        </Grid>
        <Grid item xs lg>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/plan_ex.png`}
            alt="plano"
            className={classes.img}
            draggable="false"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default GridDestaques;
