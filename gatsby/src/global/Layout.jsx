import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import theme from 'global/theme';
import GlobalStyle from './GlobalStyle';
import Nav from './Nav';

const Layout = ({ children }) => {
  const [isLightTheme] = useState(true);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          imageSharp(fixed: { originalName: { eq: "icon.png" } }) {
            id
            fixed(height: 50, width: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      `}
      render={(data) => (
        <div>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          </Helmet>
          <ThemeProvider theme={isLightTheme ? theme.light : theme.dark}>
            <GlobalStyle />
            <Nav />
            <>{children}</>
          </ThemeProvider>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
