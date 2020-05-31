import React from 'react';

const lazyImport = (filename) => React.lazy(() => import(`pages/${filename}/${filename}`));

export const routes = [
  {
    exact: true,
    path: '/',
    component: lazyImport('Home'),
  },
  {
    exact: true,
    path: '/transacao',
    component: lazyImport('Transactions'),
  },
];
