import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { baseTheme } from '../theme/baseTheme';

export const containers = css`
  max-width: ${baseTheme.sizes.container.width}px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    background-color: #F5F5F7;
  }
`;
