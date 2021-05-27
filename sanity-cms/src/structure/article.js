import Sanity from '@sanity/desk-tool/structure-builder'
import {
  GoMegaphone as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
  GoPerson as AuthorIcon,
} from "react-icons/go"

import PreviewIFrame from '../components/previewIFrame'

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
}

const blog = Sanity.listItem()
  .title('Articles')
  .icon(BlogIcon)
  .child(
    Sanity.list()
      .title('Articles')
      .items([
        Sanity.listItem()
          .title('Published articles')
          .schemaType('article')
          .icon(BlogIcon)
          .child(
            Sanity.documentList('article')
              .title('Published articles')
              .menuItems(Sanity.documentTypeList('article').getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
              .filter('_type == "article" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child((documentId) =>
                Sanity.document()
                  .documentId(documentId)
                  .schemaType('article')
                  .views([Sanity.view.form(), PreviewIFrame()])
              )
          ),
        Sanity.documentTypeListItem('article').title('All articles').icon(AllIcon),
        Sanity.listItem()
          .title('Articles by category')
          .child(
            // List out all categories
            Sanity.documentTypeList('category')
              .title('Articles by category')
              .child(catId =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                Sanity.documentList()
                  .schemaType('article')
                  .title('Articles')
                  .filter(
                    '_type == "article" && $catId in categories[]._ref'
                  )
                  .params({ catId })
              )
        ),
        Sanity.divider(),
        Sanity.documentTypeListItem('category').title('Categories')
      ])
  )

export default blog
