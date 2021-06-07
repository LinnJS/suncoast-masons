// import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// documents
import documents from './documents/documents';
import officers from './documents/officers';
import article from './documents/article';
import lodge from './documents/lodge';
import staff from './documents/staff';

// objects
import documentType from './documents/documentType';
import addressField from './objects/addressField';
import blockContent from './objects/blockContent';
import phoneField from './objects/phoneField';
import emailField from './objects/emailField';
import category from './documents/category';
import mainImage from './objects/mainImage';
import urlField from './objects/urlField';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    article,
    officers,
    documents,
    staff,
    lodge,
    category,
    mainImage,
    documentType,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    emailField,
    phoneField,
    addressField,
    urlField,
  ]),
});
