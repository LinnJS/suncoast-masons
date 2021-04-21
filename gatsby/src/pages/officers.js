// external imports
import React from 'react';
import styled from 'styled-components';
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

    committee: allSanityCommittee {
      nodes {
        id
        name
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
      {officers.map(({ id, name, title, phone, email }) => {
        return (
          <div className="officers" key={id}>
            <h4>{name}</h4>
            <span>{title}</span>
            <a href={`tel:${phone}`}>{phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        );
      })}

      <h2>Committeemen</h2>
      <div className="committeemen-container">
        {firstCommittee.map((committeemen) => {
          const { id, name, title, email, phone } = committeemen;

          return (
            <section className="committeemen" key={id}>
              <h4>{name}</h4>
              <span>{title}</span>
              <a href={`tel:${phone}`}>{phone}</a>
              <a href={`mailto:${email}`}>{email}</a>
            </section>
          );
        })}
      </div>

      <h2>Lecturers</h2>
      <div className="committeemen-container">
        {lecturers.map(({ id, name, title, phone, email, lectures }) => {
          return (
            <section className="committeemen" key={id}>
              <h4>{name}</h4>
              <span>{title}</span>
              <a href={`tel:${phone}`}>{phone}</a>
              <a href={`mailto:${email}`}>{email}</a>
              <span>{lectures}</span>
            </section>
          );
        })}
      </div>
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
  .officers {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .committeemen-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .committeemen {
      display: flex;
      max-width: 220px;
      flex-direction: column;
      margin: 15px;
    }
  }

  h4 {
    margin: 0;
    margin-bottom: 5px;
  }

  section: {
    display: flex;
  }
`;

export default OfficersPage;
