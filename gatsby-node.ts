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

// export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
//   ({ actions }) => {
//     actions.createTypes(`
//     type allContentfulTour {
//       nodes: Tour!
//     }

//     type Tour {
//        slug: string
//         id: ID
//         title: string
//         price: number
//         previousPrice: number
//         rating: number
//         cities: [String]
//         languages: [String]
//         tags: [String]
//         categories: [String]
//         duration: number
//         description: {raw: string}
//         image: {
//             publicUrl: string
//             gatsbyImageData: Record<string, unknown>
//       }
//         images: Array<{
//           publicUrl: string
//           id: string
//           gatsbyImageData: Record<string, unknown>
//       }>
//         comments: Array<{
//           id: string
//           rating: number
//           comment: {  raw: string }
//           author: {
//             name: string
//             avatar: {
//               publicUrl: string
//               gatsbyImageData: Record<string, unknown>
//           }
//         }
//       }>
//     }
//   `);
//   };
