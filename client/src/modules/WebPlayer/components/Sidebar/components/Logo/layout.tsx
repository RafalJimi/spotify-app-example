import React from "react";
import logo from "../../../../../../assets/spotify-logo.png";
import { Container } from "./layout.styled";

type LogoLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
};

export const LogoLayout = ({ handleOnClick }: LogoLayoutProps) => (
  <Container>
    <img onClick={handleOnClick} src={logo} alt="" />
  </Container>
);
