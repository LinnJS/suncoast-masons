import React, { useMemo } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Page from 'global/Page';
import Layout from 'global/Layout';
import PastRecipientsTable from '../components/scholarships/PastRecipientsTable';
import ScholarshipsRules from '../components/scholarships/ScholarshipsRules';
import PastRecipientsData from '../../content/scholarships-recipients';

export const query = graphql`
  query ScholarshipsPageQuery {
    photo1: file(name: { eq: "scholarships-1" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }

    photo2: file(name: { eq: "scholarships-obrien" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;

const ScholarshipsPage = ({ data: { photo1, photo2 } }) => {
  const { columns, data } = PastRecipientsData;
  const tableColumns = useMemo(() => columns, []);
  const tableData = useMemo(() => data, []);

  return (
    <Layout>
      <ScholarshipsContainer>
        <section className="intro">
          <h2>SCHOLARSHIPS</h2>
          <h3>WILLIAM S. O’BRIEN MEMORIAL MASONIC SCHOLARSHIP</h3>

          <GatsbyImage image={photo1.childImageSharp.gatsbyImageData} />

          <em>Sponsored by</em>
          <h4>SUNCOAST MASTER MASON ASSOCIATION</h4>
          <p>A not-for-profit organization serving Masonic Lodges in the 18th Masonic District of Florida.</p>
        </section>

        <section className="obrien">
          <h2>WILLIAM S. O’BRIEN</h2>

          <GatsbyImage image={photo2.childImageSharp.gatsbyImageData} />

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
    </Layout>
  );
};

const ScholarshipsContainer = styled(Page)`
  align-items: center;
  justify-content: center;

  .intro {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3 {
      margin-top: 0;
    }

    em {
      margin-top: 20px;
    }
  }

  .obrien {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export default ScholarshipsPage;
