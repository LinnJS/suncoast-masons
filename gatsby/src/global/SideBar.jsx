// external imports
import React, { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage as Img } from 'gatsby-plugin-image';
import { isMobileOnly } from 'react-device-detect';

// internal imports
import devices from 'utils/devices';
import { Icon } from 'primitives';
import masonicLinks from '../../content/masonicLinks';
import Collapsible from '../components/shared/Collapsible';

const SideBar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [isOpen, setIsOpen] = useState(isHome);

  const { jrGrandMaster } = useStaticQuery(graphql`
    query SideBarQuery {
      jrGrandMaster: file(name: { eq: "jr-grand-master" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, width: 230)
        }
      }
    }
  `);

  return (
    <SideBarContainer aria-hidden={isOpen}>
      <Collapsible isOpen={isOpen} setIsOpen={setIsOpen} disabled={!isMobileOnly}>
        <section>
          <h3>M:.W:. Thomas L. Turlington, Jr.</h3>
          <p>Grand Master 2020-2021</p>

          <Img
            alt="Most worshipful Thomas L. Turlington head shot in masonic regalia"
            image={jrGrandMaster.childrenImageSharp[0].gatsbyImageData}
          />
        </section>

        <section>
          <h3>Masonic Links</h3>
          <ul>
            {masonicLinks.map((masonicLink, idx) => {
              return (
                <li key={`masonic-link-${idx}`}>
                  <a href={masonicLink.link} aria-hidden={isOpen} target="=_blank" rel="noreferrer noopener">
                    {masonicLink.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="socials">
          <h3>Follow Us on our Socials</h3>

          <div>
            <a
              href="https://twitter.com/suncoastmasons"
              aria-hidden={isOpen}
              target="=_blank"
              rel="noreferrer noopener"
            >
              <Icon color={'#55acee'} size={35} name="twitter" />
            </a>

            <a
              href="https://www.facebook.com/suncoastmasons/"
              aria-hidden={isOpen}
              target="=_blank"
              rel="noreferrer noopener"
            >
              <Icon color={'#3b5998'} size={35} name="facebook" />
            </a>
          </div>
        </section>
      </Collapsible>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.aside`
  ${tw`self-center w-full`};

  ul {
    ${tw`p-6 space-y-3 bg-gray-300`};
  }

  .socials {
    div {
      ${tw`flex justify-center mb-3`};

      a + a {
        ${tw`mx-1.5`};
      }
    }
  }

  h3 {
    ${tw`text-center`};
  }

  section {
    ${tw`flex flex-col items-center mb-3`};
  }

  @media (${devices.tablet}) {
    ${tw`self-start ml-5`};

    max-width: 230px;
  }
`;

export default SideBar;
