export default {
  name: "addressField",
  title: "Address",
  type: "object",
  fields: [
    {
      name: "street1",
      title: "Street line 1",
      type: "string",
      validation: (Rule) => Rule.required().error("Street is a required field"),
    },
    {
      name: "street2",
      title: "Street line 2",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required().error("City is a required field"),
    },
    {
      name: "state",
      title: "State",
      type: "string",
      validation: (Rule) => [
        Rule.required().error("Zip code is a required field"),
        Rule.regex(
          /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/,
          { name: "State" }
        ).error("Must match xx pattern, ie. FL"),
      ],
    },
    {
      name: "zipCode",
      title: "Zip Code",
      type: "string",
      validation: (Rule) => [
        Rule.required().error("Zip code is a required field"),
        Rule.regex(/^[0-9]{5}(?:-[0-9]{4})?$/, { name: "zip code" }).error(
          "Must match xxxxx or xxxxx-xxxx format"
        ),
      ],
    },
  ],
};
