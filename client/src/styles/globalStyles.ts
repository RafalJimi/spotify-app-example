import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
    border: none;
    background-color: white;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column; 
    overflow-x: hidden;
    
  }
  ::-webkit-scrollbar {
      display: none;
  }
`;
