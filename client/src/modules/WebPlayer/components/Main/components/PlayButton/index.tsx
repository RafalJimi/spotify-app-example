import React from "react";
import { useReactPlayerContext } from "../../../../../../contexts/ReactPlayer.context";
import { PlayButtonLayout } from "./layout";

export const PlayButton = () => {
  
  const { Play, handlePlaySongsButton } = useReactPlayerContext();

  return (
    <PlayButtonLayout
      play={Play}
      handlePlaySongsButton={handlePlaySongsButton}
    />
  );
};
