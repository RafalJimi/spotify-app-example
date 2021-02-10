import styled from "styled-components";

export const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 260px;
  width: 180px;
  background: rgb(24, 24, 24);
  background: linear-gradient(
    180deg,
    rgba(24, 24, 24, 1) 0%,
    rgba(21, 21, 21, 1) 50%,
    rgba(24, 24, 24, 1) 100%
  );
  margin-right: 30px;
  border-radius: 5px;

  :hover {
    background: rgb(40, 40, 40);
    background: linear-gradient(
      180deg,
      rgba(40, 40, 40, 1) 0%,
      rgba(46, 46, 46, 1) 50%,
      rgba(40, 40, 40, 1) 100%
    );
    cursor: pointer;
  }

  div:first-child > div {
    width: 40px;
    height: 40px;
    position: relative;
    margin-left: 100px;
    margin-top: 110px;
    transition: margin-top 0.3s, opacity 0.3s;
    opacity: 0;
    border-radius: 20px;
    background-color: ${(props) => props.theme.background.playButton};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.secondary};
    font-size: 0.8em;
    padding-left: 2px;
    padding-top: 2px;
    -webkit-box-shadow: -2px 4px 8px 0px rgba(0, 0, 0, 0.61);
    box-shadow: -2px 4px 8px 0px rgba(0, 0, 0, 0.61);
  }

  :hover > div:first-child > div {
    width: 40px;
    height: 40px;
    position: relative;
    margin-left: 100px;
    margin-top: 100px;
    transition: margin-top 0.3s, opacity 0.3s;
    opacity: 0;
    opacity: 1;
  }

  div:first-child > div:hover {
    cursor: default;
    font-size: 0.9em;
    -webkit-box-shadow: 0px 0px 0px 1px #1db954;
    box-shadow: 0px 0px 0px 1px #1db954;
  }
`;

export const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  background-color: gray;
  border-radius: 2px;
  margin: 15px 15px 10px 15px;
`;

export const ListItemTitle = styled.div`
  width: 100%;
  margin: 10px 0px;
  padding-left: 15px;
  color: ${(props) => props.theme.color.secondary};
  font-weight: 700;
  font-size: 0.95em;
  white-space: nowrap;

  :hover {
    text-decoration: underline;
  }
`;

export const ListItemSubtitle = styled.div`
  width: 100%;
  padding-left: 15px;
  color: ${(props) => props.theme.color.lightGray};
  font-weight: 500;
  font-size: 0.8em;
  white-space: nowrap;
`;
