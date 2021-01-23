import React, { Suspense } from "react";
import ReactDOM, { Renderer } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { LandingPage } from "./modules/LandingPage/index";
import { LoginPage } from "./modules/LoginPage/index";
import { RegisterPage } from "./modules/RegisterPage/index";

import { GlobalStyle } from "./styles/globalStyles";
import { light } from "./styles/themes/light";

ReactDOM.render<Renderer>(
  <Provider store={store}>
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading ...</div>}>
          <ThemeProvider theme={light}>
            <GlobalStyle />
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={RegisterPage} />
          </ThemeProvider>
        </Suspense>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
