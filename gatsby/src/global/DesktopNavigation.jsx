// external imports
import React from 'react';
import tw, { styled } from 'twin.macro';

// internal imports
import devices from 'utils/devices';
import { Link } from 'primitives';
import links from '../../content/navLinks';

const DesktopNavigation = () => {
  return (
    <DesktopNav>
      <ul>
        {links.map((link, idx) => (
          <li key={`link-${idx}`}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </DesktopNav>
  );
};

const DesktopNav = styled.nav`
  ${tw`fixed z-0 items-center justify-center hidden w-full h-20 bg-white`}

  ul {
    ${tw`flex flex-row flex-wrap justify-center`}

    li {
      ${tw`list-none m-2.5`}
    }
  }

  a {
    ${tw` m-2.5 no-underline`}

    &:hover {
      ${tw`underline`}
    }
  }

  @media (${devices.laptop}) {
    ${tw`flex`}
  }
`;

export default DesktopNavigation;
