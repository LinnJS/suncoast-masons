import { HiOutlineUserGroup as icon } from 'react-icons/hi';

export default {
  name: 'officers',
  title: 'Officers',
  type: 'document',
  icon,
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
      name: 'districtDeputy',
      title: 'District Deputies',
      description: 'DDGM / DI',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'staff' }] }],
    },
    {
      name: 'officers',
      title: 'Officers',
      description: 'Suncoast Master Masons of the 18th district officers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'staff' }] }],
    },
    {
      name: 'committeemen',
      title: 'Committeemen',
      description: 'Suncoast Master Masons of the 18th district Committeemen',
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
