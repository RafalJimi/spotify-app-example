import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 260px;
  font-size: 0.9em;
  color: ${(props) => props.theme.color.secondary};

  @media ${width[750]} {
    height: 220px;
    font-size: 0.75em;
  }

  @media ${width[500]} {
    height: 220px;
    font-size: 0.65em;
  }
`;
