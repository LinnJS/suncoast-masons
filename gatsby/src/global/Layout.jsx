// external imports
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import tw, { styled } from 'twin.macro';

// internal imports

import devices from 'utils/devices';
import GlobalStyle from 'global/GlobalStyle';
import DesktopNavigation from 'global/DesktopNavigation';
import MobileNavigation from 'global/MobileNavigation';
import Header from 'global/Header';

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
      </Helmet>

      <GlobalStyle />
      <DesktopNavigation />

      <ContentContainer>
        <Header />
        {children}
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
