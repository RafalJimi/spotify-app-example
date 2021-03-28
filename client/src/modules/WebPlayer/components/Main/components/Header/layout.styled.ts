import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
  overflow: hidden;

  @media ${width[750]} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

type ImageContainerProps = {
  imageUrl?: string;
};

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  background-image: ${({ imageUrl }) =>
    imageUrl
      ? `url(${imageUrl})`
      : "url(https://cdn.pixabay.com/photo/2018/04/11/19/48/music-3311599_960_720.png)"};
  background-position: center;
  background-size: cover;

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
