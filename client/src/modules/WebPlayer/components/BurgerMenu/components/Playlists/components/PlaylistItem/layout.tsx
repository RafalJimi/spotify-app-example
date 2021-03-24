import React from "react";
import { Container } from "./layout.styled";

type PlaylistItemLayoutProps = {
  playlistName: string;
  isActive: boolean;
  playlistID: string;
  handleRedirectToPlaylist: (location: string) => (e: React.MouseEvent) => void;
};

export const PlaylistItemLayout = ({
  playlistName,
  isActive,
  playlistID,
  handleRedirectToPlaylist,
}: PlaylistItemLayoutProps) => {
  return (
    <Container
      active={isActive}
      onClick={handleRedirectToPlaylist(`/player/playlist/${playlistID}`)}
    >
      {playlistName}
    </Container>
  );
};
