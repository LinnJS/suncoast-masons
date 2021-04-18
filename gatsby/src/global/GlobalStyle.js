// external imports
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

// internal imports
import bg from '../assets/svgs/bg.svg';

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
    background-image: url(${bg});
  }

  a {
    color: blue;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: blue;
    }
  }
`;
