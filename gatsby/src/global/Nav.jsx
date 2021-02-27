import React from 'react';
import styled from 'styled-components';

import { Link } from 'primitives';
import links from '../../content/links';

const Nav = () => {
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

    &:visited {
      color: blue;
    }
  }
`;

export default Nav;
