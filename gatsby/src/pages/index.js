// external imports
import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

// internal imports
import Page from 'global/Page';
import { Card } from 'primitives';
import { truncate, device } from 'utils';

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
      {articles.map(({ id, title, body, slug, mainImage }) => {
        const firstTest = body[0].children[0].text;

        return (
          <Card key={id}>
            <div>
              <Link to={`article/${slug.current}`}>
                <h3 className="mb-2">{title}</h3>
              </Link>

              {body && truncate(firstTest, 250)}
            </div>

            {mainImage && <Img className="img" image={mainImage.asset.gatsbyImageData} alt={mainImage.alt} />}
          </Card>
        );
      })}
    </HomeContainer>
  );
};

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

const HomeContainer = styled(Page)`
  ${Card} {
    ${tw`flex-col w-full p-4 mb-5`}
    background-color: red;

    .img {
      ${tw`max-w-sm mt-4 max-h-60`}
    }
  }

  @media (${device.laptop}) {
    ${Card} {
      ${tw`flex-row`}

      .img {
        ${tw`mt-0 ml-4`}
      }
    }
  }
`;

export default LandingPage;
