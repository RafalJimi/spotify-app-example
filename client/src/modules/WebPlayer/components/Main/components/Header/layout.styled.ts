import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;

  img {
    height: 100%;
    overflow: hidden;
  }
`;

export const Informations = styled.div`
  color: ${(props) => props.theme.color.secondary};
  font-size: 2.5em;
  width: 100%;
  margin-left: 30px;

  span {
    font-size: 0.4em;
  }
`;
