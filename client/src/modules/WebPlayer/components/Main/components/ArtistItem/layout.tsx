import React from "react";
import { ContextMenuTrigger } from "react-contextmenu";
import { Artist } from "../../../../../../store/types/artist";
import {
  ContextContainer,
  Container,
  ImageContainer,
  Title,
} from "./layout.styled";

type ListItemLayoutProps = {
  handleOnClick: (e: React.MouseEvent) => void;
  id: number;
  artistItemData: Artist;
};

export const ArtistItemLayout = ({
  handleOnClick,
  id,
  artistItemData,
}: ListItemLayoutProps) => (
  <ContextContainer>
    <ContextMenuTrigger id={`ArtistItemMenu-${id}`}>
      <Container className="listItem" onClick={handleOnClick}>
        <ImageContainer>
          <Title>{artistItemData.artistName}</Title>
        </ImageContainer>
      </Container>
    </ContextMenuTrigger>
  </ContextContainer>
);
