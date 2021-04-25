// external imports
import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import devices from 'utils/devices';

// internal imports
import { Link } from 'primitives';

const Header = () => {
  const { headerImg } = useStaticQuery(graphql`
    query HeaderQuery {
      headerImg: file(name: { eq: "smma-logo-website" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  return (
    <HeaderContainer>
      <Link to="/">
        <GatsbyImage
          className="img"
          alt="Suncoast master masons banner with sun under Pinellas county"
          image={headerImg.childImageSharp.gatsbyImageData}
        />
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  text-align: center;

  .img {
    display: none;
  }

  @media (${devices.laptop}) {
    .img {
      display: flex;
    }
  }
`;

export default Header;
