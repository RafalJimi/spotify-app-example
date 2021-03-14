import React from "react";
import { Container, ImageContainer, Informations } from "./layout.styled";

export const HeaderLayout = () => (
  <Container>
    <ImageContainer>
      <i className="fas fa-heart"></i>
    </ImageContainer>
    <Informations>
      <span>Playlist</span>
      <h1>Favourite songs</h1>
    </Informations>
  </Container>
);
