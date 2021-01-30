import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 85px;
  padding-left: 5px;

  img {
    width: 170px;
    filter: brightness(100);
  }

  img:hover {
    cursor: pointer;
  }
`;
