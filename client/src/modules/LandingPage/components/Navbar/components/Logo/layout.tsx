import React from "react";
import { Container } from "./layout.styled";
import logo from "../../../../../../assets/spotify-logo.png";

type LogoLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
};

export const LogoLayout = ({ handleOnClick }: LogoLayoutProps) => (
  <Container onClick={handleOnClick}>
    <img src={logo} alt="" />
  </Container>
);
