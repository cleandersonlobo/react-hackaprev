import React from 'react';
import ReactLoading from 'react-loading';
import { Container, Content } from './styles';

const SuspenseLoading = () => {
  return (
    <Container>
      <Content>
        <ReactLoading type="bars" color="#FF4858" />
      </Content>
    </Container>
  );
};

export default SuspenseLoading;
