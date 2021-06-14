// external
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Popover } from '@headlessui/react';

// internal
import devices from 'utils/devices';
import { Link } from 'primitives';
import AboutSection from './AboutSection';
import OfficersSection from './OfficersSection';

const TailwindHeader = () => {
  return (
    <HeaderContainer>
      {() => (
        <>
          <header>
            <div className="group-wrapper">
              <Popover.Group as="nav">
                <Link to="/">Home</Link>

                <AboutSection />

                <Link to="calendar">Calendar</Link>

                <Link to="lodges">Lodges</Link>

                <OfficersSection />

                <Link to="scholarships">Scholarships</Link>
              </Popover.Group>
            </div>
          </header>
        </>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Popover)`
  ${tw`fixed z-10 items-center justify-center hidden w-full h-20 bg-white `};

  header {
    ${tw`flex items-center justify-center px-6`};
    width: 85%;

    .group-wrapper {
      ${tw`py-6 space-x-10 border-b-2 border-gray-100`}
      width: 85%;

      & > nav {
        ${tw`flex items-center justify-center space-x-10`};
      }
    }
  }

  @media (${devices.laptop}) {
    ${tw`flex`}
  }
`;

export default TailwindHeader;
