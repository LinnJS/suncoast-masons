import React from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';

const CalendarPage = () => {
  return (
    <Layout>
      <CalendarContainer>
        <p>Calendar goes here</p>
      </CalendarContainer>
    </Layout>
  );
};

const CalendarContainer = styled(Page)``;

export default CalendarPage;
