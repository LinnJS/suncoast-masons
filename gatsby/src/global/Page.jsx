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

const PageContainer = styled.main`
  display: flex;
  width: 85%;
  flex-direction: column-reverse;
  background-color: #fff;
  min-height: 90vh;
  padding: 20px;
  align-items: flex-start;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 8px 0;

  section {
    width: 100%;
  }

  @media (${devices.mobileL}) {
    width: 80%;
  }

  @media (${devices.tablet}) {
    width: 80%;
    flex-direction: row;
  }

  @media (${devices.laptop}) {
    width: 80%;
  }
`;

export default Page;
