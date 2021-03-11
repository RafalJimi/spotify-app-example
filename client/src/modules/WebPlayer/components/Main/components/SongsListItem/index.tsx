import React, { memo, useState, useCallback, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Song } from "../../../../../../store/types/song";
import { useReactPlayerContext } from "../../../../../../contexts/ReactPlayer.context";
import { SongItemLayout } from "./layout";
import { addSongToFavouriteStarted } from "../../../../../../store/favouriteSongs/addSongToFavourite/actions";
import { removeSongFromFavouriteStarted } from "../../../../../../store/favouriteSongs/removeSongFromFavourite/actions";
import { addSongToPlaylistStarted } from "../../../../../../store/playlist/addSongToPlaylist/actions";
import { removeSongFromPlaylistStarted } from "../../../../../../store/playlist/removeSongFromPlaylist/actions";
import { userPlaylistsRX } from "../../../../../../store/playlist/fetchUserPlaylists/selectors";
import { useClickOutside } from "../../../../../../hooks/useClickOutside";
import { useFavouriteSongsContext } from "../../../../../../contexts/FavouriteSongs.context";
import { usePlaylistsContext } from "../../../../../../contexts/Playlists.context";

export type SongsListItem = {
  id: number;
  songData: Song;
  category?: string;
};

export const SongsListItem = memo(
  ({ id, songData, category }: SongsListItem) => {
    const [IsPlaying, setIsPlaying] = useState(false);
    const [IsCurrentSong, setIsCurrentSong] = useState(false);
    const [IsFavourite, setIsFavourite] = useState(false);
    const [IsOpen, setIsOpen] = useState(false);

    const divRef = useRef<HTMLElement>(null);
    const history = useHistory();

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
        if (songData.previewUrl === Url && Play) setPlay(false);
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

    const dispatch = useDispatch();

    const handleFavButton = useCallback(
      (e: React.MouseEvent) => {
        IsFavourite
          ? dispatch(removeSongFromFavouriteStarted(songData))
          : dispatch(addSongToFavouriteStarted(songData));
      },
      [IsFavourite]
    );

    const { FavouriteSongs } = useFavouriteSongsContext();

    useEffect(() => {
      const isFav = FavouriteSongs.filter(
        (song) => song.previewUrl === songData.previewUrl
      );
      isFav.length > 0 ? setIsFavourite(true) : setIsFavourite(false);
    }, [FavouriteSongs]);

    // Menu handlers

    const handleOpenMenu = useCallback(
      (e: React.MouseEvent) => {
        setIsOpen(true);
      },
      [IsOpen]
    );

    const handleMenuItem = useCallback(
      (path: string) => (e: React.MouseEvent) => {
        history.push(path);
        setIsOpen(false);
      },
      [IsOpen]
    );

    const handleClickOutside = useCallback(
      (event) => {
        setIsOpen(false);
      },
      [IsOpen]
    );

    useClickOutside(divRef, handleClickOutside);

    const userPlaylists = useSelector(userPlaylistsRX);

    const handleAddSongToPlaylist = useCallback(
      (id: string) => (e: React.MouseEvent) => {
        dispatch(addSongToPlaylistStarted(id, songData));
        setIsOpen(false);
      },
      []
    );

    const handleRemoveSongFromPlaylist = useCallback(
      (id: string) => (e: React.MouseEvent) => {
        dispatch(removeSongFromPlaylistStarted(id, songData));
        setIsOpen(false);
      },
      []
    );

    const {
      CurrentPlaylistID,
      PlaylistComponentIsMounted,
    } = usePlaylistsContext();

    return (
      <SongItemLayout
        id={id}
        songData={songData}
        category={category}
        handlePlayButton={handlePlayButton}
        isPlaying={IsPlaying}
        isCurrentSong={IsCurrentSong}
        isFavourite={IsFavourite}
        handleFavButton={handleFavButton}
        userPlaylists={userPlaylists}
        isOpen={IsOpen}
        ref={divRef}
        handleOpenMenu={handleOpenMenu}
        handleMenuItem={handleMenuItem}
        handleAddSongToPlaylist={handleAddSongToPlaylist}
        handleRemoveSongFromPlaylist={handleRemoveSongFromPlaylist}
        currentPlaylistID={CurrentPlaylistID}
        playlistComponentIsMounted={PlaylistComponentIsMounted}
      />
    );
  }
);
