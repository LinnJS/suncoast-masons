import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

import Page from 'global/Page';

const CalendarPage = () => {
  return (
    <CalendarContainer>
      <section>
        <h2>Calendar</h2>

        <a href="https://www.localendar.com/public/MastersAndWardens" target="_blank" rel="noopener noreferrer">
          Click Here for the Suncoast Master Mason Association Calendar.
        </a>

        <p>
          To get your events on the calendar email{' '}
          <a href="mailto:events@suncoastmasons.org" target="_blank" rel="noopener noreferrer">
            events@suncoastmasons.org
          </a>
        </p>
      </section>
    </CalendarContainer>
  );
};

const CalendarContainer = styled(Page)`
  section {
    ${tw`flex-1 `}

    & > a {
      ${tw`w-full my-5 `};
    }
  }
`;

export default CalendarPage;
