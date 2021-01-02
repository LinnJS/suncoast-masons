export default {
  name: "bylaws",
  title: "By Laws",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "date",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
