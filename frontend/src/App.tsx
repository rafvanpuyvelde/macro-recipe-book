import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Theme";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";

const isDarkMode: boolean = true;

const history = createBrowserHistory();

const AppWrapper = styled.div`
  min-height: 100vh;
`;

const App = () => {
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router history={history}>
        <AppWrapper className="wrapper-app">
          <Routes />
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
