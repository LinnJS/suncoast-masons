import React from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';

const LandingPage = () => (
  <Layout>
    <HomeContainer>
      <p>hello world</p>
    </HomeContainer>
  </Layout>
);

const HomeContainer = styled(Page)``;

export default LandingPage;
