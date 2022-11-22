import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    text-decoration: none;
  }

  body {
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    background-color: #FFF
  }
`
