import React from "react";
import { PlayButton } from "./layout.styled";

type PlayButtonLayout = {
  showPlay: boolean;
  handlePlaySongsButton: (e: React.MouseEvent) => void;
};

export const PlayButtonLayout = ({
  showPlay,
  handlePlaySongsButton,
}: PlayButtonLayout) => (
  <PlayButton onClick={handlePlaySongsButton} play={showPlay}>
    {showPlay ? (
      <i className="fas fa-pause"></i>
    ) : (
      <i className="fas fa-play"></i>
    )}
  </PlayButton>
);
