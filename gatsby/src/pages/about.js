// external imports
import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import { graphql } from 'gatsby';

// internal imports
import Page from 'global/Page';
import GavelRules from 'components/about/GavelRules';

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

    forms: allSanityDocuments(filter: { type: { elemMatch: { title: { eq: "Form" } } } }) {
      nodes {
        id
        name
        file {
          asset {
            url
            size
          }
        }
      }
    }
  }
`;

const AboutPage = ({ data: { byLaws, forms } }) => {
  console.log('forms: ', forms);
  return (
    <AboutContainer>
      <h2>About</h2>
      {/* TODO: put this data into CMS */}
      <section>
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
      </section>

      <section>
        <h3>Forms</h3>
        <p>
          My Brothers, please find below our application for Membership and Two Minute Drill. They can be downloaded and
          filled out on you computer in Adobe Reader or downloaded, printed and filled out by hand. If you do not have
          Adobe Reader on your computer, it is free and can be downloaded and installed by clicking{' '}
          <a href="https://get.adobe.com/reader/" target="_blank" rel="noreferrer noopener">
            here
          </a>
          .
        </p>

        <ul>
          {forms.nodes.map((form) => {
            console.log('form: ', form);
            return (
              <li key={form.id}>
                <a href={form.file.asset.url} target="_blank" rel="noreferrer noopener">
                  {form.name}
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h3>By laws</h3>
        <ul>
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
      </section>

      <GavelRules />
    </AboutContainer>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    byLaws: PropTypes.shape({
      nodes: PropTypes.array,
    }),
    forms: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
};

const AboutContainer = styled(Page)`
  section {
    ${tw`mb-8`};

    &:last-child {
      ${tw`mb-0`};
    }
  }

  p {
    ${tw`mb-4`};
  }

  ul {
    li {
      ${tw`mb-2`};
    }
  }
`;

export default AboutPage;
