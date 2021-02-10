import React from "react";
import {
  ListItemContainer,
  ImageContainer,
  ListItemTitle,
  ListItemSubtitle,
} from "./layout.styled";

type ListItemLayoutProps = {
  borderRadius?: number;
  handleOnClick: (e: React.MouseEvent) => void;
};

export const ListItemLayout = ({
  borderRadius,
  handleOnClick,
}: ListItemLayoutProps) => (
  <ListItemContainer onClick={handleOnClick}>
    <ImageContainer
      style={{ borderRadius: borderRadius ? `${borderRadius}px` : "2px" }}
    >
      <div>
        <i className="fas fa-play"></i>
      </div>
    </ImageContainer>
    <ListItemTitle>Metallica</ListItemTitle>
    <ListItemSubtitle>Master of puppets</ListItemSubtitle>
  </ListItemContainer>
);
