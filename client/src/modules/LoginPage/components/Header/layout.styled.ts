import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 110px;
  border-bottom: 1px solid #ccc;

  img {
    width: 250px;
    color: black;
    filter: brightness(0);
  }

  img:hover {
    cursor: pointer;
  }
`;
