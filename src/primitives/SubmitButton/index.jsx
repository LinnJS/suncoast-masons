import React from 'react';
import PropTypes from 'prop-types';

import { Spinner } from 'primitives';

const SubmitButton = ({ isLoading, success = null, isDisabled = false, ...rest }) => {
  const getLabel = () => {
    if (isLoading) {
      return <Spinner theme="light" />;
    }

    if (success === true) {
      return 'Message sent';
    }

    if (success === false) {
      return 'Error try again later';
    }

    if (!success) {
      return 'Send message';
    }
  };

  return (
    <button
      type="submit"
      disabled={isDisabled}
      className="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto"
      {...rest}
    >
      {getLabel()}
    </button>
  );
};

SubmitButton.propTypes = {
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  success: PropTypes.bool,
};

export default SubmitButton;
