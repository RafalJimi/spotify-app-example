import React, { Suspense } from "react";
import ReactDOM, { Renderer } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { LoginPage } from "./modules/LoginPage/index";

import { GlobalStyle } from "./styles/globalStyles";
import { light } from "./styles/themes/light";

ReactDOM.render<Renderer>(
  <Provider store={store}>
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading ...</div>}>
          <ThemeProvider theme={light}></ThemeProvider>
          <GlobalStyle />
          <LoginPage />
        </Suspense>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
