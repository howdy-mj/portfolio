import { createGlobalStyle } from 'styled-components';
import { size } from './theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lego';
    src: url('./fonts/Legothick.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;  
  }
  html {
    font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%
    height: 100vh;
    @media only screen and (max-width: ${size.smallest}) {
      font-size: 50%;
    }
  }
  body {
    box-sizing: border-box;
    font-size: 1.6rem;   
    font-family: 'Roboto', 'Nanum Gothic', sans-serif, 'Goldman', cursive;
  }
  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
      text-decoration: inherit;
    }
  }
  input,
  select,
  button {
    -webkit-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;
    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  a, button {
    cursor: pointer;
  }
  pre {
    white-space: pre-line;
  }
`;

export default GlobalStyle;
