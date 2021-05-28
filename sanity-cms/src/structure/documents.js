import Sanity from '@sanity/desk-tool/structure-builder'

import { 
  HiOutlineDocumentDuplicate as DocumentsIcon,
  HiOutlineDocumentSearch as PublishedDocumentsIcon,
  HiOutlineDocumentReport as DocumentTypeIcon,
  HiOutlineArchive as AllDocumentsIcon
  } from "react-icons/hi";

import PreviewIFrame from '../components/previewIFrame'

const documents = Sanity.listItem()
  .title('Documents')
  .icon(DocumentsIcon)
  .child(
    Sanity.list()
      .title('Documents')
      .items([
        Sanity.listItem()
          .title('Published documents')
          .schemaType('documents')
          .icon(PublishedDocumentsIcon)
          .child(
            Sanity.documentList('documents')
              .title('Published documents')
              .menuItems(Sanity.documentTypeList('documents').getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
              .filter('_type == "documents" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child((documentId) =>
                Sanity.document()
                  .documentId(documentId)
                  .schemaType('documents')
                  .views([Sanity.view.form(), PreviewIFrame()])
              )
          ),
        Sanity.documentTypeListItem('documents').title('All documents').icon(AllDocumentsIcon),
        Sanity.listItem()
          .title('Document by type')
          .icon(DocumentsIcon)
          .child(
            // List out all categories
            Sanity.documentTypeList('documentType')
              .title('Document by type')
              .child(catId =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                Sanity.documentList()
                  .schemaType('documents')
                  .title('Documents')
                  .filter(
                    '_type == "documents" && $catId in documentType[]._ref'
                  )
                  .params({ catId })
              )
        ),
        Sanity.divider(),
        Sanity.documentTypeListItem('documentType').title('Document types').icon(DocumentTypeIcon)
      ])
  )

export default documents
