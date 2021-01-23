import React from "react";
import {
  LatestItemContainer,
  ImageContainer,
  Overlay,
  TrackInfo,
} from "./layout";

export const LatestItem = () => {
  return (
    <LatestItemContainer>
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
