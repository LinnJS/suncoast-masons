// import emailPattern from "../utils/emailPattern";

export default {
  name: 'committee',
  title: 'Committee',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Committee name',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    },
    {
      name: 'committeemen',
      title: 'Committeemen',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'staff' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
