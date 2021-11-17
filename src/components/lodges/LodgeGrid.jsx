// external imports
import React from 'react';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { PhoneNumber, AddressBlock, Link, EmailLink } from 'primitives';

import LodgeMap from './LodgeMap';

const LodgesPage = () => {
  const { lodges } = useStaticQuery(graphql`
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
  `);

  return (
    <LodgesGrid>
      {lodges.nodes.map((lodge) => {
        const id = lodge.id.replace(/[^a-zA-Z0-9]/g, '');

        return (
          <article
            key={lodge.id}
            className="flex flex-col justify-between h-full max-w-sm p-4 mb-3 tracking-wide bg-white border-2 border-gray-200 rounded-md shadow-lg lodge"
          >
            <div>
              <Link to={`lodges/${id}`}>
                <h3>{lodge.name}</h3>
              </Link>

              <section className="flex flex-col mb-2">
                <h4>Lodge address</h4>
                <AddressBlock address={lodge.address} />
              </section>

              {lodge.postal && (
                <section className="flex flex-col mb-2">
                  <h4>Postal address</h4>
                  <AddressBlock address={lodge.postal} />
                </section>
              )}

              <section className="flex flex-col space-y-1">
                {lodge.website && (
                  <a href={lodge.website} target="_blank" rel="noopener noreferrer">
                    {lodge.website}
                  </a>
                )}

                {lodge.phone && <PhoneNumber phoneNumber={lodge.phone} />}

                {lodge.email && <EmailLink email={lodge.email} />}

                {lodge.statedCommunication && <span>{lodge.statedCommunication}</span>}
              </section>
            </div>
            <LodgeMap className="mt-2" geoLocation={lodge.geoLocation} />
          </article>
        );
      })}
    </LodgesGrid>
  );
};

LodgesPage.propTypes = {
  data: PropTypes.shape({
    lodges: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
};

const LodgesGrid = styled.div`
  ${tw`grid w-full gap-4 `}
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  .lodge {
    ${tw`flex flex-col self-start mb-4`}
  }

  a {
    ${tw`max-w-xs text-blue-600 truncate`}
  }
`;

export default LodgesPage;
