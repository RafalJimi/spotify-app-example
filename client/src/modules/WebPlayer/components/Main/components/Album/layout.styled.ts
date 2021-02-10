import styled from "styled-components";

export const AlbumContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 85px 35px 90px 35px;
  overflow-y: hidden;
  height: auto;
`;

export const AlbumInformation = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const AlbumImgContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ffffff;
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

export const AlbumName = styled.div`
  color: ${(props) => props.theme.color.secondary};
  font-size: 2.5em;
  width: 400px;
  margin-left: 30px;

  span {
    font-size: 0.4em;
  }
`;

export const PlayButton = styled.div`
  height: 70px;
  width: 70px;
  background-color: ${(props) => props.theme.background.playButton};
  margin: 20px 0px 30px 0px;
  border-radius: 35px;
  color: ${(props) => props.theme.color.secondary};
  font-size: 1.5em;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: none;

  :hover {
    -webkit-box-shadow: 0px 0px 0px 3px #1db954;
    box-shadow: 0px 0px 0px 3px #1db954;
    font-size: 1.6em;
    cursor: pointer;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;

export const SectionTitle = styled.header`
  font-size: 1.4em;
  font-weight: 700;
  color: ${(props) => props.theme.color.secondary};
`;

export const Songs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 20px 0px;
  width: 100%;
`;

export const SectionSubtitle = styled.div`
  font-size: 0.75em;
  font-weight: 500;
  margin-top: 10px;
  word-spacing: 1px;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.color.lightGray};
`;

export const ListItems = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 0px;
`;
