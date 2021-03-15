import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useReactPlayerContext } from "../../../../../../contexts/ReactPlayer.context";
import { clearFavSongsState } from "../../../../../../store/favouriteSongs/favouriteSongsArray/actions";
import { favouriteSongsArrayRX, alreadyFetchedRX } from "../../../../../../store/favouriteSongs/favouriteSongsArray/selectors";
import { fetchUserFavouriteSongsStarted } from "../../../../../../store/favouriteSongs/fetchUserFavouriteSongs/actions";
import {
  isLoadingRX,
  isErrorRX,
} from "../../../../.././../store/favouriteSongs/fetchUserFavouriteSongs/selectors";
import { FavouriteLayout } from "./layout";

export const Favourite = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUserFavouriteSongsStarted());
    return () => {
      dispatch(clearFavSongsState());
    };
  }, [])
  
  const favouriteSongs = useSelector(favouriteSongsArrayRX);
  const alreadyFetched = useSelector(alreadyFetchedRX);
  const isLoading = useSelector(isLoadingRX);
  const isError = useSelector(isErrorRX);

  const { setFetchedSongsArr } = useReactPlayerContext();

  useEffect(() => {
    if (favouriteSongs.length > 0) setFetchedSongsArr(favouriteSongs);
  }, [favouriteSongs]);
  
  return (
    <FavouriteLayout
      favouriteSongs={favouriteSongs}
      alreadyFetched={alreadyFetched}
      isLoading={isLoading}
      isError={isError}
    />
  );
};
