import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {
  Storefront,
  AccountBalanceWallet,
  SwapHorizontalCircleSharp,
  People,
} from '@material-ui/icons';
import { useLocation, useHistory } from 'react-router-dom';
import { Footer } from 'styles/ui';

const BottomTabsNavigation = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <Footer>
      <BottomNavigation
        showLabels
        value={location.pathname}
        onChange={(event, newValue) => {
          history.push(newValue);
        }}>
        <BottomNavigationAction
          label="Inicio"
          value={`${process.env.PUBLIC_URL}/`}
          icon={<Storefront />}
          color="info"
        />
        <BottomNavigationAction
          label="Transações"
          value={`${process.env.PUBLIC_URL}/transacao`}
          icon={<SwapHorizontalCircleSharp />}
        />
        <BottomNavigationAction
          label="Carteira"
          value={`${process.env.PUBLIC_URL}/wallet`}
          icon={<AccountBalanceWallet />}
        />
        <BottomNavigationAction
          label="Perfil"
          value={`${process.env.PUBLIC_URL}/profile`}
          icon={<People />}
        />
      </BottomNavigation>
    </Footer>
  );
};

export default BottomTabsNavigation;
