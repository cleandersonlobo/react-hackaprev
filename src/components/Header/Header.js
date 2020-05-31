import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Box } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const Header = ({ themeType, onChangeTheme }) => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar justifyContent="flex-end">
        <Box display="flex" flex="1" justifyContent="flex-end" alignItems="center">
          <IconButton
            aria-label="Alternar Tema"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={onChangeTheme}
            color="inherit">
            {{ dark: <Brightness7Icon />, light: <Brightness4Icon /> }[themeType]}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  themeType: PropTypes.string,
  onChangeTheme: PropTypes.func,
};

export default Header;
