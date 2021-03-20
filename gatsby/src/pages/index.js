import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import Page from 'global/Page';
import Layout from 'global/Layout';

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
  console.log('articles: ', articles);
  return (
    <Layout>
      <HomeContainer>
        {articles.map(({ id, title, body }) => {
          return (
            <di key={id} className="article">
              <h3>{title}</h3>

              {body && <BlockContent className="body" blocks={body} />}
            </di>
          );
        })}
      </HomeContainer>
    </Layout>
  );
};

const HomeContainer = styled(Page)`
  .article {
    width: 100%;
    border: black solid;
    margin-bottom: 20px;
    padding: 16px;
  }
`;

export default LandingPage;
