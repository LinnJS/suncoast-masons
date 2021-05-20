// external imports
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

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

const PageContainer = styled.main`
  ${tw`container flex flex-col-reverse justify-end flex-1 min-h-screen p-6 mx-auto mb-8 bg-white shadow-xl`}
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
