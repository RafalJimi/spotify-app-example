import React from "react";
import {
  LatestItemContainer,
  ImageContainer,
  Overlay,
  TrackInfo,
} from "./layout.styled";

type LatestItemProps = {
  handleOnClick: (e: React.MouseEvent) => void;
};;

export const LatestItem = ({ handleOnClick }: LatestItemProps) => {
  return (
    <LatestItemContainer onClick={handleOnClick}>
      <ImageContainer>
        <Overlay>
          <p className="title">Master of puppets</p>
          <p className="author">Metallica</p>
          <p className="play">PLAY NOW</p>
        </Overlay>
      </ImageContainer>
      <TrackInfo>
        <p className="title">Master of puppets</p>
        <p className="author">Metallica</p>
        <p className="play">PLAY NOW</p>
      </TrackInfo>
    </LatestItemContainer>
  );
};
