import styled from "styled-components";

export const HomeContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 85px 35px 0px 35px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.header`
  font-size: 1.4em;
  font-weight: 700;
  color: ${(props) => props.theme.color.secondary};
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

export const ListItem = styled.div`
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
`;

export const ListItemSubtitle = styled.div`
  width: 100%;
  padding-left: 15px;
  color: ${(props) => props.theme.color.lightGray};
  font-weight: 500;
  font-size: 0.8em;
  white-space: nowrap;
`;
