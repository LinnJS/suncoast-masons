// external imports
import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';
import devices from 'utils/devices';

// internal imports
import bg from '../assets/svgs/bg.svg';

export default createGlobalStyle`
  html {
    ${tw`box-border overflow-x-hidden bg-white`};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    ${tw`overflow-x-hidden font-sans`};
    background-image: url(${bg});
  }

  h2 {
    ${tw`mb-3 font-semibold break-words`};

    @media (${devices.mobileS}) {
    ${tw`w-4/5`}
  }
  }

  h3 {
    ${tw`mb-3 font-semibold break-words`};

    @media (${devices.mobileS}) {
    ${tw`w-4/5`}
  }
  }

  h4 {
    ${tw`mb-3 font-semibold break-words`};

    @media (${devices.mobileS}) {
    ${tw`w-4/5`}
  }
  }

  

  a {
    ${tw`text-blue-700 hover:underline`}
  

    &:visited {
      ${tw`text-blue-700`}
    }
  }
`;
