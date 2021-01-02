import React from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';

const LecturersPage = () => {
  return (
    <Layout>
      <LecturersContainer>
        <p>Lecturers goes here</p>
      </LecturersContainer>
    </Layout>
  );
};

const LecturersContainer = styled(Page)``;

export default LecturersPage;
