import React from "react";
import { LoginReferenceContainer, ReferenceTitle } from "./layout.styled";


type LoginReferenceLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const LoginReferenceLayout = ({ handleOnClick }: LoginReferenceLayoutProps) => (
  <LoginReferenceContainer>
    <ReferenceTitle>
      Already have an account? <span onClick={handleOnClick("/login")}>Log in</span>.
    </ReferenceTitle>
  </LoginReferenceContainer>
);
