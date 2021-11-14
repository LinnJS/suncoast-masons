import React from 'react';
import PropTypes from 'prop-types';

export const PhoneNumber = ({ phoneNumber }) => {
  const phoneString = String(phoneNumber);
  const phoneLink = `tel:${phoneString.replace(/\D/g, '')}`;

  return (
    <a href={phoneLink} target="_blank" rel="noopener noreferrer">
      {phoneNumber}
    </a>
  );
};

PhoneNumber.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
};

export default PhoneNumber;
