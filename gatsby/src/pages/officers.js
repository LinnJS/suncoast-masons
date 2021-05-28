// external imports
import React from 'react';
import tw, { styled } from 'twin.macro';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// internal imports
import Page from 'global/Page';

export const query = graphql`
  query OfficersPageQuery {
    officers: allSanityOfficers {
      nodes {
        officers {
          id
          name
          title
          phone
          email
        }
      }
    }

    committee: allSanityOfficers {
      nodes {
        committeemen {
          id
          name
          title
          email
          phone
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
      }
    }
  }
`;

const OfficersPage = ({ data }) => {
  const officers = data.officers.nodes[0].officers;
  const lecturers = data.lecturers.nodes;
  const firstCommittee = data.committee.nodes[0].committeemen;

  return (
    <OfficersContainer>
      <h2>DDGM/DI</h2>
      {/* TODO */}

      <h2>Officers</h2>
      <section>
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
      </section>

      <h2>Committeemen</h2>
      <section>
        {firstCommittee.map((committeemen) => {
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
      </section>

      <h2>Lecturers</h2>
      <section>
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
  }),
};

const OfficersContainer = styled(Page)`
  section {
    ${tw`grid gap-1 mb-12`}
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    article {
      ${tw`flex flex-col mb-3`}
    }
  }

  h4 {
    margin-bottom: 5px;
  }
`;

export default OfficersPage;
