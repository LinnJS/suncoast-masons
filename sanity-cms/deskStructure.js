// external
import S from '@sanity/desk-tool/structure-builder'
import { MdMenu } from 'react-icons/md'
import { GoBrowser as PageIcon, GoHome, GoSettings } from 'react-icons/go'

// internal
import blog from './src/structure/blog'
import PreviewIFrame from './src/components/previewIFrame'

// can filter out stuff you don't the users of the CMS to edit
// const hiddenDocTypes = listItem =>
//   !['route', 'navigationMenu', 'post', 'page', 'siteSettings', 'author', 'category'].includes(
//     listItem.getId()
//   )

export default () =>
  S.list()
    .title('Content')
    .items([
      blog,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems()
    ])
