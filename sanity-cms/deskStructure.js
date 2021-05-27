// external
import Sanity from '@sanity/desk-tool/structure-builder'
import { MdMenu } from 'react-icons/md'
import { GoBrowser as PageIcon, GoHome, GoSettings } from 'react-icons/go'

// internal
import blog from './src/structure/article'
import PreviewIFrame from './src/components/previewIFrame'

// can filter out stuff you don't the users of the CMS to edit
// TODO: need to hide documentType, 
const hiddenDocTypes = listItem =>
  !['category', 'article'].includes(
    listItem.getId()
  )

export default () =>
  Sanity.list()
    .title('Content')
    .items([
      blog,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...Sanity.documentTypeListItems().filter(hiddenDocTypes)
    ])
