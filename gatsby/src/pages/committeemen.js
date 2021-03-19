import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Page from 'global/Page';
import Layout from 'global/Layout';

export const query = graphql`
  query CommitteePageQuery {
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
  }
`;

const CommitteemenPage = ({ data: { committee } }) => {
  const firstCommittee = committee.nodes[0].committeemen;

  return (
    <Layout>
      <CommitteemenContainer>
        <p>Committeemen goes here</p>

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
      </CommitteemenContainer>
    </Layout>
  );
};

const CommitteemenContainer = styled(Page)`
  .committeemen-container {
    display: flex;
    flex-wrap: wrap;
  }

  .committeemen {
    display: flex;
    flex-direction: column;
    margin: 30px;
  }
`;

export default CommitteemenPage;
