import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
  overflow-y: scroll;
  z-index: 10;
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
