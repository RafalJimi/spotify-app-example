import styled from "styled-components";
import { width } from "../../../../../../../../helpers/mediaQueries";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.header`
  font-weight: 500;
  white-space: normal;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-justify: center;
  text-align: center;
  transform: translate(0, 35vh);
  color: ${(props) => props.theme.color.secondary};
  font-size: 2em;

  @media ${width[770]} {
    font-size: 1.5em;
  }

  @media ${width[470]} {
    font-weight: 700;
    font-size: 1.2em;
  }
`;