import React, { createContext, useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Song } from "../store/types/song";
import { fetchUserFavouriteSongsStarted } from "../store/favouriteSongs/fetchUserFavouriteSongs/actions";
import { favouriteSongsArrayRX } from "../store/favouriteSongs/favouriteSongsArray/selectors";

type FavouriteSongsContextProps = {
  FavouriteSongs: Song[];
};

export const FavouriteSongsContext = createContext<
  FavouriteSongsContextProps | undefined
>(undefined);

export const FavouriteSongsContextProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserFavouriteSongsStarted());
  }, []);

  const FavouriteSongs = useSelector(favouriteSongsArrayRX);

  const memoizedValue = useMemo(() => ({ FavouriteSongs }), [FavouriteSongs]);

  return (
    <FavouriteSongsContext.Provider value={memoizedValue}>
      {children}
    </FavouriteSongsContext.Provider>
  );
};

export const useFavouriteSongsContext = () => {
  const ctx = useContext(FavouriteSongsContext);
  if (ctx === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return ctx;
};
