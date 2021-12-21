import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

import { Spinner } from 'primitives';

const SubmitButton = ({ isLoading = false, success = null, isDisabled = false, ...rest }) => {
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
      className="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-400 focus:ring-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
      css={[
        success === true && tw`transition-colors delay-300 bg-green-600 hover:bg-green-500 focus:ring-green-500`,
        success === false && tw`transition-colors delay-300 bg-red-500 hover:bg-red-500 focus:ring-red-500`,
        isDisabled &&
          tw`transition-colors delay-300 bg-gray-500 cursor-not-allowed hover:bg-gray-400 focus:ring-red-400`,
      ]}
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
