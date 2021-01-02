import React from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';

const RulesPage = () => {
  return (
    <Layout>
      <RulesContainer>
        <p>Minutes Rules goes here</p>
      </RulesContainer>
    </Layout>
  );
};

const RulesContainer = styled(Page)``;

export default RulesPage;
