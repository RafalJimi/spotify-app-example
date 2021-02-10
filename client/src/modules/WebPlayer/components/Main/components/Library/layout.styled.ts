import styled from "styled-components";

export const LibraryContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 85px 35px 90px 35px;
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

export const ListItems = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 0px;
`;
