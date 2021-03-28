import styled from "styled-components";
import { width } from "../../../../../helpers/mediaQueries";

type ContainerProps = {
  isOpen: boolean;
};

export const Container = styled.main<ContainerProps>`
  position: fixed;
  background: #00000080;
  width: 100vw;
  height: 100vh;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  z-index: 10;
`;

export const DetailsContainer = styled.main`
  width: 500px;
  height: 300px;
  background-color: ${(props) => props.theme.background.optionsMenu};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media ${width[750]} {
    width: 400px;
    height: 240px;
  }

  @media ${width[500]} {
    width: 300px;
    height: 200px;
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.header`
  color: ${(props) => props.theme.color.secondary};
  padding: 20px 20px;
  font-size: 1.4em;
  font-weight: 500;

  @media ${width[750]} {
    font-size: 1.2em;
  }

  @media ${width[500]} {
    font-size: 1em;
  }
`;

export const CloseButton = styled.div`
  color: ${(props) => props.theme.color.secondary};
  position: relative;
  font-size: 1.2em;
  margin-right: 20px;
  width: 40px;
  height: 40px;
  padding-bottom: 20px;
  padding-left: 30px;

  :hover {
    cursor: pointer;
  }
`;

export const Details = styled.div`
  padding: 0px 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

type ImgContainerProps = {
  imageUrl?: string;
};

export const ImgContainer = styled.div<ImgContainerProps>`
  width: 200px;
  height: 200px;
  background-image: ${({ imageUrl }) =>
    imageUrl
      ? `url(${imageUrl})`
      : "url(https://cdn.pixabay.com/photo/2018/04/11/19/48/music-3311599_960_720.png)"};
  background-position: center;
  background-size: cover;

  @media ${width[750]} {
    width: 140px;
    height: 140px;
  }

  @media ${width[500]} {
    width: 100px;
    height: 100px;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.color.secondary};
  height: 100%;

  button {
    width: 100px;
    height: 35px;
    border-radius: 3px;
    border: none;
    background-color: ${(props) => props.theme.color.lightGray};
    color: ${(props) => props.theme.background.optionsMenu};
    margin-left: calc(100% - 80px);
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 0.85em;
  }

  button:hover {
    -webkit-box-shadow: 0px 0px 0px 2px #c1c3c6;
    box-shadow: 0px 0px 0px 2px #c1c3c6;
    font-size: 0.9em;
    cursor: pointer;
  }

  @media ${width[750]} {
    width: 50%;
  }

  @media ${width[500]} {
    width: 50%;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: #3e3e3e;
  color: ${(props) => props.theme.color.lightGray};
  font-size: 1.1em;
  font-weight: 500;
  padding: 10px 15px;
  margin-left: 20px;
  border-radius: 5px;
  font-size: 0.9em;
  font-weight: 300;
  border: 1px solid #282828;

  :focus {
    background-color: ${(props) => props.theme.background.optionsMenu};
    border: 1px solid #c1c3c6;
  }
`;
