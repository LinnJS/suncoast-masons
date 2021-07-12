import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tw from 'twin.macro';
import { Popover, Transition } from '@headlessui/react';
import { useLocation } from '@reach/router';

import { Icon, Link } from 'primitives';
import RecentPostSection from './RecentPostSection';

const NavSection = ({ name, sections }) => {
  const [scrollPos, setScrollPos] = useState(null);
  // console.log('scrollPos: ', scrollPos);
  const location = useLocation();
  // console.log('location: ', location);

  const { state, pathname } = location;

  useEffect(() => {
    if (!state || !document || !window) return;

    const element = document.querySelector(state.section);
    const headerOffset = 90;
    if (!element) return;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;
    setScrollPos(offsetPosition);
  }, [setScrollPos, state]);

  const scrollToSection = (section) => {
    console.log('section: ', section);

    const element = document.querySelector(section);
    const headerOffset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth', block: 'start' });
  };

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
                    {sections.map(({ href, name, description, section }) => {
                      const isPageSame = pathname.includes(href) && pathname !== '/';

                      if (isPageSame)
                        return (
                          <button
                            className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                            key={name}
                            onClick={() => scrollToSection(section)}
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{name}</p>
                              <p className="mt-1 text-sm text-gray-500">{description}</p>
                            </div>
                          </button>
                        );

                      return (
                        <Link
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                          key={name}
                          to={href}
                          state={{ section }}
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">{name}</p>
                            <p className="mt-1 text-sm text-gray-500">{description}</p>
                          </div>
                        </Link>
                      );
                    })}
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
  }
`;

const ExpandButton = styled(Popover.Button)`
  ${tw`inline-flex items-center text-base text-blue-700 bg-white rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:text-blue-700`}

  ${({ open }) => {
    open ? tw`text-blue-900` : tw`text-blue-700`;
  }}
`;

export default NavSection;
