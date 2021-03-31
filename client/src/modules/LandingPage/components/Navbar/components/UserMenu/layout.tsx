import React, { forwardRef } from "react";
import photo from "../../../../../../assets/test_photo.png";
import {
  Container,
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
  handleOnClick: (e: React.MouseEvent) => void;
  handleSignOut: (e: React.MouseEvent) => void;
  userNickname: string;
};

export const UserMenuLayout = forwardRef<HTMLElement, UserMenuLayoutProps>(
  (
    {
      handleMenu,
      isOpen,
      handleOnClick,
      handleSignOut,
      userNickname,
    }: UserMenuLayoutProps,
    ref: any
  ) => (
    <Container ref={ref}>
      <Panel onClick={handleMenu}>
        <UserImgContainer>
          <img src={photo} alt="" />
        </UserImgContainer>
        <ProfileContainer>
          {userNickname.length > 0 ? userNickname : "Profile"}
        </ProfileContainer>
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
        <UserMenuItem onClick={handleOnClick}>Account</UserMenuItem>
        <UserMenuItem onClick={handleSignOut}>Sign out</UserMenuItem>
      </UserMenu>
    </Container>
  )
);
