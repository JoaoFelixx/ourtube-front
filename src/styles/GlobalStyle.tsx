import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto, Arial, sans-serif;
  }

  ::-webkit-scrollbar { width: 6px; }

  ::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: #363636;
  }

`;

export default GlobalStyle;