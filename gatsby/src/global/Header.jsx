// external imports
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

// internal imports
import devices from 'utils/devices';
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
      <Link aria-label="Navigate home" to="/">
        <Img
          className="img"
          alt="Suncoast master masons banner with sun under Pinellas county"
          image={headerImg.childImageSharp.gatsbyImageData}
        />
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  ${tw`flex flex-col items-center text-center bg-white`};
  width: 85%;

  .img {
    ${tw`hidden`};
  }

  @media (${devices.laptop}) {
    .img {
      ${tw`flex`};
    }
  }
`;

export default Header;
