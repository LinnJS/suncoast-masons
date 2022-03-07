export default {
  name: "phoneField",
  title: "Phone number",
  description: "Phone number with area code",
  type: "string",
  validation: (Rule) => [
    Rule.regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
      name: "Phone number",
    }).error("Must be a valid phone number in (xxx) xxx-xxxx format"),
  ],
};
