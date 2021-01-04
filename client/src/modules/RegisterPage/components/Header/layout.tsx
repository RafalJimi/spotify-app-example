import React from "react";
import SpotifyLogo from "../../../../assets/spotify-logo.png";
import { HeaderContainer } from "./layout.styled";

export const HeaderLayout = () => (
  <HeaderContainer>
    <img src={SpotifyLogo} alt="" />
    <h1>Register for free and start listening.</h1>
  </HeaderContainer>
);
