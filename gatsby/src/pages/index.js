// external imports
import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import { graphql, Link } from 'gatsby';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

// internal imports
import Page from 'global/Page';
import { Card } from 'primitives';
import { truncate } from 'utils';

export const query = graphql`
  query ArticlePageQuery {
    articlesSortedByPublishedDate: allSanityArticle(sort: { fields: publishedAt, order: DESC }) {
      nodes {
        id
        title

        slug {
          current
        }

        mainImage {
          alt
          asset {
            gatsbyImageData
          }
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
      {articles.map(({ id, title, body, slug, mainImage, alt }) => {
        console.log('mainImage: ', mainImage);
        const firstTest = body[0].children[0].text;

        return (
          <Card key={id}>
            <Link to={`article/${slug.current}`}>
              <h3 className="mb-2">{title}</h3>
            </Link>

            {body && truncate(firstTest, 250)}

            {mainImage && <Img className="img" image={mainImage.asset.gatsbyImageData} alt={alt} />}
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

    .img {
      height: 150px;
      width: 150px;
    }
  }
`;

export default LandingPage;
