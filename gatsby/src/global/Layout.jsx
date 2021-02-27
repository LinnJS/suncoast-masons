import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
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
            <ContentContainer>{children}</ContentContainer>
          </ThemeProvider>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 75px;
`;

export default Layout;
