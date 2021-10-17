// external imports
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

// internal imports
import devices from 'utils/devices';
import PastRecipientsTable from '../components/scholarships/PastRecipientsTable';
import ScholarshipsRules from '../components/scholarships/ScholarshipsRules';
import pastRecipientsData from '../../content/scholarshipsRecipients';

export const query = graphql`
  query ScholarshipsPageQuery {
    scholarshipRecipient: file(name: { eq: "scholarships-1" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 334)
      }
    }

    obrienHeadShot: file(name: { eq: "scholarships-obrien" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 192)
      }
    }
  }
`;

const ScholarshipsPage = ({ data: { scholarshipRecipient, obrienHeadShot } }) => {
  const { columns, data } = pastRecipientsData;
  const tableColumns = useMemo(() => columns, [columns]);
  const tableData = useMemo(() => data, [data]);

  return (
    <ScholarshipsContainer>
      <section className="flex flex-col items-center justify-center mb-12 text-center scholarship-section sm:text-base">
        <h2>SCHOLARSHIPS</h2>
        <h3>WILLIAM S. O’BRIEN MEMORIAL MASONIC SCHOLARSHIP</h3>

        <GatsbyImage
          className="align-center img md:max-w-xs"
          alt="William S. O’Brien and female recipient"
          image={scholarshipRecipient.childImageSharp.gatsbyImageData}
        />

        <em className="mt-5">Sponsored by</em>
        <h4>SUNCOAST MASTER MASON ASSOCIATION</h4>
        <p>A not-for-profit organization serving Masonic Lodges in the 18th Masonic District of Florida.</p>
      </section>

      <section className="flex flex-col items-center justify-center mb-12 scholarship-section">
        <h2>WILLIAM S. O’BRIEN</h2>

        <GatsbyImage
          className="img"
          alt="Head shot of William S. O’Brien in masonic regalia"
          image={obrienHeadShot.childImageSharp.gatsbyImageData}
        />

        <p>
          The Association’s Scholarship is named after William (Bill) S. O’Brien who founded the Scholarship Committee
          and fund to help local students. W∴ Bill was a Past Master of Gulf Beach Lodge No. 291 F.& A.M. in Madeira
          Beach, Florida (1991) but was devoted to supporting students throughout the Tampa Bay area, not just in his
          hometown, and championed the Association’s Scholarship Committee for a number of years. Regrettably, Bill
          passed away in December 2003. His enthusiasm and guidance is greatly missed by all.
        </p>
      </section>

      <PastRecipientsTable columns={tableColumns} data={tableData} />

      <ScholarshipsRules />
    </ScholarshipsContainer>
  );
};

ScholarshipsPage.propTypes = {
  data: PropTypes.shape({
    scholarshipRecipient: PropTypes.object,
    obrienHeadShot: PropTypes.object,
  }),
};

const ScholarshipsContainer = styled.div`
  ${tw`justify-center`};

  .img {
    ${tw`mb-3`};
    max-width: 250px;
    max-height: 400px;
  }

  h2,
  h3,
  h4 {
    ${tw`text-center`};
  }
`;

export default ScholarshipsPage;
