// external imports
import React from 'react';
import PropTypes from 'prop-types';

import LodgeGrid from '../components/lodges/LodgeGrid';

const LodgesPage = () => {
  return (
    <>
      <h2>Lodges</h2>
      <LodgeGrid />
    </>
  );
};

LodgesPage.propTypes = {
  data: PropTypes.shape({
    lodges: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
};

export default LodgesPage;
