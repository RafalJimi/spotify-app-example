import styled from "styled-components";
import { width } from "../../../../../../../../helpers/mediaQueries";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;

  @media ${width[750]} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 4.5em;
  color: ${(props) => props.theme.color.secondary};
  background: rgb(65, 23, 183);
  background: linear-gradient(
    145deg,
    rgba(65, 23, 183, 1) 0%,
    rgba(96, 88, 156, 1) 50%,
    rgba(122, 141, 137, 1) 100%
  );

  @media ${width[990]} {
    width: 150px;
    height: 150px;
  }

  @media ${width[500]} {
    width: 100px;
    height: 100px;
  }
`;

export const Informations = styled.div`
  color: ${(props) => props.theme.color.secondary};
  font-size: 2em;
  width: calc(100% - 230px);
  margin-left: 30px;

  span {
    font-size: 0.6em;
  }

  @media ${width[990]} {
    font-size: 1.3em;
    word-wrap: break-word;

    span {
      font-size: 0.7em;
    }
  }

  @media ${width[750]} {
    margin-left: 0px;
    margin-top: 10px;
    white-space: normal;
    word-wrap: wrap;
    width: 100%;
  }

  @media ${width[500]} {
    font-size: 0.8em;

    span {
      font-size: 1em;
    }
  }
`;
