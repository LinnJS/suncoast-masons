// external imports
import React from 'react';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import OfficerCard from '../components/officers/OfficerCard';

export const query = graphql`
  query OfficersPageQuery {
    districtDeputies: allSanityOfficers(sort: { fields: publishedAt, order: DESC }, limit: 1) {
      nodes {
        districtDeputy {
          id
          name
          title
          phone
          email

          headshot {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }

    officers: allSanityOfficers(sort: { fields: publishedAt, order: DESC }, limit: 1) {
      nodes {
        officers {
          id
          name
          title
          phone
          email

          headshot {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }

    committee: allSanityOfficers(sort: { fields: publishedAt, order: DESC }, limit: 1) {
      nodes {
        committeemen {
          id
          name
          title
          phone
          email

          headshot {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }

    lecturers: allSanityStaff(filter: { lectures: { ne: null } }) {
      nodes {
        id
        name
        title
        phone
        email
        lectures

        headshot {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const OfficersPage = ({ data }) => {
  console.log('data: ', data);
  const officers = data.officers.nodes[0].officers;
  const districtDeputies = data.districtDeputies.nodes[0].districtDeputy;
  const lecturers = data.lecturers.nodes;
  const committee = data.committee.nodes[0].committeemen;
  console.log('officers: ', officers);

  return (
    <OfficersContainer>
      <section>
        <h2>DDGM/DI</h2>

        <div>
          {districtDeputies.map(({ id, name, title, phone, email, headshot }) => {
            return (
              <OfficerCard
                key={id}
                name={name}
                title={title}
                phone={phone}
                email={email}
                image={headshot && headshot.asset.gatsbyImageData}
              />
            );
          })}
        </div>
      </section>

      <section>
        <h2>Officers</h2>

        <div>
          {officers.map(({ id, name, title, phone, email, headshot }) => {
            return (
              <OfficerCard
                key={id}
                name={name}
                title={title}
                phone={phone}
                email={email}
                image={headshot && headshot.asset.gatsbyImageData}
              />
            );
          })}
        </div>
      </section>

      <section>
        <h2>Committeemen</h2>

        <div>
          {committee.map((committeemen) => {
            const { id, name, title, email, phone, headshot } = committeemen;

            return (
              <OfficerCard
                key={id}
                name={name}
                title={title}
                phone={phone}
                email={email}
                image={headshot && headshot.asset.gatsbyImageData}
              />
            );
          })}
        </div>
      </section>

      <section>
        <h2>Lecturers</h2>

        <div>
          {lecturers.map(({ id, name, title, phone, email, headshot, lectures }) => {
            return (
              <OfficerCard
                key={id}
                name={name}
                title={title}
                phone={phone}
                email={email}
                image={headshot && headshot.asset.gatsbyImageData}
              />
            );
          })}
        </div>
      </section>
    </OfficersContainer>
  );
};

OfficersPage.propTypes = {
  data: PropTypes.shape({
    officers: PropTypes.shape({
      nodes: PropTypes.array,
    }),
    lecturers: PropTypes.shape({
      nodes: PropTypes.array,
    }),
    committee: PropTypes.shape({
      nodes: PropTypes.array,
    }),
    districtDeputies: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
};

const OfficersContainer = styled.div`
  section {
    > div {
      ${tw`grid gap-1 mb-12`}
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`;

export default OfficersPage;
