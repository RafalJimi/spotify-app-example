import React from "react";
import { LandingPageAlbumsProps } from "../../consts";
import { Container, ImageContainer, Overlay, TrackInfo } from "./layout.styled";

type LatestItemProps = {
  latestItemData: LandingPageAlbumsProps;
  handleOnClick: (e: React.MouseEvent) => void;
};

export const LatestItemLayout = ({
  latestItemData,
  handleOnClick,
}: LatestItemProps) => {
  return (
    <Container>
      <ImageContainer imgUrl={latestItemData.imgUrl} onClick={handleOnClick}>
        <Overlay>
          <p className="title">{latestItemData.albumName}</p>
          <p className="author">{latestItemData.artistName}</p>
          <p className="play">PLAY NOW</p>
        </Overlay>
      </ImageContainer>
      <TrackInfo onClick={handleOnClick}>
        <p className="title">{latestItemData.albumName}</p>
        <p className="author">{latestItemData.artistName}</p>
        <p className="play">PLAY NOW</p>
      </TrackInfo>
    </Container>
  );
};
