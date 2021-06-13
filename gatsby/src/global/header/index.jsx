/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Popover } from '@headlessui/react';

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
                <AboutSection />

                <OfficersSection />
              </Popover.Group>
            </div>
          </header>
        </>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Popover)`
  ${tw`relative z-10 bg-white`};

  header {
    ${tw`px-6 mx-auto max-w-7xl`};

    .group-wrapper {
      ${tw`flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10`};

      & > nav {
        ${tw`flex space-x-10`};
      }
    }
  }
`;

export default TailwindHeader;
