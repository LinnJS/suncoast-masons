/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// external imports
const path = require('path');

// enables absolute imports
export const onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};``

const articlesToPages = async ({ graphql, actions }) => {
  const articleTemplate = path.resolve('src/templates/ArticleTemplate.jsx');

  const { data } = await graphql(`
    query ArticlesToPagesQuery {
      articles: allSanityArticle {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  data.articles.nodes.forEach(({ slug }) => {
    actions.createPage({
      path: `article/${slug.current}`,
      component: articleTemplate,
      context: {
        slug: slug.current,
      },
    });
  });
};

export const createPages = async (params) => {
  // Create pages dynamically
  await Promise.all([articlesToPages(params)]);
};
