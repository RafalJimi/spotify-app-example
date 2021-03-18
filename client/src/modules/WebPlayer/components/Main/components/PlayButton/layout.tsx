import React from "react";
import { PlayButton } from "./layout.styled";

type PlayButtonLayout = {
  play: boolean;
  handlePlaySongsButton: (e: React.MouseEvent) => void;
};

export const PlayButtonLayout = ({
  play,
  handlePlaySongsButton,
}: PlayButtonLayout) => (
  <PlayButton onClick={handlePlaySongsButton} play={play}>
    {play ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
  </PlayButton>
);
