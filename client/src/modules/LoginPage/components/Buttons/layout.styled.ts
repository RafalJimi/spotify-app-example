import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 450px;
  padding-top: 35px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 0.93em;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  border: none;
  outline: none;
  margin-top: 10px;

  :focus {
    outline: none;
    border: none;
  }

  :hover {
    cursor: pointer;
  }
`;

export const FbButton = styled(Button)`
  background-color: #3b5998;
  color: white;
  transition: background-color 0.2s;

  :hover {
    background-color: #627aad;
  }

  i {
    font-size: 1.5em;
    margin-right: 20px;
  }

  p {
    font-size: 1.1em;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

export const GoogleButton = styled(Button)`
  background-color: white;
  color: #808080;
  border: 2px solid #808080;
  transition: background-color 0.2s, color 0.2s;
  height: 48px;
  width: calc(100% - 2px);

  :hover {
    background-color: #808080;
    color: white;
  }

  i {
    font-size: 1.5em;
    margin-right: 20px;
  }

  p {
    font-size: 1.1em;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

export const Border = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0px;

  span {
    border-bottom: 1px solid #80808080;
    width: calc(50% - 30px);
  }

  p {
    font-size: 0.75em;
    letter-spacing: 1px;
    font-weight: 700;
    width: 60px;
    text-align: center;
  }
`;
