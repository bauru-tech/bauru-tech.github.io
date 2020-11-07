import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    padding: 0;
  }

  body {
    background-color: #FAFCFF;
    color: #6b7c93;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    margin: 0;
    @media print {
      background-color: #FFFFFF !important;
      color: #000000 !important;
    }
  }

  * {
    box-sizing: border-box;
  }
`;