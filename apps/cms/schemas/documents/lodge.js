import { HiOutlineLibrary as icon } from "react-icons/hi";

// import emailPattern from "../utils/emailPattern";

export default {
  name: "lodge",
  title: "Lodges",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Lodge name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "address",
      title: "Lodge address",
      type: "addressField",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "geoLocation",
      title: "Launchpad Location",
      type: "geopoint",
    },
    {
      name: "postalAddress",
      title: "Postal address",
      type: "addressField",
    },
    {
      name: "phone",
      title: "Phone number",
      type: "phoneField",
    },
    {
      name: "website",
      title: "Website URL",
      type: "urlField",
    },
    {
      name: "email",
      title: "Email",
      type: "emailField",
    },
    {
      name: "statedCommunication",
      title: "Stated communication",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
