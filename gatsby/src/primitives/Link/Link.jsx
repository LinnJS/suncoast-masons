import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

const Link = (props) => {
  const { path, children } = props;
  // if link is external use an anchor otherwise use GatsbyLink
  const URLPatter =
    'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)';
  const urlRegex = new RegExp(URLPatter);
  const isLinkExternal = urlRegex.test(path);
  // if homePath don't put leading slash
  const isHomePath = path === '/' ? '/' : `/${path}`;

  return isLinkExternal ? (
    <a {...props} target="_blank" rel="noopener noreferrer" href={path}>
      {children}
    </a>
  ) : (
    <GatsbyLink {...props} to={isHomePath}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  children: PropTypes.any,
  path: PropTypes.string,
};

export default Link;
