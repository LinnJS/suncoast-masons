/* eslint-disable react/display-name */

import React from 'react';
import { Icon } from 'primitives';

const links = [
  {
    name: 'Home',
    link: '/',
    icon: 'compass',
  },
  {
    name: 'About',
    link: 'about',
    icon: 'gavel',
  },
  {
    name: 'Calendar',
    link: 'calendar',
    icon: 'level',
  },
  {
    name: 'Lodges',
    link: 'lodges',
    icon: 'plumb',
  },
  {
    name: 'Officers',
    link: 'officers',
    icon: 'square',
  },
  {
    name: 'Scholarships',
    link: 'scholarships',
    icon: 'trowel',
  },
];

export const socials = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/suncoastmasons/',
    Icon: (props) => (
      <>
        <Icon {...props} color={'#3b5998'} size={35} name="facebook" />
      </>
    ),
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/suncoastmasons',
    Icon: (props) => (
      <>
        <Icon {...props} color={'#55acee'} size={35} name="twitter" />
      </>
    ),
  },
];

export default links;
