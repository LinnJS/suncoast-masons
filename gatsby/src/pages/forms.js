import React from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';

const FormsPage = () => {
  return (
    <Layout>
      <FormsContainer>
        <p>Forms goes here</p>
      </FormsContainer>
    </Layout>
  );
};

const FormsContainer = styled(Page)``;

export default FormsPage;
