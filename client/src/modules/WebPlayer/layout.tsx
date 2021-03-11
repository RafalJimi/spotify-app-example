import React from "react";
import { Navbar } from "./components/Navbar/index";
import { Sidebar } from "./components/Sidebar/index";
import { Main } from "./components/Main/index";
import { Player } from "./components/Player/index";
import { WebPlayerContainer } from "./layout.styled";
import { ReactPlayerContextProvider } from "../../contexts/ReactPlayer.context";
import { PlaylistsContextProvider } from "../../contexts/Playlists.context";

export const WebPlayerLayout = () => (
  <WebPlayerContainer>
    <Navbar />
    <PlaylistsContextProvider>
        <Sidebar />
        <ReactPlayerContextProvider>
          <Main />
          <Player />
        </ReactPlayerContextProvider>
    </PlaylistsContextProvider>
  </WebPlayerContainer>
);
