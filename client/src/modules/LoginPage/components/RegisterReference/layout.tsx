import React from "react";
import { Container, ReferenceTitle, ReferenceButton } from "./layout.styled";

type RegisterReferenceLayoutProps = {
  handleOnClick: (location: string) => (e: React.MouseEvent) => void;
};

export const RegisterReferenceLayout = ({
  handleOnClick,
}: RegisterReferenceLayoutProps) => (
  <Container>
    <ReferenceTitle>You dont have an account yet?</ReferenceTitle>
    <ReferenceButton onClick={handleOnClick("/signup")}>
      SIGN UP FOR SPOTIFY
    </ReferenceButton>
  </Container>
);
