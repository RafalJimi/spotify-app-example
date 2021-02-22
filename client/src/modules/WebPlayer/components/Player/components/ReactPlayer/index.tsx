import React, { memo, useRef, useCallback, useEffect } from "react";
import ReactPlayer from "react-player";
import { useReactPlayerContext } from "../../../../../../contexts/ReactPlayer.context";

type RefProps = {
  current: any;
};

export const ReactMusicPlayer = memo(() => {
  const {
    Url,
    Play,
    setPlay,
    setPlayed,
    SeekTo,
    handleEnded,
    setDuration,
    Volume,
    Muted,
    setPlayedInSecs,
    setSongLengthInSecs,
  } = useReactPlayerContext();

  const handlePlay = useCallback((): void => {
    setPlay(true);
  }, []);

  const handlePause = useCallback((): void => {
    setPlay(false);
  }, []);

  const handleProgress = (value: any) => {
    let playedValue = parseFloat(value.played);
    setPlayed(playedValue);
    setPlayedInSecs(value.playedSeconds);
    setSongLengthInSecs(value.loadedSeconds);
  };

  const ref: RefProps = useRef(null);

  useEffect(() => {
    //@ts-ignore
    ref.current.seekTo(SeekTo);
    console.log(ref.current);
    setPlayed(SeekTo);
  }, [SeekTo]);

  const handleDuration = (duration: any) => {
    setDuration(duration);
  };

  return (
    <ReactPlayer
      ref={ref}
      className="react-player"
      width="0px"
      height="0px"
      url={Url}
      pip={true}
      playing={Play}
      loop={false}
      volume={Volume}
      muted={Muted}
      onReady={() => console.log("onReady")}
      onPlay={handlePlay}
      onPause={handlePause}
      onBuffer={() => setPlayedInSecs(0)}
      onSeek={(e) => {}}
      onStart={() => console.log("onStart")}
      onEnded={handleEnded}
      onError={(e) => console.log("onError", e)}
      onProgress={handleProgress}
      onDuration={handleDuration}
    />
  );
});
