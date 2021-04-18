// external imports
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

// internal imports
import Page from 'global/Page';

export const query = graphql`
  query ArticlePageQuery {
    articlesSortedByPublishedDate: allSanityArticle {
      nodes {
        id
        title

        body {
          list
          style
          _type
          _key
          children {
            text
            _key
            _type
          }
        }
      }
    }
  }
`;

const LandingPage = ({ data: { articlesSortedByPublishedDate } }) => {
  const articles = articlesSortedByPublishedDate.nodes;

  return (
    <HomeContainer>
      {articles.map(({ id, title, body }) => {
        return (
          <article key={id}>
            <h3>{title}</h3>

            {body && <BlockContent className="body" blocks={body} />}
          </article>
        );
      })}
    </HomeContainer>
  );
};

LandingPage.propTypes = {
  data: PropTypes.shape({
    articlesSortedByPublishedDate: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
};

const HomeContainer = styled(Page)`
  article {
    width: 100%;
    border: black solid;
    margin-bottom: 20px;
    padding: 16px;
  }
`;

export default LandingPage;
