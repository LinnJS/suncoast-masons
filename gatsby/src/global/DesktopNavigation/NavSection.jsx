import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tw from 'twin.macro';
import { Popover, Transition } from '@headlessui/react';

import { Icon, Link } from 'primitives';
import RecentPostSection from './RecentPostSection';

const NavSection = ({ name, sections }) => {
  return (
    <>
      <NavSectionContainer>
        {({ open }) => (
          <>
            <ExpandButton open={open}>
              <span>{name}</span>
              <Icon className="ml-3" size={14} name="chevronDown" />
            </ExpandButton>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel static className="panel">
                <div className="section-group">
                  <section className="nav-section">
                    {sections.map(({ href, name, description }) => (
                      <Link className="nav-link" key={name} to={href}>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">{name}</p>
                          <p className="mt-1 text-sm text-gray-500">{description}</p>
                        </div>
                      </Link>
                    ))}
                  </section>

                  <RecentPostSection />
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </NavSectionContainer>
    </>
  );
};

NavSection.propTypes = {
  name: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      href: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

const NavSectionContainer = styled(Popover)`
  ${tw`relative`};

  .panel {
    ${tw`absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0`};

    .section-group {
      ${tw`overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5`}
    }

    .nav-section {
      ${tw`relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8`};
    }

    .nav-link {
      ${tw`flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50`};
    }
  }
`;

const ExpandButton = styled(Popover.Button)`
  ${tw`inline-flex items-center text-base text-blue-700 bg-white rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:text-blue-700`}

  ${({ open }) => {
    open ? tw`text-blue-900` : tw`text-blue-700`;
  }}
`;

export default NavSection;
