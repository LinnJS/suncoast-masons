import Sanity from "@sanity/desk-tool/structure-builder";
import PreviewIFrame from "../../src/components/PreviewIFrame";

import { MdMenu } from "react-icons/md";

export default Sanity.listItem()
  .title("Page Builder")
  .child(
    Sanity.list()
      .title("Landing Pages")
      .items([
        Sanity.listItem()
          .title("Navigation Menus")
          .icon(MdMenu)
          .schemaType("navigationMenu")
          .child(
            Sanity.documentTypeList("navigationMenu").title("Navigation Menus")
          ),
        Sanity.listItem()
          .title("Routes")
          .schemaType("route")
          .child(
            Sanity.documentTypeList("route")
              .title("Routes")
              .child((documentId) =>
                Sanity.document()
                  .documentId(documentId)
                  .schemaType("route")
                  .views([Sanity.view.form(), PreviewIFrame()])
              )
          ),
        Sanity.listItem()
          .title("Pages")
          .schemaType("page")
          .child(
            Sanity.documentList("page")
              .title("Pages")
              .menuItems(Sanity.documentTypeList("page").getMenuItems())
              .filter('_type == "page" && _id != "frontpage"')
          ),
      ])
  );
