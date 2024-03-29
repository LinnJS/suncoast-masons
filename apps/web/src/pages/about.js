// external imports
import React from 'react';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';

// internal imports
import GavelRules from 'components/about/GavelRules';
import ContactForm from 'components/about/ContactForm';

export const query = graphql`
  query AboutQuery {
    byLaws: allSanityDocuments(filter: { documentType: { elemMatch: { title: { eq: "By laws" } } } }) {
      nodes {
        id
        name
        file {
          asset {
            size
            url
          }
        }
      }
    }

    forms: allSanityDocuments(filter: { documentType: { elemMatch: { title: { eq: "Form" } } } }) {
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
  return (
    <AboutContainer>
      <section>
        <h2>About</h2>
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
        <h2>Forms</h2>
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
        <h2>By laws</h2>
        <ul>
          {byLaws.nodes.map((byLaw) => {
            return (
              <li key={byLaw.id}>
                <a href={byLaw.file.asset.url} target="_blank" rel="noreferrer noopener">
                  {byLaw.name}
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <GavelRules />

      <ContactForm />
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

const AboutContainer = styled.div`
  section {
    ${tw`mb-8`};

    &:last-child {
      ${tw`mb-0`};
    }
  }

  ul {
    li {
      ${tw`mb-2`};
    }
  }
`;

export default AboutPage;
