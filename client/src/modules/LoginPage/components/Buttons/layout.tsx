import React from "react";
import {
  ButtonsContainer,
  Title,
  GithubButton,
  GoogleButton,
  Border,
} from "./layout.styled";

type ButtonsLayoutProps = {
  handleFacebookButton: (e: React.MouseEvent) => void;
  handleGoogleButton: (e: React.MouseEvent) => void;
};

export const ButtonsLayout = ({
  handleGoogleButton,
  handleFacebookButton,
}: ButtonsLayoutProps) => (
  <ButtonsContainer>
    <Title>Please log in to Spotify to continue.</Title>
    <GithubButton onClick={handleFacebookButton}>
      <i className="fab fa-github"></i>
      <p>CONTINUE WITH FACEBOOK</p>
    </GithubButton>
    <GoogleButton onClick={handleGoogleButton}>
      <i className="fab fa-google"></i>
      <p>CONTINUE WITH GOOGLE</p>
    </GoogleButton>
    <Border>
      <span />
      <p>OR</p>
      <span />
    </Border>
  </ButtonsContainer>
);
