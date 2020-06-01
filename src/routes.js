import React from 'react';

const lazyImport = (filename) => React.lazy(() => import(`pages/${filename}/${filename}`));

export const routes = [
  {
    exact: true,
    path: `${process.env.PUBLIC_URL}/`,
    component: lazyImport('Home'),
  },
  {
    exact: true,
    path: `${process.env.PUBLIC_URL}/transacao`,
    component: lazyImport('Transactions'),
  },
  {
    exact: true,
    path: `${process.env.PUBLIC_URL}/wallet`,
    component: lazyImport('Wallet'),
  },
  {
    exact: true,
    path: `${process.env.PUBLIC_URL}/profile`,
    component: lazyImport('Profile'),
  },
];
