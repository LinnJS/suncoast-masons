import React from 'react';
import tw, { styled } from 'twin.macro';

const GavelRules = () => {
  return (
    <GavelRulesContainer>
      <h3>Gavel rules</h3>
      <section>
        <p>
          The purpose of the gavel program is to promote visitation of Lodges within District 18 of the Grand Lodge of
          Florida. Promoting cooperation, education and goodwill is the hope and intent of the Sun Coast Master Mason
          Association. If there are any questions, please consult the President or Vice – President of the Association.
        </p>

        <ul id="gavel-list">
          <label htmlFor="gavel-list">There are three gavels:</label>

          <li>
            The <mark>“Hot” Gavel</mark> – whereby the Lodge possessing it must travel and present it to another Lodge.
          </li>

          <li>
            The <mark>“Traveling” Gavel”</mark> – whereby the Lodge in possession of the gavel is visited by one or more
            Lodges competing to obtain it.
          </li>

          <li>
            The <mark>“Unity” Gavel</mark> – whereby the newest Master Mason at the Lodge possessing the Gavel must
            deliver it with the Worshipful Master to the next newest Master Mason in the District at the night of his
            Raising. This program is sanctioned and governed by the Sun Coast Master Mason Association. Only Masonic
            Lodges in District 18 are eligible to participate.
          </li>

          <span>
            The rules for both the <mark>“Hot Gavel”</mark> and the <mark>“Traveling Gavel”</mark> are the same.
          </span>
        </ul>

        <p>
          Brothers are required to present or obtain a gavel; of these three brothers, two must be officers, one of
          which of must be an elected officer. In addition, they must be present at the opening and stay until the Lodge
          is closed. The gavels can be presented or obtained at either at Stated or Called Communications.{' '}
          <em>Under no circumstances</em> is the <mark>“Installation of Officers” </mark>or a{' '}
          <mark>“Funeral Lodge”</mark> to be considered for presenting or obtaining either the “hot” or “traveling”
          gavel.
        </p>

        <p>
          The whole team must stay for the complete communication and claim or present the gavel at the close of the
          meeting. The gavel cannot normally be obtained or presented to the Lodge that was last in possession of it; at
          least one other Lodge must have been in possession of the gavel. Gavels should be passed on as soon as
          possible (within a two-month period of time or before the next Sun Coast Master Mason Association meeting.){' '}
          <em>If after two 2 months, either the “Traveling” or “Hot” Gavel has not changed locations</em>, then the Sun
          Coast Master Mason Association reserves the right to summons the gavel, within ten (10) days prior to its
          meeting. Furthermore, the gavel shall be transmitted by the Worshipful Master or another Elected Officer of
          that particular Lodge to the President or presiding officer of the Association. Said Association Officer is
          hereby authorized to re-transmit said gavel to the Lodge with the required members and highest members present
          at said meeting. (Should the particular Lodge fail to deliver within two (2) months or to bring to the
          summoned meeting of the Association), any one of the four (4) elected officers of the Association are hereby
          authorized to take possession of said gavel and deliver it to the Lodge that had the required and highest
          number in attendance from the previous meeting held of the Association. In the event of a tie, then the
          President or Vice-President only shall have the discretion, to devise a suitable method to break the tie.
        </p>

        <p>
          For the <mark>“Traveling Gavel”</mark> – <em>In the event multiple Lodges are present to obtain the gavel</em>
          , the Lodge with the most Brothers present will be awarded the gavel. In case of a tie, the Worshipful Master
          of the Lodge in possession of the gavel shall, at his discretion devise a suitable and fair method to break
          the tie.
        </p>

        <p>
          For the <mark>“Traveling Gavel”</mark> –{' '}
          <em>
            The visiting Lodge obtaining the gavel shall have at least one meeting scheduled, after claiming the gavel ,
            before going dark for the summer.
          </em>{' '}
          The <mark>“Hot Gavel”</mark> and <mark>“Traveling Gavel”</mark> cannot be exchanged at the same communications
          by the same Lodge. Upon transfer of a gavel, an entry will be made in the accompanying register giving date of
          receipt, Lodge name and number, and the names of the Brethren involved.
        </p>

        <p>Gavels are to be prominently displayed in the “East” during all Stated and Called Communications.</p>

        <p>(Rules revised after motion was presented and passed on September 19, 2018)</p>
      </section>
    </GavelRulesContainer>
  );
};

const GavelRulesContainer = styled.div`
  mark {
    ${tw`bg-blue-100`};
  }

  em {
    ${tw`text-red-700`};
  }

  ul {
    label {
      ${tw`inline-block mb-2 font-semibold`};
    }

    li {
      ${tw`mb-4`};
    }

    span {
      ${tw`inline-block mb-4 italic`}
    }
  }
`;

export default GavelRules;
