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
  }
`;

const OfficersPage = ({ data }) => {
  const officers = data.officers.nodes[0].officers;
  console.log('officers: ', officers);
  return (
    <Layout>
      <OfficersContainer>
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
`;

export default OfficersPage;
