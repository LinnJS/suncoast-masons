import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export default createGlobalStyle`
  ${normalize};

  html {
    overflow-x: hidden;
  }

  body {
    font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 500;
    background: ${({ theme }) => theme.background};
    overflow-x: hidden;
  }
`;
