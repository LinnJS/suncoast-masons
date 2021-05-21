// external imports
import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

// internal imports
import bg from '../assets/svgs/bg.svg';

export default createGlobalStyle`

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
    ${tw`text-blue-700 hover:underline`}
  

    &:visited {
      ${tw`text-blue-700`}
    }
  }
`;
