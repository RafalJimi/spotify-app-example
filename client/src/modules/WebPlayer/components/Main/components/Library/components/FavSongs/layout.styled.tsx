import styled from "styled-components";

export const FavSongsContainer = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: rgb(72, 15, 244);
  background: linear-gradient(
    155deg,
    rgba(72, 15, 244, 1) 0%,
    rgba(141, 140, 229, 1) 100%
  );
  margin-top: 20px;
  border-radius: 5px;
  padding: 80px 0px 20px 30px;
  color: ${(props) => props.theme.color.secondary};
  letter-spacing: 0.5px;

  :hover {
    cursor: pointer;
  }

  .playButton {
    width: 50px;
    height: 50px;
    position: absolute;
    margin-left: 300px;
    margin-top: 110px;
    transition: margin-top 0.3s, opacity 0.3s;
    opacity: 0;
    border-radius: 25px;
    background-color: ${(props) => props.theme.background.playButton};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.secondary};
    font-size: 1em;
    padding-left: 2px;
    padding-top: 2px;
    -webkit-box-shadow: -2px 4px 8px 0px rgba(0, 0, 0, 0.61);
    box-shadow: -2px 4px 8px 0px rgba(0, 0, 0, 0.61);
  }

  :hover > .playButton {
    position: absolute;
    margin-left: 300px;
    margin-top: 100px;
    transition: margin-top 0.3s, opacity 0.3s;
    opacity: 0;
    opacity: 1;
  }

  .playButton:hover {
    cursor: default;
    font-size: 1.1em;
    -webkit-box-shadow: 0px 0px 0px 2px #1db954;
    box-shadow: 0px 0px 0px 2px #1db954;
  }
`;

export const LastAdded = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 0.8em;

  div {
    margin-top: 5px;
    font-size: 1.5em;
    font-weight: 700;
  }

  div > span {
    margin-left: 5px;
    color: ${(props) => props.theme.color.lightGray};
  }
`;

export const ListLength = styled(LastAdded)`
  font-size: 1em;
  font-weight: 300;
`;
