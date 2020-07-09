import React from "react";
import LoginPage from "./pages/LoginPage";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Theme";

const isDarkMode: boolean = true;

const App = () => {
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className="wrapper-app">
        <LoginPage />
      </div>
    </ThemeProvider>
  );
};

export default App;
