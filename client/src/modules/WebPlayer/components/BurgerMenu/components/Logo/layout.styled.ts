import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding-left: 5px;

  img {
    width: 170px;
    filter: brightness(100);
  }

  img:hover {
    cursor: pointer;
  }

  @media ${width[470]} {
    height: 100px;

    img {
      width: 200px;
    }
  }
`;

export const CloseButton = styled.div`
  display: none;

  @media ${width[470]} {
    display: flex;
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.color.secondary};
    font-size: 1.5em;
    margin-right: 10px;
  }
`;
