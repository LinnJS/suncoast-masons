import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Page from 'global/Page';
import Layout from 'global/Layout';

export const query = graphql`
  query LecturersPageQuery {
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

const LecturersPage = ({ data }) => {
  const lecturers = data.lecturers.nodes;
  console.log('lecturers: ', lecturers);
  return (
    <Layout>
      <LecturersContainer>
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
      </LecturersContainer>
    </Layout>
  );
};

const LecturersContainer = styled(Page)`
  display: flex;
  flex-wrap: wrap;

  .lecturer {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
`;

export default LecturersPage;
