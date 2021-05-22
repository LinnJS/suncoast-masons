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
    ${tw`w-4/5 mb-3 font-semibold break-words`}

    @media (${devices.mobileM}) {
    ${tw`w-full`};
  }
  }

  h3 {
    ${tw`w-4/5 mb-3 font-semibold break-words`}

    @media (${devices.mobileM}) {
    ${tw`w-full`};
  }
  }

  h4 {
    ${tw`w-4/5 mb-3 font-semibold break-words`}

    @media (${devices.mobileM}) {
    ${tw`w-full`};
  }
  }

  

  a {
    ${tw`text-blue-700 hover:underline`}
  

    &:visited {
      ${tw`text-blue-700`}
    }
  }
`;
