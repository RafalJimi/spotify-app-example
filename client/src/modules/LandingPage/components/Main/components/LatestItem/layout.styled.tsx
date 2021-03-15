import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

export const LatestItemContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media ${width[750]} {
    display: inline-block;
    margin: 0px 10px;
  }
`;

type ImageContainerProps = {
  imgUrl: string;
};

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 380px;
  height: 380px;
  background-image: ${({  imgUrl  }) =>
     imgUrl
         ? `url(${imgUrl})`
      : `url(https://e.snmc.io/i/600/w/4c7b97cfb9def528736ac47dfb5800dc/6177813)`};
  background-position: center;
  background-size: cover;

  :hover div {
    opacity: 100%;
    cursor: pointer;
  }

  @media ${width[1200]} {
    width: 310px;
    height: 310px;
  }

  @media ${width[990]} {
    width: 230px;
    height: 230px;
  }

  @media ${width[750]} {
    display: inline-block;
    width: 50vw;
    height: 50vw;
    -webkit-box-shadow: 0px 0px 18px -5px #000000;
    box-shadow: 0px 0px 18px -5px #000000;
  }
`;

export const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #00000090;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0%;
  transition: opacity 0.3s;

  .title {
    color: ${(props) => props.theme.color.secondary};
    font-size: 1.9em;
    font-weight: 700;
    text-align: center;
  }

  .author {
    color: ${(props) => props.theme.color.tertiary};
    font-size: 1.2em;
    margin-top: 10px;
  }

  .play {
    color: ${(props) => props.theme.color.lightGreen};
    font-size: 0.97em;
    margin-top: 10px;
    margin-top: 30px;
    font-weight: 500;
    letter-spacing: 1px;
  }

  @media ${width[750]} {
    display: none;
  }
`;

export const TrackInfo = styled.div`
  display: none;

  @media ${width[750]} {
    height: auto;
    display: block;

    .title {
      color: ${(props) => props.theme.color.tertiary};
      font-size: 1.1em;
      font-weight: 700;
      text-align: center;
      margin-top: 20px;
      white-space: nowrap;
      width: 50vw;
      overflow: hidden;
    }

    .author {
      color: ${(props) => props.theme.color.lightGray};
      font-size: 1em;
      margin-top: 10px;
      text-align: center;
      width: 50vw;
      overflow: hidden;
    }

    .play {
      color: ${(props) => props.theme.color.lightGreen};
      font-size: 0.97em;
      margin-top: 10px;
      margin-top: 15px;
      font-weight: 500;
      letter-spacing: 1px;
      text-align: center;
      width: 50vw;
      overflow: hidden;
    }
  }
`;
