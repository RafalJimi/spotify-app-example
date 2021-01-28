import React, { Suspense } from "react";
import ReactDOM, { Renderer } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Slide, ToastContainer } from "react-toastify";

import { LandingPage } from "./modules/LandingPage/index";
import { LoginPage } from "./modules/LoginPage/index";
import { RegisterPage } from "./modules/RegisterPage/index";
import { WebPlayer } from "./modules/WebPlayer/index";

import { GlobalStyle } from "./styles/globalStyles";
import { light } from "./styles/themes/light";

import "react-toastify/dist/ReactToastify.css";

const BurgerMenu = React.lazy(() =>
  import("./modules/BurgerMenu/index").then(({ BurgerMenu }) => ({
    default: BurgerMenu,
  }))
);

ReactDOM.render<Renderer>(
  <Provider store={store}>
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading ...</div>}>
          <ThemeProvider theme={light}>
            <GlobalStyle />
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              transition={Slide}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Route path="/" exact component={LandingPage} />
            <Route path="/" exact component={BurgerMenu} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={RegisterPage} />
            <Route path="/player" exact component={WebPlayer} />
          </ThemeProvider>
        </Suspense>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
