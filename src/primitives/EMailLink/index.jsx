import React from 'react';
import PropTypes from 'prop-types';

export const EMailLink = ({ email, ...rest }) => {
  return (
    <a {...rest} href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
      {email}
    </a>
  );
};

EMailLink.propTypes = {
  email: PropTypes.string.isRequired,
};

export default EMailLink;
