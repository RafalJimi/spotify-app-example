import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/index";
import { Search } from "./components/Search/index";
import { MainContainer } from "./layout.styled";

export const MainLayout = () => (
  <MainContainer>
    <Switch>
      <Suspense fallback={<div>Loading ...</div>}>
        <Route path="/player/home" exact component={Home} />
        <Route path="/player/search" exact component={Search} />
      </Suspense>
    </Switch>
  </MainContainer>
);
