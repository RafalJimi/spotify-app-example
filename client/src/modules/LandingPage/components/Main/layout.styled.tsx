import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const Container = styled.main`
  padding-top: 80px;
  width: 100vw;
  height: auto;
  background-color: ${(props) => props.theme.background.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${width[990]} {
    padding-top: 40px;
  }
`;

export const Title = styled.h1`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  color: ${(props) => props.theme.color.primary};
  font-size: 2.9em;
  font-weight: 700;
  letter-spacing: 1px;
  white-space: normal;
  word-wrap: wrap;
  text-align: center;

  @media ${width[990]} {
    font-size: 2.4em;
  }

  @media ${width[500]} {
    font-size: 1.5em;
  }
`;

export const SubTitle = styled.h3`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: ${(props) => props.theme.color.primary};
  font-weight: 400;
  font-size: 1.1em;
  white-space: normal;
  word-wrap: wrap;
  text-align: center;

  @media ${width[500]} {
    font-size: 1em;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 50px;
  border-radius: 25px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.background.main};
  border: ${(props) => props.theme.border.landingPageButton};
  color: ${(props) => props.theme.color.landingPageButton};
  font-weight: 700;
  letter-spacing: 2px;
  margin-top: 25px;
  transition: color 0.2s, background-color 0.2s;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.secondary};
    background-color: ${(props) => props.theme.color.landingPageButton};
  }

  @media ${width[330]} {
    width: 95%;

    i {
      display: none;
    }
  }
`;

export const Latest = styled.div`
  width: 1200px;
  background-color: ${(props) => props.theme.background.main};
  margin-top: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
  flex-wrap: wrap;

  @media ${width[1200]} {
    width: 850px;
  }

  @media ${width[990]} {
    width: 520px;
  }

  @media ${width[750]} {
    width: 100%;
    margin-top: 60px;
    display: block;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
`;
