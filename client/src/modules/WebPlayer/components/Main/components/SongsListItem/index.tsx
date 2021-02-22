import React, { memo, useState, useCallback, useEffect } from "react";
import { Song } from "../../../../../../store/types/song";
import { useReactPlayerContext } from "../../../../../../contexts/ReactPlayer.context";
import { SongItemLayout } from "./layout";

export type SongsListItem = {
  id: number;
  songData: Song;
};

export const SongsListItem = memo(({ id, songData }: SongsListItem) => {
  
  const [IsPlaying, setIsPlaying] = useState(false);
  const [IsCurrentSong, setIsCurrentSong] = useState(false);

  const {
    Url,
    Play,
    setUrl,
    setIndex,
    setPlay,
    CurrentSongsArr,
    setCurrentSongsArr,
    FetchedSongsArr,
  } = useReactPlayerContext();

  const handlePlayButton = useCallback(
    (e: React.MouseEvent) => {
      if (songData.previewUrl === Url && Play)
        setPlay(false)
      else {
        setIndex(id);
        setUrl(songData.previewUrl);
        setPlay(true);
        setCurrentSongsArr(FetchedSongsArr);
      } 
    },
    [Play, Url]
  );

  useEffect(() => {
    if (Url === songData.previewUrl) setIsCurrentSong(true);
    else setIsCurrentSong(false);
  }, [Url]);

  useEffect(() => {
    if (Url === songData.previewUrl && Play) setIsPlaying(true);
    else setIsPlaying(false);
  }, [Url, Play]);

  return (
    <SongItemLayout
      id={id}
      songData={songData}
      handlePlayButton={handlePlayButton}
      isPlaying={IsPlaying}
      isCurrentSong={IsCurrentSong}
    />
  );
});
