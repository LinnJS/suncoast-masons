import React from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';

const LodgesPage = () => {
  return (
    <Layout>
      <LodgesContainer>
        <p>Loges goes here</p>
      </LodgesContainer>
    </Layout>
  );
};

const LodgesContainer = styled(Page)``;

export default LodgesPage;
