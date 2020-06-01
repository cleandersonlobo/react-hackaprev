import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
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
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(1)',
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
      <GridList className={classes.gridList} cols={1}>
        <GridListTile>
          <img
            src="/assets/img/plan_ex.png"
            alt="plano"
            className={classes.img}
            draggable="false"
          />
        </GridListTile>
        <GridListTile>
          <img
            src="/assets/img/plan_ex.png"
            alt="plano"
            className={classes.img}
            draggable="false"
          />
        </GridListTile>
      </GridList>
    </div>
  );
};

export default GridDestaques;
