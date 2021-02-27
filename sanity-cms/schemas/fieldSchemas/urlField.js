export default {
  name: 'urlField',
  title: 'URL',
  type: 'string',
  validation: (Rule) => [
    Rule.regex(
      /https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/,
      {
        name: 'HTTPS URL',
      },
    ).warning('Please update to HTTPS instead of HTTP to increase security and keep traffic encrypted'),
    Rule.regex(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/,
      {
        name: 'URL',
      },
    ).error('Must be a valid URL'),
  ],
};
