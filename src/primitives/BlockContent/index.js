import React from 'react';
// import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    p: (props) => (
      <p className="bg-red-700" data-language={props.node.language}>
        <span>{props.node.code}</span>
      </p>
    ),
  },
};

const TWBlockContent = (props) => {
  return <BlockContent {...props} serializers={serializers} />;
};

export default TWBlockContent;
