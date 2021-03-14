import React from "react";
import { Song } from "../../../../../../../../store/types/song";
import { Container, LastAdded, ListLength } from "./layout.styled";

type FavSongsLayoutProps = {
  favouriteSongs: Song[];
  handleRedirect: (path: string) => (e: React.MouseEvent) => void;
};

export const FavSongsLayout = ({
  favouriteSongs,
  handleRedirect,
}: FavSongsLayoutProps) => (
  <Container onClick={handleRedirect("/player/favourite")}>
    {favouriteSongs.length > 0 && (
      <LastAdded>
        <span>Last added:</span>
        <div>
          {favouriteSongs[favouriteSongs.length - 1].artistName}{" "}
          <span>{favouriteSongs[favouriteSongs.length - 1].trackName}</span>
        </div>
      </LastAdded>
    )}
    <ListLength FavSongsArr={favouriteSongs.length}>
      {favouriteSongs.length} Favourite songs
    </ListLength>
    <div className="playButton">
      <i className="fas fa-play"></i>
    </div>
  </Container>
);
