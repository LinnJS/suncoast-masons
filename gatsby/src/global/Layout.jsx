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
import SideBar from './SideBar';
import Footer from './Footer';

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
        <main>
          <div className="w-full">
            <DesktopNavigation />
            <Header />

            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-full">{children}</div>
              <SideBar />
            </div>
            <Footer />
          </div>
        </main>
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

  main {
    ${tw`container flex flex-col-reverse justify-end flex-1 min-h-screen p-3 mx-auto mt-8 mb-8 bg-white shadow `}
    box-shadow: 0 0 5px 3px rgb(0 0 0 / 4%);
    width: 85%;

    @media (${devices.mobileM}) {
      ${tw`p-6 `};
    }

    @media (${devices.tablet}) {
      ${tw`flex-row `};
    }
  }

  @media (${devices.laptop}) {
    ${tw`flex pt-20 pb-0`}
  }
`;

export default Layout;
