/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// external imports
const React = require('react');

// internal imports
const Layout = require('./src/global/Layout.jsx').default;

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>;
};
