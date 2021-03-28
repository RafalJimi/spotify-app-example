import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0px 10px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.color.lightGray};
  border-radius: 3px;
  font-size: 0.85em;
  font-weight: 500;
  transition: color 0.2s;
  padding-left: 15px;

  i {
    font-size: 1.7em;
    margin-right: 15px;
  }

  :hover {
    color: ${(props) => props.theme.color.secondary};
    cursor: pointer;
  }
`;
