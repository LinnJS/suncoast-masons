// external imports
import React from 'react';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

// internal imports
import devices from 'utils/devices';
import GlobalStyle from 'global/GlobalStyle';
import DesktopNavigation from 'global/DesktopNavigation';
import MobileNavigation from 'global/MobileNavigation';
import Header from 'global/Header';
import Page from 'global/Page';
// import TailwindHeader from 'global/header/index';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

      icon: file(name: { eq: "icon" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, width: 50, height: 50)
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <GlobalStyle />

      <ContentContainer>
        {/* <TailwindHeader /> */}
        <Page>
          <DesktopNavigation />
          <Header />
          {children}
        </Page>
      </ContentContainer>

      <MobileNavigation />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const ContentContainer = styled.div`
  ${tw`flex flex-col items-center justify-center mb-16`}

  @media (${devices.laptop}) {
    ${tw`flex pt-20 pb-0`}
  }
`;

export default Layout;
