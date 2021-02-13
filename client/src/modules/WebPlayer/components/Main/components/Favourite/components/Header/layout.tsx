import React from "react";
import { HeaderContainer, ImageContainer, Informations } from "./layout.styled";

export const HeaderLayout = () => (
  <HeaderContainer>
    <ImageContainer>
      <i className="fas fa-heart"></i>
    </ImageContainer>
    <Informations>
      <span>Playlist</span>
      <h1>Favourite songs</h1>
    </Informations>
  </HeaderContainer>
);
