// external imports
import React from 'react';
import styled from 'styled-components';

// internal imports
import { Link } from 'primitives';
import links from '../../content/navLinks';

const Navigation = () => {
  return (
    <NavContainer>
      <ul>
        {links.map((link, idx) => (
          <li key={`link-${idx}`}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
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
`;

export default Navigation;
