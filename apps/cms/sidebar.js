import React from "react";
import Sanity from "@sanity/desk-tool/structure-builder";

// build a custom sidebar
export default function Sidebar() {
  return Sanity.list()
    .title(`Suncoast Master Masons`)
    .items([
      // create new sub item
      Sanity.listItem().title("Officers").child(
        Sanity.editor()
          .schemaType("officers")
          // make a new document ID, so we don't have a random string of numbers
          .documentId("officers")
      ),
      // add in the rest of our document items
      ...Sanity.documentTypeListItems().filter(
        (item) => item.getId() !== "officers"
      ),
    ]);
}
