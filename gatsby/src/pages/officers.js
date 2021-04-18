import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

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
            <span>{name}</span>
            <span>{title}</span>
            <span>{phone}</span>
            <span>{email}</span>
          </div>
        );
      })}

      <h2>Committeemen</h2>
      <div className="committeemen-container">
        {firstCommittee.map((committeemen) => {
          const { id, name, title, email, phone } = committeemen;

          return (
            <div className="committeemen" key={id}>
              <span>{name}</span>
              <span>{title}</span>
              <span>{email}</span>
              <span>{phone}</span>
            </div>
          );
        })}
      </div>

      <h2>Lecturers</h2>
      {lecturers.map(({ id, name, title, phone, email, lectures }) => {
        return (
          <div className="lecturer" key={id}>
            <span>{name}</span>
            <span>{title}</span>
            <span>{phone}</span>
            <span>{email}</span>
            <span>{lectures}</span>
          </div>
        );
      })}
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
  display: flex;
  flex-wrap: wrap;

  .officers {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .committeemen-container {
    display: flex;
    flex-wrap: wrap;

    .committeemen {
      display: flex;
      flex-direction: column;
      margin: 30px;
    }
  }

  .lecturer {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
`;

export default OfficersPage;
