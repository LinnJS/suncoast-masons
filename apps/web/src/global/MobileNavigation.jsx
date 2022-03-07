// external imports
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { isMobileSafari } from 'react-device-detect';

// internal imports
import devices from 'utils/devices';
import { Link } from 'primitives';

import links from '../../content/navLinks';
import {
  ToolCompassDark,
  ToolGavelDark,
  ToolLevelDark,
  ToolPlumbDark,
  ToolSquareDark,
  ToolTrowelDark,
} from '../assets/svgs';

const getIcon = (name) => {
  switch (name) {
    case 'compass':
      return <ToolCompassDark />;
    case 'gavel':
      return <ToolGavelDark />;
    case 'level':
      return <ToolLevelDark />;
    case 'plumb':
      return <ToolPlumbDark />;
    case 'square':
      return <ToolSquareDark />;
    case 'trowel':
      return <ToolTrowelDark />;
    default:
      return null;
  }
};

const MobileNavigation = () => {
  return (
    <MobileNav isIphone={isMobileSafari}>
      <ul>
        {links.map((link, idx) => {
          return (
            <li key={`link-${idx}`}>
              <Link to={link.link}>
                {getIcon(link.icon)}
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </MobileNav>
  );
};

const MobileNav = styled.nav`
  ${tw`fixed bottom-0 z-10 flex items-center justify-center bg-white`}
  ${tw`w-full h-20 -mb-6 `}
  ${tw`border-t border-gray-200 shadow-inner`}

  ${({ isIphone }) => (isIphone ? tw`h-20 px-1 pb-0` : '')}


  ul {
    ${tw`flex flex-row flex-wrap items-center justify-center `}
    ${tw`w-full p-0 pb-6 m-0`}

    li {
      ${tw`flex-1 text-xs`}

      a {
        ${tw`flex flex-col items-center justify-center px-0.5`}
      }

      svg {
        ${tw`w-5 h-5 mb-1`}
      }
    }
  }

  @media (${devices.mobileM}) {
    ${({ isIphone }) => (isIphone ? tw`h-24 px-2 pb-3` : '')}
  }

  @media (${devices.laptop}) {
    ${tw`hidden`}
  }
`;

/* 
TODO: need to make specific break point to catch EXACTLY every iPhone without bezels
this way we can dynamically put padding on the bottom of the nav when scrolling or when PWA is installed

iPhones that have bezels are as follows:
- iPhone 6s
- iPhone 6s Plus
- iPhone 7
- iPhone 7 Plus
- iPhone 8
- iPhone 8 Plus
- iPhone SE (2020)

iPhones that do not have bezels and need special styles for no home button are as follows:
- iPhone X
- iPhone XR
- iPhone XS
- iPhone XS Max
- iPhone 11
- iPhone 11 Pro
- iPhone 11 Pro Max
- iPhone 12 mini
- iPhone 12
- iPhone 12 Pro
- iPhone 12 Pro Max

*/

export default MobileNavigation;
