// external imports
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

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
    <header className="flex flex-col items-center self-center justify-center text-center bg-white">
      <Link aria-label="Navigate home" to="/">
        <Img
          className="hidden mb-8 lg:flex"
          alt="Suncoast master masons banner with sun under Pinellas county"
          image={headerImg.childImageSharp.gatsbyImageData}
        />
      </Link>
    </header>
  );
};

export default Header;
