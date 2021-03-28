import styled from "styled-components";
import { width } from "../../../../../../../../helpers/mediaQueries";

export const Container = styled.div`
  display: flex;
  width: 400px;
  height: 50px;
  background-color: ${(props) => props.theme.color.secondary};
  border-radius: 5px;
  button {
    width: 50px;
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    :hover {
      cursor: pointer;
    }
  }
  form {
    display: flex;
    width: 100%;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.color.primary};
    font-size: 1.1em;
    font-weight: 500;
    padding-left: 10px;
  }

  @media ${width[990]} {
    width: 400px;

    input {
      font-size: 1em;
      padding-left: 5px;
    }
  }

  @media ${width[500]} {
    width: 100%;
  }
`;
