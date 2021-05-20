// external imports
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// internal imports
import devices from 'utils/devices';
import SideBar from './SideBar';

const Page = ({ children, className }) => {
  return (
    <PageContainer className={className}>
      <section>{children}</section>
      <SideBar />
    </PageContainer>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
};

const PageContainer = styled.main.attrs({
  className: 'flex container mx-auto min-h-screen	flex-col-reverse flex-1 shadow-2xl bg-white	mb-8 p-6',
})`
  width: 85%;

  section {
    width: 100%;
  }

  @media (${devices.mobileL}) {
    width: 80%;
  }

  @media (${devices.tablet}) {
    flex-direction: row;
  }
`;

export default Page;
