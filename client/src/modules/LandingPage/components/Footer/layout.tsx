import React from "react";
import {
  FooterContainer,
  ContentContainer,
  Row1,
  Row2,
  LogoContainer,
  SocialMediaContainer,
  SocialMediaItem,
  RedirectsContainer,
  RedirectsItem,
  Copyright,
} from "./layout.styled";
import logo from "../../../../assets/spotify-logo.png";

export const FooterLayout = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <Row1>
          <LogoContainer>
            <img src={logo} alt="" />
          </LogoContainer>
          <SocialMediaContainer>
            <SocialMediaItem>
              <i className="fab fa-instagram"></i>
            </SocialMediaItem>
            <SocialMediaItem>
              <i className="fab fa-twitter"></i>
            </SocialMediaItem>
            <SocialMediaItem>
              <i className="fab fa-facebook-f"></i>
            </SocialMediaItem>
          </SocialMediaContainer>
        </Row1>
        <Row2>
          <RedirectsContainer>
            <RedirectsItem>Legal issues</RedirectsItem>
            <RedirectsItem>Privacy Center</RedirectsItem>
            <RedirectsItem>Privacy policy</RedirectsItem>
            <RedirectsItem>Cookies</RedirectsItem>
            <RedirectsItem>About ads</RedirectsItem>
          </RedirectsContainer>
          <Copyright>&copy; Spotify-app-example 2021</Copyright>
        </Row2>
      </ContentContainer>
    </FooterContainer>
  );
};
