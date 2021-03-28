import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Page from 'global/Page';
import Layout from 'global/Layout';

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

  return (
    <Layout>
      <OfficersContainer>
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

        <h3>DDGM/DI</h3>
        {/* TODO */}

        <h3>Committeemen</h3>
        {/* TODO */}

        <h3>Lecturers</h3>
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
    </Layout>
  );
};

const OfficersContainer = styled(Page)`
  display: flex;
  flex-wrap: wrap;

  .officers {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .lecturer {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
`;

export default OfficersPage;
