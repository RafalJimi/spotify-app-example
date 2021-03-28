import React from "react";
import { Navbar } from "./components/Navbar/index";
import { Sidebar } from "./components/Sidebar/index";
import { Main } from "./components/Main/index";
import { Player } from "./components/Player/index";
import { EditDetails } from "./components/Modals/EditDetails";
import { BurgerMenuButton } from "./components/BurgerMenuButton";
import { BurgerMenu } from "./components/BurgerMenu";
import { Container } from "./layout.styled";
import { ReactPlayerContextProvider } from "../../contexts/ReactPlayer.context";
import { PlaylistsContextProvider } from "../../contexts/Playlists.context";
import { EditDetailsContextProvider } from "../../contexts/EditDetails.context";

export const WebPlayerLayout = () => (
  <Container>
    <Navbar />
    <BurgerMenuButton />
    <PlaylistsContextProvider>
      <BurgerMenu />
      <Sidebar />
      <ReactPlayerContextProvider>
        <EditDetailsContextProvider>
          <Main />
          <EditDetails />
        </EditDetailsContextProvider>
        <Player />
      </ReactPlayerContextProvider>
    </PlaylistsContextProvider>
  </Container>
);
