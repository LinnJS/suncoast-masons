// external imports
import React from 'react';
import styled from 'styled-components';

// internal imports
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
  text-align: center;
`;

export default Header;
