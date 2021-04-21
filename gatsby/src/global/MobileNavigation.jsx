// external imports
import React from 'react';
import styled from 'styled-components';

// internal imports
import devices from 'utils/devices';
import { Link } from 'primitives';
import links from '../../content/navLinks';
import { ToolCompass, ToolGavel, ToolLevel, ToolPlumb, ToolSquare, ToolTrowel } from '../assets/svgs';

const getIcon = (name) => {
  switch (name) {
    case 'compass':
      return <ToolCompass />;
    case 'gavel':
      return <ToolGavel />;
    case 'level':
      return <ToolLevel />;
    case 'plumb':
      return <ToolPlumb />;
    case 'square':
      return <ToolSquare />;
    case 'trowel':
      return <ToolTrowel />;
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
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  height: 75px;
  z-index: 10;
  margin-bottom: -20px;
  border-top: lightgrey solid 1.4px;
  bottom: 0;

  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
    padding-bottom: 20px;
    margin: 0;

    li {
      font-size: 12px;
      list-style: none;
      flex: 1;
      /* border-right: lightgrey solid 1.4px; */

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 6px;
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
