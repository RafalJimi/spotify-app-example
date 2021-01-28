import React from "react";
import photo from "../../../../../../assets/test_photo.png";
import {
  UserMenuContainer,
  Panel,
  UserImgContainer,
  ProfileContainer,
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
  <UserMenuContainer>
    <Panel onClick={handleMenu}>
      <UserImgContainer>
        <img src={photo} alt="" />
      </UserImgContainer>
      <ProfileContainer>Profile</ProfileContainer>
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
  </UserMenuContainer>
);
