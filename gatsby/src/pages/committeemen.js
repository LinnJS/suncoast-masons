import React from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';

const CommitteemenPage = () => {
  return (
    <Layout>
      <CommitteemenContainer>
        <p>Committeemen goes here</p>
      </CommitteemenContainer>
    </Layout>
  );
};

const CommitteemenContainer = styled(Page)``;

export default CommitteemenPage;
