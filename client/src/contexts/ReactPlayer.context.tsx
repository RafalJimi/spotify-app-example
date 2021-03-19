import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { Song } from "../store/types/song";

type ReactPlayerContextProps = {
  Play: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  handleSetPlay: (e: React.MouseEvent) => void;
  Played: number;
  setPlayed: React.Dispatch<React.SetStateAction<number>>;
  PlayedInSecs: number;
  setPlayedInSecs: React.Dispatch<React.SetStateAction<number>>;
  SongLengthInSecs: number;
  setSongLengthInSecs: React.Dispatch<React.SetStateAction<number>>;
  Loop: boolean;
  handleSetLoop: (e: React.MouseEvent) => void;
  Shuffle: boolean;
  handleSetShuffle: (e: React.MouseEvent) => void;
  Muted: boolean;
  handleSetMuted: (e: React.MouseEvent) => void;
  Duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  Volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  SeekTo: number;
  setSeekTo: React.Dispatch<React.SetStateAction<number>>;
  Url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  Index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  CurrentSongsArr: Song[];
  setCurrentSongsArr: React.Dispatch<React.SetStateAction<any>>;
  FetchedSongsArr: Song[];
  setFetchedSongsArr: React.Dispatch<React.SetStateAction<any>>;
  handleNext: (e: React.MouseEvent) => void;
  handlePrev: (e: React.MouseEvent) => void;
  handleEnded: () => void;
  handlePlaySongsButton: (e: React.MouseEvent) => void;
  PlayTheseSongs: boolean;
  setPlayTheseSongs: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ReactPlayerContext = createContext<
  ReactPlayerContextProps | undefined
>(undefined);

export const ReactPlayerContextProvider: React.FC = ({ children }) => {
  const [Play, setPlay] = useState(false);
  const [Played, setPlayed] = useState(0);
  const [PlayedInSecs, setPlayedInSecs] = useState(0);
  const [SongLengthInSecs, setSongLengthInSecs] = useState(0);;
  const [Loop, setLoop] = useState(false);
  const [Shuffle, setShuffle] = useState(false);
  const [Muted, setMuted] = useState(false);
  const [Duration, setDuration] = useState(0);
  const [Volume, setVolume] = useState(0.5);
  const [SeekTo, setSeekTo] = useState(0);

  const [Url, setUrl] = useState("");
  const [Index, setIndex] = useState(0);
  const [CurrentSongsArr, setCurrentSongsArr] = useState<Song[]>([]);
  const [FetchedSongsArr, setFetchedSongsArr] = useState<Song[]>([]);
  const [PlayTheseSongs, setPlayTheseSongs] = useState(false); 

  const handleSetPlay = useCallback(
    (e: React.MouseEvent) => {
      setPlay(!Play);
    },
    [Play]
  );

  const handleSetLoop = useCallback(
    (e: React.MouseEvent) => {
      setLoop(!Loop);
    },
    [Loop]
  );

  const handleSetShuffle = useCallback(
    (e: React.MouseEvent) => {
      setShuffle(!Shuffle);
    },
    [Shuffle]
  );

  const handleSetMuted = useCallback(
    (e: React.MouseEvent) => {
      setMuted(!Muted);
    },
    [Muted]
  );

  const handleNext = useCallback(
    (e: React.MouseEvent) => {
      if (Index === CurrentSongsArr.length - 1) {
        setPlay(false);
        setIndex(0);
        setUrl(CurrentSongsArr[Index].previewUrl);
        setPlay(true);
      } else {
        setPlay(false);
        setIndex(Index + 1);
        setUrl(CurrentSongsArr[Index].previewUrl);
        setPlay(true);
      }
    },
    [Index, Url, CurrentSongsArr]
  );

  const handlePrev = useCallback(
    (e: React.MouseEvent) => {
      if (Index === 0) {
        setIndex(CurrentSongsArr.length - 1);
        setPlay(true);
      } else {
        setIndex(Index - 1);
        setPlay(true);
      }
    },
    [Index, Url, CurrentSongsArr]
  );

  const handleEnded = useCallback(() => {
    if (Shuffle === true) {
      let index = Math.floor(Math.random() * CurrentSongsArr.length);
      let song: Song = CurrentSongsArr[index];
      setUrl(song.previewUrl);
      setIndex(index);
      setPlay(true);
    } else {
      if (Index === CurrentSongsArr.length - 1) {
        setUrl(CurrentSongsArr[0].previewUrl);
        setIndex(0);
        setPlay(true);
      } else {
        setPlay(false);
        setUrl(CurrentSongsArr[Index + 1].previewUrl);
        setIndex(Index + 1);
        setPlay(true);
      }
    }
  }, [Url, CurrentSongsArr, Index]);

  const handlePlaySongsButton = useCallback(
    (e: React.MouseEvent) => {
      if (
        CurrentSongsArr.length === 0 ||
        (!Play &&
          FetchedSongsArr[0].previewUrl !== CurrentSongsArr[0].previewUrl)
      ) {
        setIndex(0);
        setUrl(FetchedSongsArr[0].previewUrl);
        setPlay(true);
        setCurrentSongsArr(FetchedSongsArr);
      } else if (
        !Play &&
        FetchedSongsArr[0].previewUrl === CurrentSongsArr[0].previewUrl
      )
        setPlay(true);
      else setPlay(false);
    },
    [Play, FetchedSongsArr, Index]
  );

  const memoizedValue = useMemo(
    () => ({
      Play,
      setPlay,
      handleSetPlay,
      Played,
      setPlayed,
      PlayedInSecs,
      setPlayedInSecs,
      SongLengthInSecs,
      setSongLengthInSecs,
      Loop,
      handleSetLoop,
      Shuffle,
      handleSetShuffle,
      Muted,
      handleSetMuted,
      Duration,
      setDuration,
      Volume,
      setVolume,
      SeekTo,
      setSeekTo,
      Url,
      setUrl,
      Index,
      setIndex,
      CurrentSongsArr,
      setCurrentSongsArr,
      FetchedSongsArr,
      setFetchedSongsArr,
      handleNext,
      handlePrev,
      handleEnded,
      handlePlaySongsButton,
      PlayTheseSongs,
      setPlayTheseSongs,
    }),
    [
      Play,
      Played,
      Loop,
      Shuffle,
      Muted,
      Volume,
      SeekTo,
      Url,
      Index,
      CurrentSongsArr,
      FetchedSongsArr,
      Duration,
      PlayTheseSongs,
    ]
  );

  useEffect(() => {
    if (CurrentSongsArr.length !== 0 && CurrentSongsArr[Index].previewUrl)
      setUrl(CurrentSongsArr[Index].previewUrl);
  }, [Index, Url]);

  return (
    <ReactPlayerContext.Provider value={memoizedValue}>
      {children}
    </ReactPlayerContext.Provider>
  );
};


export const useReactPlayerContext = () => {
  const ctx = useContext(ReactPlayerContext);
  if (ctx === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return ctx;
};
