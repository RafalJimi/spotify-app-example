import React from "react";
import { Sidebar } from "./components/Sidebar/index";
import { WebPlayerContainer } from "./layout.styled";

export const WebPlayerLayout = () => (
  <WebPlayerContainer>
    <Sidebar />
  </WebPlayerContainer>
);
