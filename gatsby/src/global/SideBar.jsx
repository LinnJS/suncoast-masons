// external imports
import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

// internal imports
import devices from 'utils/devices';
import masonicLinks from '../../content/masonicLinks';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Icon } from 'primitives';

const SideBar = () => {
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
      <section className="jr-grand-master">
        <h4>M:.W:. Thomas L. Turlington</h4>
        <p>Jr. Grand Master 2020-2021</p>
        <GatsbyImage
          alt="Most worshipful Thomas L. Turlington head shot in masonic regalia"
          image={jrGrandMaster.childrenImageSharp[0].gatsbyImageData}
        />
      </section>

      <section className="masonic-links">
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

          <a
            href="https://www.facebook.com/search/top?q=District%2018%20Suncoast%20Master%20Mason%20Association"
            target="=_blank"
            rel="noreferrer noopener"
          >
            <Icon color={'#3b5998'} size={35} name="facebook" />
          </a>
        </div>
      </section>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.aside`
  align-self: center;
  min-width: 230px;

  .jr-grand-master {
    h4 {
      margin: 0;
    }

    p {
      margin: 10px 0;
    }
  }

  .masonic-links {
    ul {
      background-color: lightgray;
      padding: 10px;
      padding-left: 30px;
      margin: 0;

      li {
        margin: 12px 0;
      }
    }
  }

  .socials {
    div {
      display: flex;

      a + a {
        margin: 0 5px;
      }
    }
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 5px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (${devices.tablet}) {
    align-self: flex-start;
    margin-left: 20px;
    max-width: 230px;
  }
`;

export default SideBar;
