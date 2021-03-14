import React, { useEffect, useCallback } from "react";
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearFavSongsState } from "../../../../../../../../store/favouriteSongs/favouriteSongsArray/actions";
import { favouriteSongsArrayRX } from "../../../../../../../../store/favouriteSongs/favouriteSongsArray/selectors";
import { fetchUserFavouriteSongsStarted } from "../../../../../../../../store/favouriteSongs/fetchUserFavouriteSongs/actions";
import { FavSongsLayout } from "./layout";

export const FavSongs = () => {
  
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    dispatch(fetchUserFavouriteSongsStarted());
    return () => {
      dispatch(clearFavSongsState());
    };
  }, []);
  
  const favouriteSongs = useSelector(favouriteSongsArrayRX);
  
  const handleRedirect = useCallback(
    (path: string) => (e: React.MouseEvent) => {
      history.push(path)
    },
    [],
  )
  
  return (
    <FavSongsLayout
      favouriteSongs={favouriteSongs}
      handleRedirect={handleRedirect}
    />
  );
};
