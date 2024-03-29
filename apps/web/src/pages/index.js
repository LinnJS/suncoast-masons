// external imports
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { GatsbyImage as Img } from 'gatsby-plugin-image';
import { styled } from 'twin.macro';

// internal imports
import { Card, TWBlockContent } from 'primitives';
import devices from 'utils/devices';

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
            gatsbyImageData(layout: FIXED, width: 240)
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
    <ArticleGrid>
      {articles.map(({ id, title, body, slug, mainImage }) => {
        return (
          <Card key={id} className="box-border overflow-hidden card max-h-96 ">
            <div className="box-content overflow-hidden ">
              <Link to={`article/${slug.current}`}>
                <h3 className="mb-2">{title}</h3>
              </Link>

              <TWBlockContent className="box-content" blocks={body} />
            </div>

            {mainImage ? (
              <Img className="mt-2 max-h-60 h-1/2" image={mainImage.asset.gatsbyImageData} alt={mainImage.alt} />
            ) : (
              <div className="spacer" />
            )}
          </Card>
        );
      })}
    </ArticleGrid>
  );
};

const ArticleGrid = styled.div`
  --columns: 1;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(var(--columns), minmax(300px, 1fr));
  justify-content: center;

  .card {
    max-width: 300px;
  }

  .spacer {
    min-height: 10px;
  }

  @media (${devices.laptop}) {
    --columns: 2;
  }

  @media (${devices.laptopL}) {
    --columns: 3;
  }

  @media (${devices.mobileS}) {
    .card {
      max-width: 270px;
    }
  }
`;

LandingPage.propTypes = {
  data: PropTypes.shape({
    articlesSortedByPublishedDate: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          slug: PropTypes.object,
          body: PropTypes.array,
          mainImage: PropTypes.shape({
            asset: PropTypes.object.isRequired,
            alt: PropTypes.string.isRequired,
          }),
        }),
      ),
    }),
  }),
};

export default LandingPage;
