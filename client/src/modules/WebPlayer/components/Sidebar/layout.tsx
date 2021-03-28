import React from "react";
import { Logo } from "./components/Logo/index";
import { Menu } from "./components/Menu/index";
import { Playlists } from "./components/Playlists/index";
import { Container } from "./layout.styled";


export const SidebarLayout = () => (
  <Container>
    <Logo />
    <Menu />
    <Playlists />
  </Container>
);
