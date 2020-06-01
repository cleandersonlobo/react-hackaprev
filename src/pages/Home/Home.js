import React from 'react';
import Container from '@material-ui/core/Container';
import { SearchBar } from 'components';
import GridDestaques from './components/GridDestaques';
import LojaDestaques from './components/LojaDestaques';
import PlanosDestaques from './components/PlanosDestaques';

const Home = () => {
  return (
    <Container>
      <SearchBar />
      <GridDestaques />
      <PlanosDestaques />
      <h3>Lojas</h3>
      <LojaDestaques />
    </Container>
  );
};

Home.propTypes = {};

export default Home;
