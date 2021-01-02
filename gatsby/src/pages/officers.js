import React from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';

const OfficersPage = () => {
  return (
    <Layout>
      <OfficersContainer>
        <p>Officers goes here</p>
      </OfficersContainer>
    </Layout>
  );
};

const OfficersContainer = styled(Page)``;

export default OfficersPage;
