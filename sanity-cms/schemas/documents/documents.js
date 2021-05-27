export default {
  name: 'documents',
  title: 'Documents',
  description: 'Phone number with area code',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Document name',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    },
    {
      name: 'documentType',
      title: 'Document type',
      description: 'A tag given to documents to determine what section they go in',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'documentType' } }],
    },
    {
      name: 'file',
      title: 'Document file',
      type: 'file',
    },
  ],
};
