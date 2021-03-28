import React from "react";
import { Container } from "./layout.styled";

type MenuLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const MenuLayout = ({ handleOnClick }: MenuLayoutProps) => (
  <Container>
    <span onClick={handleOnClick("/signup")}>Register</span>
    <span onClick={handleOnClick("/login")}>Sign in</span>
  </Container>
);
