// external imports
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { GatsbyImage as Img } from 'gatsby-plugin-image';
import { styled } from 'twin.macro';

// internal imports
import { Card } from 'primitives';
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
            gatsbyImageData(layout: CONSTRAINED, width: 380, height: 240, fit: SCALE)
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
        const firstTest = body[0].children[0].text;

        return (
          <Card className="flex-col max-w-sm lg:mb-5 lg:p-4" key={id}>
            <div>
              <Link to={`article/${slug.current}`}>
                <h3 className="mb-2">{title}</h3>
              </Link>

              {body && firstTest}
            </div>

            {mainImage && (
              <Img className="max-w-sm mt-4 max-h-60" image={mainImage.asset.gatsbyImageData} alt={mainImage.alt} />
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
  grid-template-columns: repeat(var(--columns), minmax(250px, 1fr));

  @media (${devices.laptop}) {
    --columns: 2;
  }

  @media (${devices.laptopL}) {
    --columns: 3;
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
