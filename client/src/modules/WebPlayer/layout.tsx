import React from "react";
import { Navbar } from "./components/Navbar/index";
import { Sidebar } from "./components/Sidebar/index";
import { Main } from "./components/Main/index";
import { Player } from "./components/Player/index";
import { WebPlayerContainer } from "./layout.styled";

export const WebPlayerLayout = () => (
  <WebPlayerContainer>
    <Navbar />
    <Sidebar />
    <Main />
    <Player />
  </WebPlayerContainer>
);
