import React from "react";
import { Navbar } from "./components/Navbar/index";
import { Sidebar } from "./components/Sidebar/index";
import { Main } from "./components/Main/index";
import { Player } from "./components/Player/index";
import { EditDetails } from "./components/Modals/EditDetails";
import { BurgerMenuButton } from "./components/BurgerMenuButton";
import { Container } from "./layout.styled";
import { ReactPlayerContextProvider } from "../../contexts/ReactPlayer.context";
import { PlaylistsContextProvider } from "../../contexts/Playlists.context";
import { EditDetailsContextProvider } from "../../contexts/EditDetails.context";

const BurgerMenu = React.lazy(() =>
  import("./components/BurgerMenu").then(({ BurgerMenu }) => ({
    default: BurgerMenu,
  }))
);

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
