import styled from "styled-components";
import { width } from "../../../../../../helpers/mediaQueries";

export const Container = styled.div`
  img {
    width: 170px;
    filter: brightness(100);
  }

  img:hover {
    cursor: pointer;
  }

  @media ${width[990]} {
    img {
      width: 120px;
    }
  }
`;
