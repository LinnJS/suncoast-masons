import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconSet from './iconSet';

const Svg = styled.svg.attrs(({ size, disabled }) => ({
  viewBox: '0 0 512 512',
  width: size,
  height: size,
  style: { overflow: 'visible' },
  cursor: disabled ? 'not-allowed' : 'pointer',
}))``;

const Path = styled.path`
  fill: ${({ color }) => color};
`;

export const Icon = ({ disabled, name, color, className, size }) => {
  return (
    <Svg disabled={disabled} className={disabled ? ' ' : className} size={size}>
      <Path color={disabled ? '#bbb' : color} d={IconSet[name]} />
    </Svg>
  );
};

Icon.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icon.defaultProps = {
  size: 16,
};

export default Icon;
