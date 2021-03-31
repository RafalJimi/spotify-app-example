import React, { forwardRef } from "react";
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
  handleMenuItem: (e: React.MouseEvent) => void;
  handleSignOut: (e: React.MouseEvent) => void;
  userNickname: string;
};

export const UserMenuLayout = forwardRef<HTMLElement, UserMenuLayoutProps>(
  (
    {
      handleMenu,
      isOpen,
      handleMenuItem,
      handleSignOut,
      userNickname,
    }: UserMenuLayoutProps,
    ref: any
  ) => (
    <Container ref={ref}>
      <Panel isOpen={isOpen} onClick={handleMenu}>
        <UserImgContainer>
          <img src={photo} alt="" />
        </UserImgContainer>
        <NameContainer>
          {userNickname.length > 0 ? userNickname : "User"}
        </NameContainer>
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
        <UserMenuItem onClick={handleMenuItem}>Account</UserMenuItem>
        <UserMenuItem onClick={handleSignOut}>Sign out</UserMenuItem>
      </UserMenu>
    </Container>
  )
);
