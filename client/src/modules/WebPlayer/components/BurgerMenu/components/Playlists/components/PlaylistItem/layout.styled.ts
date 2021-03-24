import styled from "styled-components";
import { width } from "../../../../../../../../helpers/mediaQueries";

interface ContainerProps {
  readonly active?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) =>
    props.active ? "#ffffff10" : props.theme.color.primary};
  padding: 10px 15px;
  font-weight: 500;
  font-size: 1em;

  :hover {
    cursor: pointer;
  }

  @media ${width[470]} {
    width: 100%;
    font-size: 1.1em;
  }
`;
