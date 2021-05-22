// external imports
import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

// internal imports
import devices from 'utils/devices';
import SideBar from './SideBar';

const Page = ({ children, className }) => {
  return (
    <PageContainer className={className}>
      <section className="w-full mobileL:w-4/5">{children}</section>
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
    ${tw`w-full`}
  }

  @media (${devices.tablet}) {
    ${tw`flex-row`}
  }
`;

export default Page;
