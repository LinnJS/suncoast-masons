import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Page from 'global/Page';
import Layout from 'global/Layout';

export const query = graphql`
  query ByLawsQuery {
    byLaws: allSanityBylaws(sort: { fields: publishedAt, order: DESC }, limit: 1) {
      nodes {
        id
        title
        file {
          asset {
            size
            url
          }
        }
      }
    }
  }
`;

const ByLawsPage = ({ data: { byLaws } }) => {
  return (
    <Layout>
      <ByLawsContainer>
        <h1>By Laws</h1>

        <ul>
          {byLaws.nodes.map((byLaw) => {
            return (
              <li key={byLaw.id}>
                <a href={byLaw.file.asset.url} target="_blank" rel="noreferrer noopener">
                  <h2>{byLaw.title}</h2>
                </a>
              </li>
            );
          })}
        </ul>
      </ByLawsContainer>
    </Layout>
  );
};

ByLawsPage.propTypes = {
  data: PropTypes.shape({
    byLaws: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
};

const ByLawsContainer = styled(Page)`
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
    }
  }
`;

export default ByLawsPage;
