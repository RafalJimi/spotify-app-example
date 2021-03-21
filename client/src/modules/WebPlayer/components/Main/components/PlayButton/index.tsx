import React, { useState, useEffect } from "react";
import { useReactPlayerContext } from "../../../../../../contexts/ReactPlayer.context";
import { PlayButtonLayout } from "./layout";

export const PlayButton = () => {
  const [ ShowPlay, setShowPlay] = useState(false)
  
  const { Play, handlePlaySongsButton, FetchedSongsArr, CurrentSongsArr } = useReactPlayerContext();

  useEffect(() => {
    if (CurrentSongsArr.length > 0 && FetchedSongsArr.length > 0) {
      if (CurrentSongsArr[0].previewUrl === FetchedSongsArr[0].previewUrl && Play) {
        setShowPlay(true)
      } else setShowPlay(false)
    }
  }, [Play, FetchedSongsArr, CurrentSongsArr])
  
  return (
    <PlayButtonLayout
      showPlay={ShowPlay}
      handlePlaySongsButton={handlePlaySongsButton}
    />
  );
};
