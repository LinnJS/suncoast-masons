export default {
  name: "documents",
  title: "Documents",
  description: "Phone number with area code",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Document name",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "date",
    },
    {
      name: "type",
      title: "Document type",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "file",
      title: "Document file",
      type: "file",
    },
  ],
};
