// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./fieldSchemas/blockContent";
import addressField from "./fieldSchemas/addressField";
import phoneField from "./fieldSchemas/phoneField";
import emailField from "./fieldSchemas/emailField";
import urlField from "./fieldSchemas/urlField";
import committeemen from "./committee";
import documents from "./documents";
import category from "./category";
import officers from "./officers";
import article from "./article";
import author from "./author";
import bylaws from "./bylaws";
import lodge from "./lodge";
import staff from "./staff";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    article,
    officers,
    committeemen,
    documents,
    staff,
    bylaws,
    author,
    lodge,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    emailField,
    phoneField,
    addressField,
    urlField,
  ]),
});
