import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    block: (props) => (
      <p
        style={{ overflowWrap: 'break-word' }}
        className="flex flex-wrap overflow-ellipsis "
        data-language={props.node.language}
      >
        {props.children}
      </p>
    ),
  },
};

const TWBlockContent = (props) => {
  return (
    <BlockContent
      {...props}
      dataset={process.env.GATSBY_SANITY_DATASET}
      projectId={process.env.GATSBY_SANITY_PROJECT_ID}
      serializers={serializers}
    />
  );
};

export default TWBlockContent;
