import React, { useMemo } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Page from 'global/Page';
import Layout from 'global/Layout';
import PastRecipientsTable from '../components/scholarships/PastRecipientsTable';
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

        <section className="rules">
          <h2>Suncoast Master Mason Association</h2>
          <h3>William S. O’Brien Memorial Masonic Scholarship</h3>

          <span>Eligibility:</span>
          <p>
            All Graduating High School Seniors and graduates in Pinellas County (Boca Ciega, Clearwater, Countryside,
            Dixie Hollins, Dunedin, East Lake, Gibbs, Lakewood, Largo, Northeast, Osceola, Palm Harbor, Pinellas Park,
            Seminole, St. Petersburg and Tarpon Springs) who will be attending a State of Florida Supported School
            (college, university, community college or division of higher education governed by the State Board of
            Regents) during the following term (semester or quarter). The applicant must enter the school within one
            semester/quarter (excluding summer sessions) after having been awarded the scholarship.
          </p>

          <span>Requirements:</span>
          <p>
            A 1,000 word essay on the topic “Why Education is Important.” All work must be original and the essay
            becomes the property of The Grand Lodge of Florida.
          </p>

          <span>Deadline:</span>
          <p>To Be Announced</p>

          <h4>ESSAY CONTEST FORMAT</h4>
          <ol>
            <li>The essay should be typed using Times New Roman type case.</li>
            <li> Type size should be 12 pt.</li>
            <li>
              The essay, including the cover page, should be double spaced with no additional spaces between paragraphs.
            </li>
            <li>The essay should be typed using standard indentation at the beginning of each paragraph.</li>
            <li>The standard margin should be one inch (1 in.) top, bottom, left, and right.</li>
            <li>
              The essay should have a cover page. Centered on the cover page, top to bottom and between the margins
              should be the following: title of essay, author’s full name, name of school at which currently enrolled.
            </li>
            <li>
              Pages should be numbered beginning with the title page as page 1. Page numbers should be in the upper
              right corner of each page.
            </li>
            <li>
              Each page should contain a header, also in the upper right, which contains the author’s last name. Should
              the title page be separated from the essay, this will provide for immediate identification. If MS Word is
              used to prepare the essay, the inclusion of a header and page number may be preset. Refer to MS Word Help
              for instructions on the use of headers.
            </li>
            <li>
              The exact word count should be included at the end of the essay. If the author utilizes MS Word, the word
              count can be printed automatically. Refer to MS Word Help for directions.
            </li>
            <li>
              The essay will be judged based on content, grammar, spelling, syntax, punctuation, and other such aspects
              of proper language usage and essay construction.
            </li>
            <li>
              It is strongly recommended that the author ask a member of the school’s English faculty to review the
              essay for format, style, content, and construction.
            </li>
          </ol>
        </section>
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

  .rules {
    display: flex;
    justify-content: center;
    flex-direction: column;

    h2,
    h3,
    h4 {
      text-align: center;
      font-weight: bold;
    }

    h2 {
      margin-top: 40px;
    }

    h3 {
      margin-top: 0;
    }

    span {
      font-weight: bold;
    }
  }
`;

export default ScholarshipsPage;
