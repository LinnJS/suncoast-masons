// external imports
import React from 'react';
import styled from 'styled-components';

// internal imports
import devices from 'utils/devices';
import { Link } from 'primitives';
import links from '../../content/navLinks';

const DesktopNavigation = () => {
  return (
    <DesktopNav>
      <ul>
        {links.map((link, idx) => (
          <li key={`link-${idx}`}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </DesktopNav>
  );
};

const DesktopNav = styled.nav`
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  height: 75px;
  z-index: 10;

  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      list-style: none;
      margin-right: 10px;
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
    display: flex;
  }
`;

export default DesktopNavigation;
