import type { GatsbyNode } from 'gatsby';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
const path = require(`path`);

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query AllToursSlugs {
      allContentfulTour {
        nodes {
          slug
        }
      }
    }
  `);

  data.allContentfulTour.nodes.forEach(({ slug }) => {
    actions.createPage({
      path: `/tours/` + slug,
      component: path.resolve(`./src/templates/tour-details.tsx`),
      context: { slug },
    });
  });
};
