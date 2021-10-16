import React from 'react';
import PropTypes from 'prop-types';
import { BlockContent as SanityBlockContent } from '@sanity/block-content-to-react';

const input = [
  {
    _type: 'block',
    children: [
      {
        _key: 'a1ph4',
        _type: 'span',
        marks: ['s0m3k3y'],
        text: 'Sanity',
      },
    ],
    markDefs: [
      {
        _key: 's0m3k3y',
        _type: 'highlight',
        color: '#E4FC5B',
      },
    ],
  },
];

const BlockRenderer = (props) => {
  const { children } = props;
  const { style = 'normal' } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '');
    return React.createElement(style, { className: `heading-${level}` }, children);
  }

  if (style === 'blockquote') {
    return <blockquote>{children}</blockquote>;
  }

  // Fall back to default handling
  return SanityBlockContent.defaultSerializers.types.block(props);
};

const BlockContent = (props) => {
  return <BlockContent {...props} blocks={input} serializers={{ types: { block: BlockRenderer } }} />;
};

BlockRenderer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  node: PropTypes.any,
};

export default BlockContent;
