import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

const about = [
  {
    name: 'About Suncoast Master Masons',
    description: 'Learn about Suncoast Master Masons Association of the 18th district',
    href: '/about',
  },
  {
    name: 'Forms',
    description: 'Suncoast Master Masons related forms like two minute drill and application for membership',
    href: '/about',
  },
  {
    name: 'By laws',
    description: 'Last published by laws',
    href: '/about',
  },
  {
    name: 'Gavel Rules',
    description: "Connect with third-party tools that you're already using.",
    href: '/about',
  },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const AboutSection = () => {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              )}
            >
              <span>About</span>
              {/* TODO: add chevron down */}
            </Popover.Button>

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
              <Popover.Panel
                static
                className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                    {about.map((solution) => (
                      <a
                        key={solution.name}
                        href={solution.href}
                        className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">{solution.name}</p>
                          <p className="mt-1 text-sm text-gray-500">{solution.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default AboutSection;
