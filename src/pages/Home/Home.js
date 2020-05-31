import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Image, CardEmpresas } from 'styles/ui';

const empresas = [
  {
    name: 'Submarino',
    discont: '15%',
    img:
      'data:image/png;base64,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',
  },
  {
    name: 'Americanas',
    discont: '10%',
    img: 'https://cuponomia-a.akamaihd.net/img/stores/original/americanas-637195380182765939.png',
  },
];

const Home = () => {
  return (
    <Container>
      <h2>Cashback</h2>
      <Grid container spacing={2} alignItems="stretch" direction="row">
        {empresas.map((empresa) => (
          <Grid key={empresa.name} item xs={4} sm={4} md={3} lg={2}>
            <CardEmpresas>
              <Box display="block">
                <Image src={empresa.img} alt={empresa.name} />
              </Box>
              <div className="card-details">
                <span>{empresa.discont}</span>
                <span>de volta</span>
              </div>
            </CardEmpresas>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

Home.propTypes = {};

export default Home;
