import React from "react";
import {
  RegisterReferenceContainer,
  ReferenceTitle,
  ReferenceButton,
} from "./layout.styled";

type RegisterReferenceLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const RegisterReferenceLayout = ({
  handleOnClick,
}: RegisterReferenceLayoutProps) => (
  <RegisterReferenceContainer>
    <ReferenceTitle>You dont have an account yet?</ReferenceTitle>
    <ReferenceButton onClick={handleOnClick("/signup")}>
      SIGN UP FOR SPOTIFY
    </ReferenceButton>
  </RegisterReferenceContainer>
);
