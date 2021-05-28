// external imports
import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import { graphql, Link } from 'gatsby';

// internal imports
import Page from 'global/Page';
import { Card } from 'primitives';
import { truncate } from 'utils';

export const query = graphql`
  query ArticlePageQuery {
    articlesSortedByPublishedDate: allSanityArticle {
      nodes {
        id
        title
        slug {
          current
        }

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
      {articles.map(({ id, title, body, slug }) => {
        const firstTest = body[0].children[0].text;

        return (
          <Card key={id}>
            <Link to={`article/${slug.current}`}>
              <h3 className="mb-2">{title}</h3>
            </Link>

            {body && truncate(firstTest, 250)}
          </Card>
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
    ${tw`w-full p-4 mb-5`}
  }
`;

export default LandingPage;
