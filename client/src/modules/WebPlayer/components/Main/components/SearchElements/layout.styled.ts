import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

export const Container = styled.div`
  width: 100%;
  height: auto;
  color: ${(props) => props.theme.color.secondary};
  margin: 20px 0px 20px 0px;
  font-size: 0.9em;
  letter-spacing: 0.5px;
  h1 {
    margin-bottom: 20px;
    white-space: normal;
  }

  @media ${width[750]} {
    padding: 20px 0px 20px 0px;

    h1 {
      font-size: 1.5em;
    }
  }

  @media ${width[500]} {
    h1 {
      font-size: 1.3em;
    }
  }
`;
