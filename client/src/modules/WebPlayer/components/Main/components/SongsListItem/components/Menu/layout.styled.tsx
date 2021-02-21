import styled from "styled-components";
import { CurrentSongProp } from "../../layout.styled";
import { Time } from "../../layout.styled";

export const Options = styled(Time)<CurrentSongProp>`
  font-size: 0.9em;
  color: ${(props) =>
    props.isCurrentSong
      ? props.theme.color.lightGreen
      : props.theme.color.lightGray};
  width: 40px;

  :hover {
    cursor: pointer;
    color: ${(props) =>
      props.isCurrentSong
        ? props.theme.color.lightGreen
        : props.theme.color.lightGray};
    width: 40px;
  }
`;

type OptionsMenuProps = {
  isOpen: boolean;
};

export const OptionsMenu = styled.div<OptionsMenuProps>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 200px;
  opacity: 1;
  background-color: ${(props) => props.theme.background.optionsMenu};
  transform: translate(-60%, 50%);
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
