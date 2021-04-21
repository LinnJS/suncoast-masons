// external imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

// internal imports
import theme from 'global/theme';
import devices from 'utils/devices';
import GlobalStyle from 'global/GlobalStyle';
import DesktopNavigation from 'global/DesktopNavigation';
import MobileNavigation from 'global/MobileNavigation';
import Header from 'global/Header';

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
        <DesktopNavigation />

        <ContentContainer>
          <Header />
          {children}
        </ContentContainer>

        <MobileNavigation />
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
  padding-bottom: 75px;

  @media (${devices.laptop}) {
    padding-top: 75px;
    padding-bottom: 0;
    display: flex;
  }
`;

export default Layout;
