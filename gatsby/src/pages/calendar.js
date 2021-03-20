import React from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';

const CalendarPage = () => {
  return (
    <Layout>
      <CalendarContainer>
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
      </CalendarContainer>
    </Layout>
  );
};

const CalendarContainer = styled(Page)`
  & > a {
    margin: 20px 0;
  }
`;

export default CalendarPage;
