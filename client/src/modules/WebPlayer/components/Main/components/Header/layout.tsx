import React from "react";
import { HeaderProps } from "./index";
import { HeaderContainer, ImageContainer, Informations } from "./layout.styled";

export const HeaderLayout = ({ imgUrl, category, title }: HeaderProps) => (
  <HeaderContainer>
    <ImageContainer imageUrl={imgUrl}></ImageContainer>
    <Informations>
      <span>{category}</span>
      <h1>{title}</h1>
    </Informations>
  </HeaderContainer>
);
