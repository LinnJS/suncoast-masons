import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import checkerBackground from '../assets/images/checker-bg.jpeg';

export default createGlobalStyle`
  ${normalize};

  html {
    overflow-x: hidden;
    background: ${({ theme }) => theme.background};
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 500;
    overflow-x: hidden;
    background-image: url(${checkerBackground});
  }

  a {
    color: blue;

    &:visited {
      color: blue;
    }
  }
`;
