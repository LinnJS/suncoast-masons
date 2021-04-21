import React, { useState } from 'react';
// import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Collapsible = ({ children, disabled, initialIsOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  if (disabled) return children;

  return (
    <CollapsibleContainer isOpen={isOpen}>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close info column' : 'Open info column'}</button>

      <div className="content" aria-hidden={isOpen}>
        {children}
      </div>
    </CollapsibleContainer>
  );
};

Collapsible.propTypes = {
  disabled: PropTypes.bool,
  initialIsOpen: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const CollapsibleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .content {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }

  button {
    width: 100%;
    margin-bottom: 20px;
    border: unset;
    cursor: pointer;
    padding: 10px;
  }
`;

export default Collapsible;
