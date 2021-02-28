import styled from "styled-components";

export const ContextContainer = styled.div`
  width: 100%;
`;

type SongItemContainerProps = {
  readonly isCurrentSong?: boolean;
};

export const SongItemContainer = styled.div<SongItemContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1em;
  border-radius: 5px;
  width: 100%;
  padding: 10px 20px 10px 50px;

  :hover {
    background-color: #2a2a2a;
  }

  :focus-within {
    background-color: #655f5a;
  }

  .number {
    display: ${(props) => (props.isCurrentSong ? "none" : "flex")};
  }

  :hover .number {
    display: ${(props) => (props.isCurrentSong ? "none" : "none")};
  }

  .playButton {
    display: ${(props) => (props.isCurrentSong ? "flex" : "none")};
  }

  :hover .playButton {
    display: ${(props) => (props.isCurrentSong ? "flex" : "flex")};
  }

  .favButton > i {
    opacity: 0;
  }

  :hover .favButton > i {
    opacity: 1;
  }

  .options > i {
    opacity: 0;
  }

  :hover .options > i {
    opacity: 1;
  }
`;

export type CurrentSongProp = {
  readonly isCurrentSong?: boolean;
};

export const Number = styled.div<CurrentSongProp>`
  position: absolute;
  transform: translate(-45px, 0px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
       props.isCurrentSong
        ? props.theme.color.lightGreen
        : props.theme.color.lightGray};
  width: 40px;
  margin-right: 10px;
`;

export const PlayButton = styled(Number)`
  padding-left: 5px;
  padding-right: 1px;

  :hover {
    cursor: pointer;
    color: ${(props) =>
      props.isCurrentSong
        ? props.theme.color.lightGreen
        : props.theme.color.lightGray};
  }
`;

export const AlbumIMG = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.secondary};
  height: 40px;

  img {
    height: 100%;
  }
`;

export const SongTitle = styled.div<CurrentSongProp>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) =>
    props.isCurrentSong
      ? props.theme.color.lightGreen
      : props.theme.color.lightGray};
  margin-left: 15px;
  width: 100%;
  letter-spacing: 0.5px;
`;

export const FavButton = styled.div<CurrentSongProp>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.isCurrentSong
      ? props.theme.color.lightGreen
      : props.theme.color.lightGray};
  width: 40px;
  margin: 0px 10px;

  :hover {
    color: ${(props) =>
      props.isCurrentSong
        ? props.theme.color.lightGreen
        : props.theme.color.lightGray};
    cursor: pointer;
  }
`;

export const Time = styled.div<CurrentSongProp>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.isCurrentSong
      ? props.theme.color.lightGreen
      : props.theme.color.lightGray};
  width: 40px;
  letter-spacing: 1px;
  padding: 0px 10px;
  margin: 0px 5px;
`;

export const Options = styled(Time)`
  font-size: 0.9em;

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.secondary};
  }
`;

export const OptionsMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 200px;
  opacity: 1;
  background-color: ${(props) => props.theme.background.optionsMenu};
  padding: 5px 5px;
  border-radius: 3px;
  z-index: 10;
  -webkit-box-shadow: -7px 9px 24px 0px rgba(0, 0, 0, 0.62);
  box-shadow: -7px 9px 24px 0px rgba(0, 0, 0, 0.62);
`;

export const Option = styled.div`
  width: 100%;
  padding: 10px 10px;
  color: ${(props) => props.theme.color.lightGray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  :hover {
    color: ${(props) => props.theme.color.secondary};
    background-color: #ffffff10;
  }

  span > div {
    display: none;
  }

  :hover > div {
    display: flex;
  }
`;

export const PlaylistsContainer = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 210px;
  opacity: 1;
  background-color: ${(props) => props.theme.background.optionsMenu};
  transform: translate(-220px, -10px);
  padding: 5px 5px;
  border-radius: 3px;
  z-index: 10;
  -webkit-box-shadow: -7px 9px 24px 0px rgba(0, 0, 0, 0.62);
  box-shadow: -7px 9px 24px 0px rgba(0, 0, 0, 0.62);
`;

export const Playlist = styled(Option)``;
