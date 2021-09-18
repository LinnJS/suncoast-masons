import React from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'primitives';
import { useStaticQuery, graphql } from 'gatsby';

const RecentPostSection = () => {
  const { articlesSortedByPublishedDate } = useStaticQuery(graphql`
    query RecentPostQuery {
      articlesSortedByPublishedDate: allSanityArticle(sort: { fields: publishedAt, order: DESC }, limit: 3) {
        nodes {
          publishedAt
          id
          title
          slug {
            current
          }
        }
      }
    }
  `);

  return (
    <section className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
      <div>
        <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Recent Posts</h3>
        <ul className="mt-4 space-y-4">
          {articlesSortedByPublishedDate.nodes.map(({ id, slug, title }) => (
            <li key={id} className="text-base truncate">
              <Link to={`article/${slug.current}`} className="font-medium text-gray-900 hover:text-gray-700">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 text-sm">
        <Link to="/" className="font-medium">
          View all posts <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
};

RecentPostSection.propTypes = {};

export default RecentPostSection;
