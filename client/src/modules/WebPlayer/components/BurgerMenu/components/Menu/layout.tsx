import React from "react";
import { Container, MenuItem } from "./layout.styled";

type MenuLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const MenuLayout = ({ handleOnClick }: MenuLayoutProps) => (
  <Container>
    <MenuItem onClick={handleOnClick("/player/home")}>
      <i className="fas fa-home"></i>Home
    </MenuItem>
    <MenuItem onClick={handleOnClick("/player/search")}>
      <i className="fas fa-search"></i>Search
    </MenuItem>
    <MenuItem onClick={handleOnClick("/player/library")}>
      <i className="fas fa-list"></i>Library
    </MenuItem>
  </Container>
);
