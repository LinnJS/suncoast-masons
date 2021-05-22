import React, { useState } from 'react';
// import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

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
  ${tw`flex flex-col items-center w-full`};

  .content {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }

  button {
    ${tw`w-full mb-5 cursor-pointer p-2.5`};
  }
`;

export default Collapsible;
