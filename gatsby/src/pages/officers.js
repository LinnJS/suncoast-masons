// external imports
import React from 'react';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';

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
        }
        title
        publishedAt
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
        }
        title
        publishedAt
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
      }
    }
  }
`;

const OfficersPage = ({ data }) => {
  const officers = data.officers.nodes[0].officers;
  const districtDeputies = data.districtDeputies.nodes[0].districtDeputy;
  const lecturers = data.lecturers.nodes;
  const committee = data.committee.nodes[0].committeemen;

  return (
    <OfficersContainer>
      <section>
        <h2>DDGM/DI</h2>

        <div>
          {districtDeputies.map(({ id, name, title, phone, email }) => {
            return (
              <article key={id}>
                <h4>{name}</h4>
                <span>{title}</span>
                <a href={`tel:${phone}`}>{phone}</a>
                <a href={`mailto:${email}`}>{email}</a>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <h2>Officers</h2>

        <div>
          {officers.map(({ id, name, title, phone, email }) => {
            return (
              <article key={id}>
                <h4>{name}</h4>
                <span>{title}</span>
                <a href={`tel:${phone}`}>{phone}</a>
                <a href={`mailto:${email}`}>{email}</a>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <h2>Committeemen</h2>

        <div>
          {committee.map((committeemen) => {
            const { id, name, title, email, phone } = committeemen;

            return (
              <article key={id}>
                <h4>{name}</h4>
                <span>{title}</span>
                <a href={`tel:${phone}`}>{phone}</a>
                <a href={`mailto:${email}`}>{email}</a>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <h2>Lecturers</h2>

        <div>
          {lecturers.map(({ id, name, title, phone, email, lectures }) => {
            return (
              <article key={id}>
                <h4>{name}</h4>
                <span>{title}</span>
                <a href={`tel:${phone}`}>{phone}</a>
                <a href={`mailto:${email}`}>{email}</a>
                <span>{lectures}</span>
              </article>
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

      article {
        ${tw`flex flex-col mb-3`}
      }
    }
  }

  h4 {
    margin-bottom: 5px;
  }
`;

export default OfficersPage;
