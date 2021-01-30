import React from "react";
import { Logo } from "./components/Logo/index";
import { Menu } from "./components/Menu/index";
import { Playlists } from "./components/Playlists/index";
import { SidebarContainer } from "./layout.styled";

export const SidebarLayout = () => (
  <SidebarContainer>
    <Logo />
    <Menu />
    <Playlists />
  </SidebarContainer>
);
