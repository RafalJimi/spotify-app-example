import React from "react";
import photo from "../../../../../../assets/test_photo.png";
import {
  Container,
  Panel,
  UserImgContainer,
  NameContainer,
  IconContainer,
  UserMenu,
  UserMenuItem,
} from "./layout.styled";

type UserMenuLayoutProps = {
  handleMenu: (e: React.MouseEvent) => void;
  isOpen: boolean;
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
  handleSignOut: (e: React.MouseEvent) => void;
};

export const UserMenuLayout = ({
  handleMenu,
  isOpen,
  handleOnClick,
  handleSignOut,
}: UserMenuLayoutProps) => (
  <Container>
    <Panel isOpen={isOpen} onClick={handleMenu}>
      <UserImgContainer>
        <img src={photo} alt="" />
      </UserImgContainer>
      <NameContainer>Rafał Rafał</NameContainer>
      {isOpen ? (
        <IconContainer style={{ paddingTop: "7px" }}>
          <i className="fas fa-sort-up"></i>
        </IconContainer>
      ) : (
        <IconContainer style={{ paddingBottom: "7px" }}>
          <i className="fas fa-sort-down"></i>
        </IconContainer>
      )}
    </Panel>
    <UserMenu isOpen={isOpen}>
      <UserMenuItem>Account</UserMenuItem>
      <UserMenuItem onClick={handleSignOut}>Sign out</UserMenuItem>
    </UserMenu>
  </Container>
);
