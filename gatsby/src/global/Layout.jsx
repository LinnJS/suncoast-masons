// external imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

// internal imports
import theme from 'global/theme';
import GlobalStyle from './GlobalStyle';
import Navigation from './Navigation';
import Header from './Header';

const Layout = ({ children }) => {
  const [isLightTheme] = useState(true);

  const data = useStaticQuery(graphql`
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
  `);

  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Helmet>
      <ThemeProvider theme={isLightTheme ? theme.light : theme.dark}>
        <GlobalStyle />
        <Navigation />
        <ContentContainer>
          <Header />
          {children}
        </ContentContainer>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 75px;
`;

export default Layout;
