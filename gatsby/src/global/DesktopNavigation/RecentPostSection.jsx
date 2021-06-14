import React from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'primitives';

const RecentPostSection = () => {
  const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '/' },
  ];

  return (
    <section className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
      <div>
        <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Recent Posts</h3>
        <ul className="mt-4 space-y-4">
          {recentPosts.map(({ id, href, name }) => (
            <li key={id} className="text-base truncate">
              <Link to={href} className="font-medium text-gray-900 hover:text-gray-700">
                {name}
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
