import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
  overflow: hidden;
`;

type ImageContainerProps = {
  imageUrl?: string;
};

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  background-image: ${({ imageUrl }) =>
    imageUrl
      ? `url(${imageUrl})`
      : "url(https://www.oysterworldwide.com/panel/wp-content/uploads/2014/02/Project_Romania_Bear_in_woods.jpg)"};
  background-position: center;
  background-size: cover;
`;

export const Informations = styled.div`
  color: ${(props) => props.theme.color.secondary};
  font-size: 2.5em;
  width: calc(100% - 230px);
  margin-left: 30px;

  span {
    font-size: 0.4em;
  }
`;
