import styled from "styled-components";

export const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0px 10px;
  margin-top: 25px;
`;

export const Title = styled.div`
  width: 100%;
  color: ${(props) => props.theme.color.lightGray};
  font-size: 0.8em;
  font-weight: 500;
  padding-left: 15px;
  letter-spacing: 1px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  padding-bottom: 10px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.color.lightGray};
  border-radius: 3px;
  font-size: 0.85em;
  font-weight: 700;
  transition: color 0.2s;
  padding-left: 15px;
  letter-spacing: 1px;

  :hover {
    color: ${(props) => props.theme.color.secondary};
    cursor: pointer;
  }
`;

export const CreatePlaylist = styled(Button)`
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: ${(props) => props.theme.color.lightGray};
    width: 32px;
    height: 32px;
    font-weight: 100;
    font-size: 1.2em;
    margin-right: 15px;
    transition: background-color 0.2s;
  }

  :hover {
    color: ${(props) => props.theme.color.secondary};
    cursor: pointer;
  }

  :hover > span {
    background-color: ${(props) => props.theme.color.secondary};
  }
`;

export const FavsSongsButton = styled(Button)`
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.lightGray};
    background: rgb(155, 45, 191);
    background: linear-gradient(
      145deg,
      rgba(155, 45, 191, 1) 0%,
      rgba(52, 21, 231, 1) 58%,
      rgba(255, 255, 255, 1) 100%
    );
    width: 32px;
    height: 32px;
    font-weight: 100;
    font-size: 1em;
    margin-right: 15px;
    transition: background-color 0.2s, filter 0.2s, color 0.2s;
    filter: brightness(70%);
  }

  :hover {
    color: ${(props) => props.theme.color.secondary};
    cursor: pointer;
  }

  :hover > span {
    background-color: ${(props) => props.theme.color.secondary};
    filter: brightness(100%);
    color: ${(props) => props.theme.color.secondary};
  }
`;

export const Border = styled.div`
  height: 1px;
  width: 180px;
  background-color: ${(props) => props.theme.background.github_hover};
`;

export const Playlists = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  color: ${(props) => props.theme.color.lightGray};

  div {
    font-size: 0.85em;
    padding: 10px 15px;
    letter-spacing: 0.5px;
  }

  div:hover {
    color: ${(props) => props.theme.color.secondary};
    cursor: pointer;
  }
`;
