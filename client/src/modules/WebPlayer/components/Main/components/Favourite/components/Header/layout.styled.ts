import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 4.5em;
  color: ${(props) => props.theme.color.secondary};
  background: rgb(65, 23, 183);
  background: linear-gradient(
    145deg,
    rgba(65, 23, 183, 1) 0%,
    rgba(96, 88, 156, 1) 50%,
    rgba(122, 141, 137, 1) 100%
  );
`;

export const Informations = styled.div`
  color: ${(props) => props.theme.color.secondary};
  font-size: 2.5em;
  width: calc(100% - 300px);
  margin-left: 30px;

  span {
    font-size: 0.4em;
  }
`;
