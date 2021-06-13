import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
];

const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
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
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              )}
            >
              <span>More</span>
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
                className="absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
              >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <section className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                    {resources.map((resource) => (
                      <a
                        key={resource.name}
                        href={resource.href}
                        className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">{resource.name}</p>
                          <p className="mt-1 text-sm text-gray-500">{resource.description}</p>
                        </div>
                      </a>
                    ))}
                  </section>

                  <section className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Recent Posts</h3>
                      <ul className="mt-4 space-y-4">
                        {recentPosts.map((post) => (
                          <li key={post.id} className="text-base truncate">
                            <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                              {post.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 text-sm">
                      <a href="/#" className="font-medium">
                        View all posts <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </section>
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
