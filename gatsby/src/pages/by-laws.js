import React from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';

const ByLawsPage = () => {
  return (
    <Layout>
      <ByLawsContainer>
        <p>By Laws go here</p>
      </ByLawsContainer>
    </Layout>
  );
};

const ByLawsContainer = styled(Page)``;

export default ByLawsPage;
