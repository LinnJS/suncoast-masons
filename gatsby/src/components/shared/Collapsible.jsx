import React from 'react';
// import { useSpring, animated } from '@react-spring/web';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Collapsible = ({ children, disabled, isOpen, setIsOpen, isHidden }) => {
  if (disabled) return children;

  return (
    <CollapsibleContainer isOpen={isOpen}>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close info column' : 'Open info column'}</button>

      <div className="content" hidden={isHidden || isOpen}>
        {children}
      </div>
    </CollapsibleContainer>
  );
};

Collapsible.propTypes = {
  isHidden: PropTypes.bool,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const CollapsibleContainer = styled.div`
  ${tw`flex flex-col items-center w-full`};

  .content {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  }

  button {
    ${tw`w-full mb-5 cursor-pointer p-2.5`};
  }
`;

export default Collapsible;
