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
  .title('Posts')
  .icon(BlogIcon)
  .child(
    Sanity.list()
      .title('Posts')
      .items([
        Sanity.listItem()
          .title('Published posts')
          .schemaType('post')
          .icon(BlogIcon)
          .child(
            Sanity.documentList('post')
              .title('Published posts')
              .menuItems(Sanity.documentTypeList('post').getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
              .filter('_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child((documentId) =>
                Sanity.document()
                  .documentId(documentId)
                  .schemaType('post')
                  .views([Sanity.view.form(), PreviewIFrame()])
              )
          ),
        Sanity.documentTypeListItem('post').title('All posts').icon(AllIcon),
        Sanity.listItem()
          .title('Posts by category')
          .child(
            // List out all categories
            Sanity.documentTypeList('category')
              .title('Posts by category')
              .child(catId =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                Sanity.documentList()
                  .schemaType('post')
                  .title('Posts')
                  .filter(
                    '_type == "post" && $catId in categories[]._ref'
                  )
                  .params({ catId })
              )
        ),
        Sanity.divider(),
        Sanity.documentTypeListItem('category').title('Categories')
      ])
  )

export default blog
