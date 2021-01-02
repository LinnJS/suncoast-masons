import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

import checkerBackground from '../assets/images/checker-bg.jpeg';

export default createGlobalStyle`
  ${normalize};

  html {
    overflow-x: hidden;
    background: ${({ theme }) => theme.background};
  }

  body {
    font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 500;
    overflow-x: hidden;
    background-image: url(${checkerBackground});

  }
`;
