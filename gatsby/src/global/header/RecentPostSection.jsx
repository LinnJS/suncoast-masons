import React from 'react';
import PropTypes from 'prop-types';

const RecentPostSection = ({ posts }) => {
  return (
    <section className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
      <div>
        <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Recent Posts</h3>
        <ul className="mt-4 space-y-4">
          {posts.map(({ id, href, name }) => (
            <li key={id} className="text-base truncate">
              <a href={href} className="font-medium text-gray-900 hover:text-gray-700">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 text-sm">
        <a href="/officers" className="font-medium">
          View all posts <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
};

RecentPostSection.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      href: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

export default RecentPostSection;
