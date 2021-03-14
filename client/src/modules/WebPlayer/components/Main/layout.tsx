import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/index";
import { Search } from "./components/Search/index";
import { Library } from "./components/Library/index";
import { Artist } from "./components/Artist/index";
import { Album } from "./components/Album/index";
import { Playlist } from "./components/Playlist/index";
import { Favourite } from "./components/Favourite/index";
import { Container } from "./layout.styled";
import { FavouriteSongsContextProvider } from "../../../../contexts/FavouriteSongs.context";

export const MainLayout = () => {
  return (
    <Container>
      <Switch>
        <Suspense fallback={<div>Loading ...</div>}>
          <Route path="/player/home" exact component={Home} />
          <Route path="/player/search" exact component={Search} />
          <Route path="/player/library" exact component={Library} />
          <FavouriteSongsContextProvider>
            <Route path="/player/artist/:artistName" exact component={Artist} />
            <Route path="/player/album/:albumName" exact component={Album} />
            <Route
              path="/player/playlist/:playlistID"
              exact
              component={Playlist}
            />
            <Route path="/player/favourite" exact component={Favourite} />
          </FavouriteSongsContextProvider>
        </Suspense>
      </Switch>
    </Container>
  );
};
