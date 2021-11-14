import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

export const query = graphql`
  query ($id: String!) {
    lodge: sanityLodge(id: { eq: $id }) {
      name
      phone
      website
      email
      statedCommunication

      address {
        street1
        street2
        city
        state
        zipCode
      }

      postalAddress {
        street1
        street2
        city
        state
        zipCode
      }

      geoLocation {
        lat
        lng
      }
    }
  }
`;

const LodgePage = ({
  data: {
    lodge: { name, phone },
  },
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{phone}</h3>
    </div>
  );
};

LodgePage.propTypes = {
  data: PropTypes.shape({
    lodge: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string,
      email: PropTypes.string,
      statedCommunication: PropTypes.string,
      address: PropTypes.shape({
        street1: PropTypes.string,
        street2: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zipCode: PropTypes.string,
      }),
      postalAddress: PropTypes.shape({
        street1: PropTypes.string,
        street2: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zipCode: PropTypes.string,
      }),
      geoLocation: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
    }),
  }),
};

export default LodgePage;
