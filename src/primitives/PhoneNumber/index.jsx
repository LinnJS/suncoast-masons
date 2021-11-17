import React from 'react';
import PropTypes from 'prop-types';

export const PhoneNumber = ({ phoneNumber, ...rest }) => {
  const phoneString = String(phoneNumber);
  const phoneLink = `tel:${phoneString.replace(/\D/g, '')}`;

  return (
    <a {...rest} href={phoneLink}>
      {phoneNumber}
    </a>
  );
};

PhoneNumber.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
};

export default PhoneNumber;
