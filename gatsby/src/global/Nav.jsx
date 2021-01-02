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
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: cornflowerblue;

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
`;

export default Nav;
