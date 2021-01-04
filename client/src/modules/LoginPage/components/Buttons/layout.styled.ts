import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 450px;
  padding-top: 35px;

  @media only screen and ${width[470]} {
    width: 100vw;
    padding: 35px 10px 0px 10px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 0.93em;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 24px;
  border: none;
  outline: none;
  margin-top: 10px;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }

  @media only screen and ${width[330]} {
    i {
      display: none;
    }
  }
`;

export const GithubButton = styled(Button)`
  background-color: ${(props) => props.theme.background.github};
  color: ${(props) => props.theme.color.github};
  transition: background-color 0.2s, color 0.2s;
  border: ${(props) => props.theme.border.github};

  :hover {
    background-color: ${(props) => props.theme.background.github_hover};
    color: ${(props) => props.theme.background.github};
  }

  :focus {
    border: ${(props) => props.theme.border.github};
  }

  i {
    font-size: 1.5em;
    margin-right: 20px;
  }

  p {
    font-size: 1.1em;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

export const GoogleButton = styled(Button)`
  background-color: ${(props) => props.theme.background.main};
  color: ${(props) => props.theme.color.tertiary};
  border: ${(props) => props.theme.border.google};
  transition: background-color 0.2s, color 0.2s;
  width: calc(100% - 2px);

  :hover {
    background-color: ${(props) => props.theme.background.google_hover};
    color: ${(props) => props.theme.color.secondary};
  }

  :focus {
    border: ${(props) => props.theme.border.google};
  }

  i {
    font-size: 1.5em;
    margin-right: 20px;
  }

  p {
    font-size: 1.1em;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

export const Border = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0px;

  span {
    border-bottom: ${(props) => props.theme.border.break};
    width: calc(50% - 30px);
  }

  p {
    font-size: 0.75em;
    letter-spacing: 1px;
    font-weight: 700;
    width: 60px;
    text-align: center;
  }
`;
