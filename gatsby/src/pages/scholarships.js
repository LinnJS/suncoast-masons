import React from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';

const ScholarshipsPage = () => {
  return (
    <Layout>
      <ScholarshipsContainer>
        <p>Scholarships goes here</p>
      </ScholarshipsContainer>
    </Layout>
  );
};

const ScholarshipsContainer = styled(Page)``;

export default ScholarshipsPage;
