// external
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Popover } from '@headlessui/react';

// internal
import devices from 'utils/devices';
import { Link } from 'primitives';
import NavSection from './NavSection';

const aboutSections = [
  {
    name: 'About Suncoast Master Masons',
    description: 'Learn about Suncoast Master Masons Association of the 18th district',
    href: 'about',
  },
  {
    name: 'Forms',
    description: 'Suncoast Master Masons related forms like two minute drill and application for membership',
    href: 'about',
  },
  {
    name: 'By laws',
    description: 'Last published by laws',
    href: 'about',
  },
  {
    name: 'Gavel Rules',
    description: "Connect with third-party tools that you're already using.",
    href: 'about',
  },
];

const officersSections = [
  {
    name: 'DDGM / DI',
    description: 'District Deputy Grand Master / District Instructor',
    href: 'officers',
  },
  {
    name: 'Officers',
    description: 'Officers of Suncoast Master Masons Association',
    href: 'officers',
  },
  {
    name: 'Committeemen',
    description: 'Committeemen of Suncoast Master Masons Association',
    href: 'officers',
  },
  { name: 'Lecturers', description: 'Lecturers of the 18th Masonic District', href: 'officers' },
];

const TailwindHeader = () => {
  return (
    <HeaderContainer>
      {() => (
        <div className="group-wrapper">
          <div className="group">
            <Popover.Group as="nav">
              <Link to="/">Home</Link>

              <NavSection name="About" sections={aboutSections} />

              <Link to="calendar">Calendar</Link>

              <Link to="lodges">Lodges</Link>

              <NavSection name="Officers" sections={officersSections} />

              <Link to="scholarships">Scholarships</Link>
            </Popover.Group>
          </div>
        </div>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Popover)`
  ${tw`fixed z-10 items-center justify-center hidden w-full h-20 bg-white `};

  .group-wrapper {
    ${tw`flex items-center justify-center px-6`};
    width: 85%;

    .group {
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
