import React from "react";
import logo from "../../../../../../assets/spotify-logo.png";
import { Container, CloseButton } from "./layout.styled";

type LogoLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
  handleCloseButton: (e: React.MouseEvent) => void;
};

export const LogoLayout = ({
  handleOnClick,
  handleCloseButton,
}: LogoLayoutProps) => (
  <Container>
    <img onClick={handleOnClick} src={logo} alt="" />
    <CloseButton onClick={handleCloseButton}>
      <i className="fas fa-times"></i>
    </CloseButton>
  </Container>
);
