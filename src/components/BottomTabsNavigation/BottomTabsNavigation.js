import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home, AccountBalanceWallet, SwapHorizontalCircleSharp, People } from '@material-ui/icons';
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
        <BottomNavigationAction label="Inicio" value="/" icon={<Home />} color="info" />
        <BottomNavigationAction
          label="Transações"
          value="/transacao"
          icon={<SwapHorizontalCircleSharp />}
        />
        <BottomNavigationAction label="Carteira" icon={<AccountBalanceWallet />} />
        <BottomNavigationAction label="Perfil" icon={<People />} />
      </BottomNavigation>
    </Footer>
  );
};

export default BottomTabsNavigation;
