// external imports
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const ScholarshipsRules = () => {
  return (
    <RulesSection>
      <h2>Suncoast Master Mason Association</h2>
      <h3>William S. O’Brien Memorial Masonic Scholarship</h3>

      <header>Eligibility:</header>
      <p>
        All Graduating High School Seniors and graduates in Pinellas County (Boca Ciega, Clearwater, Countryside, Dixie
        Hollins, Dunedin, East Lake, Gibbs, Lakewood, Largo, Northeast, Osceola, Palm Harbor, Pinellas Park, Seminole,
        St. Petersburg and Tarpon Springs) who will be attending a State of Florida Supported School (college,
        university, community college or division of higher education governed by the State Board of Regents) during the
        following term (semester or quarter). The applicant must enter the school within one semester/quarter (excluding
        summer sessions) after having been awarded the scholarship.
      </p>

      <header>Requirements:</header>
      <p>
        A 1,000 word essay on the topic “Why Education is Important.” All work must be original and the essay becomes
        the property of The Grand Lodge of Florida.
      </p>

      <header>Deadline:</header>
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
          The essay should have a cover page. Centered on the cover page, top to bottom and between the margins should
          be the following: title of essay, author’s full name, name of school at which currently enrolled.
        </li>
        <li>
          Pages should be numbered beginning with the title page as page 1. Page numbers should be in the upper right
          corner of each page.
        </li>
        <li>
          Each page should contain a header, also in the upper right, which contains the author’s last name. Should the
          title page be separated from the essay, this will provide for immediate identification. If MS Word is used to
          prepare the essay, the inclusion of a header and page number may be preset. Refer to MS Word Help for
          instructions on the use of headers.
        </li>
        <li>
          The exact word count should be included at the end of the essay. If the author utilizes MS Word, the word
          count can be printed automatically. Refer to MS Word Help for directions.
        </li>
        <li>
          The essay will be judged based on content, grammar, spelling, syntax, punctuation, and other such aspects of
          proper language usage and essay construction.
        </li>
        <li>
          It is strongly recommended that the author ask a member of the school’s English faculty to review the essay
          for format, style, content, and construction.
        </li>
      </ol>
    </RulesSection>
  );
};

const RulesSection = styled.section`
  ${tw`flex flex-col justify-center`}
  ol {
    ${tw`pl-4`}
    li {
      ${tw`mb-3 placeholder-blue-100 list-decimal`};
    }
  }
`;

export default ScholarshipsRules;
