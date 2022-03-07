/* eslint-disable react/display-name */
// external imports
import React from 'react';

// internal imports
import { Link } from 'primitives';

import links, { socials } from '../../content/navLinks';

const Footer = (props) => {
  return (
    <footer className="bg-white" {...props}>
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          {links.map(({ name, link }) => (
            <div key={name} className="px-5 py-2">
              <Link to={link} className="text-base hover:text-gray-900">
                {name}
              </Link>
            </div>
          ))}
        </nav>

        <section className="flex justify-center mt-8 space-x-6">
          {socials.map(({ name, link, Icon }) => (
            <Link key={name} to={link} className="hover:text-gray-900">
              <span className="sr-only">{name}</span>
              <Icon aria-hidden="true" />
            </Link>
          ))}
        </section>

        <p className="mt-8 text-base text-center">&copy; 2021 Suncoast Master Mason Association, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
