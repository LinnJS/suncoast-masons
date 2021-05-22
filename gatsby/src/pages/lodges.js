// external imports
import React from 'react';
import tw, { styled } from 'twin.macro';
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
      <h2>Lodges</h2>
      <div className="grid">
        {lodges.map((lodge) => {
          const address = lodge.address;
          const postal = lodge.postalAddress;
          const phoneString = String(lodge.phone);
          const phoneLink = `tel:${phoneString.replace(/\D/g, '')}`;

          return (
            <section key={lodge.id}>
              <h2>{lodge.name}</h2>

              <section className="address">
                <span>{address.street1}</span>
                {address.street2 && <span>{address.street2}</span>}

                <div>
                  <span>{address.city}</span>
                  <span>{address.state}</span>
                  <span>{address.zipCode}</span>
                </div>
              </section>

              {postal && (
                <section className="postal">
                  <span>{postal.street1}</span>
                  {postal.street2 && <span>{postal.street2}</span>}

                  <div>
                    <span>{postal.city}</span>
                    <span>{postal.state}</span>
                    <span>{postal.zipCode}</span>
                  </div>
                </section>
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
    ${tw`grid w-full gap-1 space-y-2`}
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    section {
      ${tw`flex flex-col`}
    }

    a {
      ${tw`max-w-xs truncate`}
    }
  }
`;

export default LodgesPage;
