// external imports
import React from 'react';
import tw, { styled } from 'twin.macro';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// internal imports
import devices from 'utils/devices';
import masonicLinks from '../../content/masonicLinks';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Icon } from 'primitives';
import useDeviceDetection from '../utils/hooks/useDeviceDetection';
import Collapsible from '../components/shared/Collapsible';

const SideBar = () => {
  const { isMobile } = useDeviceDetection();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

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
    <SideBarContainer>
      <Collapsible initialIsOpen={isHome} disabled={!isMobile}>
        <section>
          <h3>M:.W:. Thomas L. Turlington, Jr.</h3>
          <p>Grand Master 2020-2021</p>

          <GatsbyImage
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
                  <a href={masonicLink.link} target="=_blank" rel="noreferrer noopener">
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
            <a href="https://twitter.com/suncoastmasons" target="=_blank" rel="noreferrer noopener">
              <Icon color={'#55acee'} size={35} name="twitter" />
            </a>

            <a href="https://www.facebook.com/suncoastmasons/" target="=_blank" rel="noreferrer noopener">
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

  p {
    ${tw`my-2.5`};
  }

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
    ${tw`my-3 text-center`};
  }

  section {
    ${tw`flex flex-col items-center`};
  }

  @media (${devices.tablet}) {
    ${tw`self-start ml-5`};

    max-width: 230px;
  }
`;

export default SideBar;
