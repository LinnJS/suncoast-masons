// external
import Sanity from "@sanity/desk-tool/structure-builder";

// internal
import article from "./src/structure/article";
import documents from "./src/structure/documents";

// can filter out stuff you don't the users of the CMS to edit
// TODO: need to hide documentType,
const hiddenDocTypes = (listItem) =>
  !["category", "article", "documentType", "documents"].includes(
    listItem.getId()
  );

export default () =>
  Sanity.list()
    .title("Content")
    .items([
      article,
      documents,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...Sanity.documentTypeListItems().filter(hiddenDocTypes),
    ]);
