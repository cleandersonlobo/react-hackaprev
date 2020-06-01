import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Image, CardEmpresas } from 'styles/ui';

import { LOJAS_MOCK } from 'data/lojas';

const LojaDestaques = () => {
  return (
    <Grid container spacing={2} alignItems="stretch" direction="row">
      {LOJAS_MOCK.map((empresa) => (
        <Grid key={empresa.name} item xs={4} sm={3} md={2} lg={1}>
          <CardEmpresas>
            <Box display="flex" alignItems="stretch" height="100%" maxHeight={120}>
              <Image src={empresa.img} alt={empresa.name} draggable="false" />
            </Box>
            <div className="card-details">
              <Typography>{empresa.discont}</Typography>
              <Typography>de volta</Typography>
            </div>
          </CardEmpresas>
        </Grid>
      ))}
    </Grid>
  );
};

export default LojaDestaques;
