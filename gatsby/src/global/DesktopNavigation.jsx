// external imports
import React from 'react';

// internal imports
import { Link } from 'primitives';
import links from '../../content/navLinks';

const DesktopNavigation = () => {
  return (
    <nav className="items-center justify-center hidden w-full mb-5 bg-white lg:flex">
      <ul className="flex flex-row flex-wrap justify-center">
        {links.map((link, idx) => (
          <li className="m-2.5" key={`link-${idx}`}>
            <Link className="m-2.5 no-underline hover:underline" to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
