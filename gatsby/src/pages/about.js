import React from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <AboutContainer>
        <p>About goes here</p>
      </AboutContainer>
    </Layout>
  );
};

const AboutContainer = styled(Page)``;

export default AboutPage;
