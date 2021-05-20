// external imports
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';

// internal imports
import Page from 'global/Page';

export const query = graphql`
  query AboutQuery {
    byLaws: allSanityBylaws(sort: { fields: publishedAt, order: DESC }, limit: 1) {
      nodes {
        id
        title
        file {
          asset {
            size
            url
          }
        }
      }
    }
  }
`;

const AboutPage = ({ data: { byLaws } }) => {
  return (
    <AboutContainer>
      <h2>About</h2>
      {/* TODO: put this data into CMS */}
      <p>
        The Suncoast Master Mason Association is an organization of Master Masons who are members of regular Lodges in
        the 18th Masonic District of the Grand Lodge of Florida. These lodges are located throughout Pinellas County.
        The Association meets in January, March, May, July, September, and November on the 3rd Wednesday. Meal begins at
        6:30 PM with the meeting following at 7:30 PM. If you are a Master Mason we would greatly welcome your
        attendance!
      </p>

      <p>
        Are you interested in joining the Suncoast Masters Mason Association? The only requirement is that you are a
        Master Mason in good standing in District 18. If you are interested in joining, please fill out this application
        and submit to{' '}
        <a href="mailto:secretary@suncoastmasons.org" target="_blank" rel="noreferrer noopener">
          secretary@suncoastmasons.org
        </a>
        . Our mailing address is P.O. Box 1738, Oldsmar, FL 34677.
      </p>

      <h3>Forms</h3>

      <h3>By laws</h3>
      <ul className="bylaws">
        {byLaws.nodes.map((byLaw) => {
          return (
            <li key={byLaw.id}>
              <a href={byLaw.file.asset.url} target="_blank" rel="noreferrer noopener">
                {byLaw.title}
              </a>
            </li>
          );
        })}
      </ul>

      <h3>Gavel rules</h3>
    </AboutContainer>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    byLaws: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
};

const AboutContainer = styled(Page)`
  .bylaws {
    box-sizing: content-box;
    padding: 0;
    margin: 0;

    li {
      list-style: none;
    }
  }
`;

export default AboutPage;
