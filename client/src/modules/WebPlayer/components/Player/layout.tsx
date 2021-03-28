import React from "react";
import { Buttons } from "./components/Buttons/index";
import { Volume } from "./components/Volume/index";
import { ReactMusicPlayer } from "./components/ReactPlayer/index";
import { Container } from "./layout.styled";

export const PlayerLayout = () => (
  <Container>
    <Buttons />
    <Volume />
    <ReactMusicPlayer />
  </Container>
);
