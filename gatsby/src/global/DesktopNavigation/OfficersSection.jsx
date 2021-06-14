import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

import { Icon, Link } from 'primitives';
import RecentPostSection from './RecentPostSection';

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

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
const OfficersSection = () => {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-blue-700',
                'group bg-white rounded-md inline-flex items-center text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:text-blue-700',
              )}
            >
              <span>Officers</span>
              <Icon className="ml-3" size={14} name="chevronDown" />
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
                className="absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <section className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                    {officersSections.map(({ href, name, description }) => (
                      <Link key={name} to={href} className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
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
      </Popover>
    </>
  );
};

export default OfficersSection;
