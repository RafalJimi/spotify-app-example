import React from "react";
import { Buttons } from "./components/Buttons/index";
import { Volume } from "./components/Volume/index";
import { PlayerContainer } from "./layout.styled";

export const PlayerLayout = () => (
  <PlayerContainer>
    <Buttons />
    <Volume />
  </PlayerContainer>
);
