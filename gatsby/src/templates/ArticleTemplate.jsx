// external import
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

// internal import

export const query = graphql`
  query ($slug: String!) {
    article: sanityArticle(slug: { current: { eq: $slug } }) {
      title
      publishedAt(formatString: "dddd, MMM Do h:mma")
      eventDatetime(formatString: "dddd, MMM Do h:mma")

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
`;

const ArticleTemplate = ({
  data: {
    article: { body, title },
  },
}) => {
  return (
    <div>
      <h2>{title}</h2>

      {body && <BlockContent className="body" blocks={body} />}
    </div>
  );
};

ArticleTemplate.propTypes = {
  data: PropTypes.shape({
    article: PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.array,
    }),
  }),
};

export default ArticleTemplate;
