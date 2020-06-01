import React from 'react';
import { PLANOS_MOCK } from 'data/planos';
import PlanoItem from './PlanoItem';

const PlanosDestaques = () => {
  return (
    <>
      <h3>Planos</h3>
      {PLANOS_MOCK.map((plano) => (
        <PlanoItem key={plano.name} plano={plano} />
      ))}
    </>
  );
};

export default PlanosDestaques;
