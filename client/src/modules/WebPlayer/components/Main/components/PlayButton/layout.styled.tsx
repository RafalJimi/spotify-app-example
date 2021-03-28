import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

type PlayButtonProps = {
  play: boolean;
};

export const PlayButton = styled.div<PlayButtonProps>`
  height: 55px;
  width: 55px;
  background-color: ${(props) => props.theme.background.playButton};
  margin: 20px 0px 30px 0px;
  border-radius: 35px;
  color: ${(props) => props.theme.color.secondary};
  font-size: 1.4em;
  padding-left: ${({ play }) => (play ? "0px" : "5px")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: none;

  :hover {
    -webkit-box-shadow: 0px 0px 0px 3px #1db954;
    box-shadow: 0px 0px 0px 3px #1db954;
    font-size: 1.5em;
    cursor: pointer;
  }

  @media ${width[750]} {
    margin: 0px 0px 20px 0px;

    :hover {
      box-shadow: none;
    }
  }

  @media ${width[500]} {
    height: 45px;
    width: 45px;
    font-size: 1.2em;
  }
`;
