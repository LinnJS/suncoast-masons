// external imports
import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ to, children, ...rest }) => {
  // if link is external use an anchor otherwise use GatsbyLink
  const URLPatter =
    'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)';
  const urlRegex = new RegExp(URLPatter);
  const isLinkExternal = urlRegex.test(to);
  // if homePath don't put leading slash
  const isHomePath = to === '/' ? '/' : `/${to}`;

  return isLinkExternal ? (
    <a {...rest} target="_blank" rel="noopener noreferrer" href={to}>
      {children}
    </a>
  ) : (
    <GatsbyLink {...rest} to={isHomePath}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  to: PropTypes.string.isRequired,
};

export default Link;
