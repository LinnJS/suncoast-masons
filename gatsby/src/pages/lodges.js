// external imports
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// internal imports
import Page from 'global/Page';

export const query = graphql`
  query LogePageQuery {
    lodges: allSanityLodge {
      nodes {
        id
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
      }
    }
  }
`;

const LodgesPage = ({ data }) => {
  const lodges = data.lodges.nodes;

  return (
    <LodgesContainer>
      <h1>Lodges</h1>
      <div className="grid">
        {lodges.map((lodge) => {
          const address = lodge.address;
          const postal = lodge.postalAddress;
          const phoneString = String(lodge.phone);
          const phoneLink = `tel:${phoneString.replace(/\D/g, '')}`;

          return (
            <section key={lodge.id}>
              <h2>{lodge.name}</h2>

              <div className="address">
                <span>{address.street1}</span>
                {address.street2 && <span>{address.street2}</span>}

                <div>
                  <span>{address.city}</span>
                  <span>{address.state}</span>
                  <span>{address.zipCode}</span>
                </div>
              </div>

              {postal && (
                <div className="postal">
                  <span>{postal.street1}</span>
                  {postal.street2 && <span>{postal.street2}</span>}

                  <div>
                    <span>{postal.city}</span>
                    <span>{postal.state}</span>
                    <span>{postal.zipCode}</span>
                  </div>
                </div>
              )}

              <a href={lodge.website} target="_blank" rel="noopener noreferrer">
                {lodge.website}
              </a>

              {lodge.phone && (
                <a href={phoneLink} target="_blank" rel="noopener noreferrer">
                  {lodge.phone}
                </a>
              )}

              {lodge.email && (
                <span>
                  Email:
                  <a href={`mailto:${lodge.email}`} target="_blank" rel="noopener noreferrer">
                    {lodge.email}
                  </a>
                </span>
              )}
              {lodge.statedCommunication && <span>{lodge.statedCommunication}</span>}
            </section>
          );
        })}
      </div>
    </LodgesContainer>
  );
};

LodgesPage.propTypes = {
  data: PropTypes.shape({
    lodges: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
};

const LodgesContainer = styled(Page)`
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 0.5em;

    section {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default LodgesPage;
