import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  padding-top: 25px;

  img {
    width: 170px;
    color: black;
    filter: brightness(0);
  }

  img:hover {
    cursor: pointer;
  }

  h1 {
    text-align: center;
    font-size: 1.86em;
    margin-top: 30px;
    font-weight: 700;
  }

  @media only screen and ${width[770]} {
    padding-top: 35px;

    img {
      width: 110px;
    }
  }

  @media only screen and ${width[470]} {
    width: 100%;
  }
`;
