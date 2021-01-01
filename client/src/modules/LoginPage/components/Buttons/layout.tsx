import React from "react";
import {
  ButtonsContainer,
  Title,
  FbButton,
  GoogleButton,
  Border,
} from "./layout.styled";

export const ButtonsLayout = () => (
  <ButtonsContainer>
    <Title>Please log in to Spotify to continue.</Title>
    <FbButton>
      <i className="fab fa-facebook"></i>
      <p>CONTINUE WITH FACEBOOK</p>
    </FbButton>
    <GoogleButton>
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
