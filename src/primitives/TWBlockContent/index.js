import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    code: ({ node }) => (
      <pre data-language={node.language}>
        <code>{node.code}</code>
      </pre>
    ),
    block: ({ children, node }) => {
      return (
        <p className="my-1 truncate" data-language={node.language}>
          {children}
        </p>
      );
    },
  },
};

const TWBlockContent = (props) => {
  console.log('props: ', props);

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
