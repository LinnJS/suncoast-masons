// external imports
import React from 'react';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import LodgeMap from '../components/lodges/LodgeMap';

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

        geoLocation {
          lat
          lng
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
            <article
              key={lodge.id}
              className="flex flex-col justify-between h-full max-w-sm p-4 mb-3 tracking-wide bg-white border-2 border-gray-200 rounded-md shadow-lg lodge"
            >
            <div>
              <h3>{lodge.name}</h3>

              <section className="flex flex-col mb-2">
                <h4>Lodge address</h4>
                <span>{address.street1}</span>
                {address.street2 && <span>{address.street2}</span>}

                <div>
                  <span>{address.city}</span>
                  <span>{address.state}</span>
                  <span>{address.zipCode}</span>
                </div>
              </section>

              {postal && (
                <section className="flex flex-col mb-2">
                  <h4>Postal address</h4>
                  <span>{postal.street1}</span>
                  {postal.street2 && <span>{postal.street2}</span>}

                  <div>
                    <span>{postal.city},</span>
                    <span>{postal.state},</span>
                    <span>{postal.zipCode}</span>
                  </div>
                </section>
              )}

              <section className="flex flex-col space-y-1">
                {lodge.website && (
                  <a href={lodge.website} target="_blank" rel="noopener noreferrer">
                    {lodge.website}
                  </a>
                )}

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
            </div>  
              <LodgeMap className="mt-2" geoLocation={lodge.geoLocation} />
            </article>
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

const LodgesContainer = styled.div`
  .grid {
    ${tw`grid w-full gap-4 `}
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    .lodge {
      ${tw`flex flex-col self-start mb-4`}
    }

    a {
      ${tw`max-w-xs text-blue-600 truncate`}
    }
  }
`;

export default LodgesPage;
