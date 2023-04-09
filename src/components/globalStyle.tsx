import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const fontStyles = css`
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    background-color: #F5F5F7;
  }
`;
