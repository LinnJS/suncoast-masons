import React from 'react';
import styled from 'styled-components';

import { Link } from 'primitives';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>Suncoast Master Mason Association</h1>
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
`;

export default Header;
