export default {
  name: 'emailField',
  title: 'Email',
  type: 'string',
  validation: (Rule) => [
    Rule.required().error('Email is a required field'),
    Rule.min(6).error('Email must be at least 6 characters long'),
    Rule.max(254).error('Email must be at shorter 254 characters long'),
    Rule.regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, { name: 'Email' }).error('Must be in xxxx@domain.xxx format'),
  ],
};
