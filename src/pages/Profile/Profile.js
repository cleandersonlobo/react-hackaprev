import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';

const Profile = () => {
  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={5} lg={2}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/logo_transparent.png`}
            width="100%"
            height="100%"
            alt="logo"
          />
        </Grid>
        <Box textAlign="center" color="light">
          Uma previdência para cada etapa da sua vida
        </Box>
      </Grid>
    </Container>
  );
};

export default Profile;
