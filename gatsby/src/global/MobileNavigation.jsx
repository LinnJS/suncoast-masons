// external imports
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// internal imports
import devices from 'utils/devices';
import { Link } from 'primitives';
import { isInstalled } from 'utils';

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
    <MobileNav>
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
  ${tw`z-10 fixed bottom-0 flex justify-center items-center w-full bg-white -mb-6 h-20`}
  border-top: lightgrey solid 1.4px;

  ul {
    ${tw`flex flex-row flex-wrap justify-center items-center w-full p-0 m-0 pb-6`}

    li {
      ${tw`flex-1 list-none text-xs`}

      a {
        ${tw`flex flex-col justify-center items-center px-1`}
      }

      svg {
        height: 20px;
        width: 20px;
        margin-bottom: 5px;
      }

      &:last-child {
        border-right: none;
      }
    }
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

  @media (${devices.laptop}) {
    display: none;
  }
`;

export default MobileNavigation;
