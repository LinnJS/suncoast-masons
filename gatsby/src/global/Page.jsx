// external imports
import React from 'react';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// internal imports
import devices from 'utils/devices';
import SideBar from './SideBar';

const Page = ({ children, className }) => {
  return (
    <PageContainer className={className}>
      <div className="w-full mobileL:w-4/5">{children}</div>
      <SideBar />
    </PageContainer>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
};

const PageContainer = styled.main`
  ${tw`container flex flex-col-reverse justify-end flex-1 min-h-screen p-3 mx-auto mb-8 bg-white shadow-xl`}
  width: 85%;

  > div {
    ${tw`w-full`};
  }

  @media (${devices.mobileM}) {
    ${tw`p-6 `};
  }

  @media (${devices.tablet}) {
    ${tw`flex-row `};
  }
`;

export default Page;
