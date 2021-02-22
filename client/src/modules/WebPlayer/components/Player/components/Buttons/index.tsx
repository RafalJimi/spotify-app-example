import React, { memo, useState, useCallback } from "react";
import { useReactPlayerContext } from "../../../../../../contexts/ReactPlayer.context";
import { ButtonsLayout } from "./layout";

export const Buttons = memo(() => {
  const [ShowRemaining, setShowRemaining] = useState(false);

  const {
    Play,
    handleSetPlay,
    Played,
    PlayedInSecs,
    SongLengthInSecs,
    Duration,
    Loop,
    handleSetLoop,
    Shuffle,
    handleSetShuffle,
    setSeekTo,
    handleNext,
    handlePrev,
  } = useReactPlayerContext();

  const handleSeekTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    let second: number = parseFloat(e.target.value);
    setSeekTo(second);
  };

  const handleSetRemaining = useCallback(() => {
    setShowRemaining(!ShowRemaining);
  }, [ShowRemaining]);
  
  console.log(PlayedInSecs);
  
  return (
    <ButtonsLayout
      play={Play}
      handleSetPlay={handleSetPlay}
      played={Played}
      playedInSecs={PlayedInSecs}
      SongLengthInSecs={SongLengthInSecs}
      loop={Loop}
      handleSetLoop={handleSetLoop}
      shuffle={Shuffle}
      handleSetShuffle={handleSetShuffle}
      handleSeekTo={handleSeekTo}
      handleNext={handleNext}
      handlePrev={handlePrev}
      duration={Duration}
      handleSetRemaining={handleSetRemaining}
      showRemaining={ShowRemaining}
    />
  );
});
