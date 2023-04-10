import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    background-color: #F5F5F7;
  }
`;
