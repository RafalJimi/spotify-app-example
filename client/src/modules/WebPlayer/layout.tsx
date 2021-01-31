import React from "react";
import { Sidebar } from "./components/Sidebar/index";
import { Player } from "./components/Player/index";
import { WebPlayerContainer } from "./layout.styled";

export const WebPlayerLayout = () => (
  <WebPlayerContainer>
    <Sidebar />
    <Player />
  </WebPlayerContainer>
);
