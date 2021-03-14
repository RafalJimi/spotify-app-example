import React from "react";
import { HeaderProps } from "./index";
import { Container, ImageContainer, Informations } from "./layout.styled";

export const HeaderLayout = ({ imgUrl, category, title }: HeaderProps) => (
  <Container>
    <ImageContainer imageUrl={imgUrl}></ImageContainer>
    <Informations>
      <span>{category}</span>
      <h1>{title}</h1>
    </Informations>
  </Container>
);
