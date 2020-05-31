/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SuspenseLoading, BottomTabsNavigation, Header } from 'components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Main } from 'styles/ui';
import { routes } from './routes';

const WaitingComponent = (Component) => (props = {}) => (
  <React.Suspense fallback={<SuspenseLoading hideLogo />}>
    <Component {...props} />
  </React.Suspense>
);

const App = () => {
  const [type, setType] = useState('dark');
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${type})`);

  const handleOnChangeTheme = useCallback(() => {
    setType((val) => (val === 'dark' ? 'light' : 'dark'));
  }, []);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            light: '#ffac33',
            main: '#ff9800',
            dark: '#b26a00',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <React.Suspense fallback={<SuspenseLoading hideLogo />}>
          <Main>
            <Container>
              <Header themeType={type} onChangeTheme={handleOnChangeTheme} />
              <Switch>
                {routes.map(({ component: Component, ...otherProps }) => {
                  const LazyComponent = WaitingComponent(Component);
                  return (
                    <Route key={otherProps.path} {...otherProps}>
                      <LazyComponent />
                    </Route>
                  );
                })}
              </Switch>
            </Container>
            <BottomTabsNavigation />
          </Main>
        </React.Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
