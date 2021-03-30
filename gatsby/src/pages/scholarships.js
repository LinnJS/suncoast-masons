import React, { useMemo } from 'react';
import styled from 'styled-components';

import Page from 'global/Page';
import Layout from 'global/Layout';
import PastRecipientsTable from '../components/scholarships/PastRecipientsTable';
import PastRecipientsData from '../../content/scholarships-recipients';

const ScholarshipsPage = () => {
  const { columns, data } = PastRecipientsData;
  const tableColumns = useMemo(() => columns, []);
  const tableData = useMemo(() => data, []);

  return (
    <Layout>
      <ScholarshipsContainer>
        <p>Scholarships goes here</p>

        <PastRecipientsTable columns={tableColumns} data={tableData} />
      </ScholarshipsContainer>
    </Layout>
  );
};

const ScholarshipsContainer = styled(Page)``;

export default ScholarshipsPage;
