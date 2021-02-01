import styled from "styled-components";

export const NavButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 15px;
  background-color: ${(props) => props.theme.color.primary};

  i {
    color: ${(props) => props.theme.color.secondary};
  }

  :hover {
    cursor: pointer;
  }
`;
