// import emailPattern from "../utils/emailPattern";

export default {
  name: "staff",
  title: "Staff",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      description: "Title or job of committee member",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "emailField",
    },
    {
      name: "phone",
      title: "Phone",
      description: "Phone number with area code",
      type: "phoneField",
    },
    {
      name: "lectures",
      title: "Lectures",
      description: "Comma separated list of qualified lectures ",
      type: "string",
    },
    {
      name: "headshot",
      title: "Head shot ",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      image: "headshot",
    },
  },
};
