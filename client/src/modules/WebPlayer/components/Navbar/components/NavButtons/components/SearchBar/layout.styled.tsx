import styled from "styled-components";
import { width } from "../../../../../../../../helpers/mediaQueries";

export const SearchBarContainer = styled.div`
  display: flex;
  width: 360px;
  height: 100%;
  background-color: ${(props) => props.theme.color.secondary};
  border-radius: 20px;

  button {
    width: 50px;
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;

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
    font-size: 0.9em;
  }

  @media ${width[750]} {
    position: absolute;
    top: 60px;
    left: 30px;
    height: 40px;
  }

  @media ${width[500]} {
    width: 300px;
  }
`;
