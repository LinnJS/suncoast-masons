import React from 'react';
import PropTypes from 'prop-types';

export const AddressBlock = ({ address, ...rest }) => {
  return (
    <div {...rest}>
      <span>{address.street1}</span>
      {address.street2 && <span>{address.street2}</span>}
      <div>
        <span>{address.city}</span>
        <span>{address.state}</span>
        <span>{address.zipCode}</span>
      </div>
    </div>
  );
};

AddressBlock.propTypes = {
  address: PropTypes.shape({
    street1: PropTypes.string,
    street2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.string,
  }),
};
export default AddressBlock;
