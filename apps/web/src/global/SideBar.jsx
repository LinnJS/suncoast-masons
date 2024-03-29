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
import { Link } from 'primitives';
import masonicLinks from '../../content/masonicLinks';
import Collapsible from '../components/shared/Collapsible';
import { socials } from '../../content/navLinks';

const SideBar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [isOpen, setIsOpen] = useState(isHome);
  const isHidden = isMobileOnly && !isOpen;

  const { grandMaster } = useStaticQuery(graphql`
    query SideBarQuery {
      grandMaster: file(name: { eq: "grand-master" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, width: 230)
        }
      }
    }
  `);

  return (
    <SideBarContainer>
      <Collapsible isOpen={isOpen} setIsOpen={setIsOpen} disabled={!isMobileOnly} isHidden={isHidden}>
        <section>
          <h3>M:.W:. Jeffrey S. Foster</h3>
          <p>Grand Master 2021-2022</p>

          <Img
            alt="Most worshipful Jeffrey S. Foster head shot in masonic regalia"
            image={grandMaster.childrenImageSharp[0].gatsbyImageData}
          />
        </section>

        <section>
          <h3>Masonic Links</h3>
          <ul>
            {masonicLinks.map((masonicLink, idx) => {
              return (
                <li key={`masonic-link-${idx}`}>
                  <a href={masonicLink.link} aria-hidden={isHidden} target="=_blank" rel="noreferrer noopener">
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
            {socials.map(({ name, link, Icon }) => (
              <Link key={name} to={link} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{name}</span>
                <Icon aria-hidden="true" />
              </Link>
            ))}
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
