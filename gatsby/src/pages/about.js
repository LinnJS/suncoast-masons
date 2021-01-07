import React from 'react';
import styled from 'styled-components';
// import { graphql } from 'gatsby';

import Page from 'global/Page';
import Layout from 'global/Layout';

// export const query = graphql``;

const AboutPage = () => {
  return (
    <Layout>
      <AboutContainer>
        <h1>About</h1>
        {/* TODO: put this data into CMS */}
        <p>
          The Suncoast Master Mason Association is an organization of Master Masons who are members of regular Lodges in
          the 18th Masonic District of the Grand Lodge of Florida. These lodges are located throughout Pinellas County.
          The Association meets in January, March, May, July, September, and November on the 3rd Wednesday. Meal begins
          at 6:30 PM with the meeting following at 7:30 PM. If you are a Master Mason we would greatly welcome your
          attendance!
        </p>

        <p>
          Are you interested in joining the Suncoast Masters Mason Association? The only requirement is that you are a
          Master Mason in good standing in District 18. If you are interested in joining, please fill out this
          application and submit to{' '}
          <a href="mailto:secretary@suncoastmasons.org" target="_blank" rel="noreferrer noopener">
            secretary@suncoastmasons.org
          </a>
          . Our mailing address is P.O. Box 1738, Oldsmar, FL 34677.
        </p>
      </AboutContainer>
    </Layout>
  );
};

const AboutContainer = styled(Page)``;

export default AboutPage;
