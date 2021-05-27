export default {
  name: 'officers',
  title: 'Officers',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    },
    {
      name: 'officers',
      title: 'Officers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'staff' }] }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
