import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 200px);
  white-space: normal;
  word-wrap: wrap;

  h3 {
    width: 80%;
    text-align: center;
    color: ${(props) => props.theme.color.secondary};
    font-size: 2em;
  }

  @media ${width[750]} {
    h3 {
      font-size: 1.5em;
    }
  }

  @media ${width[500]} {
    h3 {
      width: 100%;
      font-size: 1.3em;
    }
  }
`;
