import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import GlobalStyle from "./GlobalStyle";
import { createCleanStore } from "./utils/store/configureStore";
import * as theme from "./utils/theme";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={createCleanStore()}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
