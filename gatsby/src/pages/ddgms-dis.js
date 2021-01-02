import React from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';

const MastersPage = () => {
  return (
    <Layout>
      <MasterContainer>
        <p>DDGMS / DIS goes here</p>
      </MasterContainer>
    </Layout>
  );
};

const MasterContainer = styled(Page)``;

export default MastersPage;
