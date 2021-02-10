import React from "react";
import { FavSongsContainer, LastAdded, ListLength } from "./layout.styled";

export const FavSongsLayout = () => (
  <FavSongsContainer>
    <LastAdded>
      <span>Last added:</span>
      <div>
        Metallica <span>Master of puppets</span>
      </div>
    </LastAdded>
    <ListLength>5 Favourite songs</ListLength>
    <div className="playButton">
      <i className="fas fa-play"></i>
    </div>
  </FavSongsContainer>
);
