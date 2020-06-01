import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Badge } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { ClienteContenxt } from 'contexts';

const Header = ({ themeType, onChangeTheme }) => {
  const { client } = useContext(ClienteContenxt);
  const { first_name, last_name } = client;
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container>
        <Toolbar>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ paddingTop: 15, paddingBottom: 15 }}>
            <Grid item>
              <Box fontSize={22} fontWeight="fontWeightBold">
                Oi, {first_name} {last_name}
              </Box>
            </Grid>
            <Grid item direction="row">
              <Tooltip title="Notificações">
                <IconButton aria-label="notification">
                  <Badge badgeContent={4} color="primary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Alternar tema claro/escuro">
                <IconButton
                  aria-label="Alternar Tema"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={onChangeTheme}
                  color="inherit">
                  {{ dark: <Brightness7Icon />, light: <Brightness4Icon /> }[themeType]}
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  themeType: PropTypes.string,
  onChangeTheme: PropTypes.func,
};

export default Header;
