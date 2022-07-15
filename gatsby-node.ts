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
type GraphQLResult = {
  allContentfulTour: {
    nodes: {
      slug: string;
      categories: string[];
      cities: string[];
    }[];
  };
};
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const QueryResult = await graphql<GraphQLResult>(`
    {
      allContentfulTour {
        nodes {
          slug
          categories
          cities
        }
      }
    }
  `);
  if (QueryResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful tours`,
      QueryResult.errors,
    );
    return;
  }

  if (!QueryResult.data) {
    throw new Error(`Failed to get posts.`);
  }

  const nodes = QueryResult.data.allContentfulTour.nodes;
  const allToursCategories = nodes?.map(({ categories }) =>
    categories.map((category) => category.toLowerCase()),
  );
  const allCategories = [...new Set(allToursCategories)].flat(999);

  const allToursCities = nodes?.map(({ cities }) =>
    cities.map((city) => city.toLowerCase()),
  );
  const allCities = [...new Set(allToursCities)].flat(999);

  allCities.forEach((city) => {
    actions.createPage({
      path: `/tours/cities/${city}`,
      component: path.resolve(`./src/templates/tours_by_city.tsx`),
      context: { city },
    });
  });
  allCategories.forEach((category) => {
    actions.createPage({
      path: `/tours/categories/${category}`,
      component: path.resolve(`./src/templates/tours_by_categorie.tsx`),
      context: { category },
    });
  });

  nodes?.forEach(({ slug }) => {
    actions.createPage({
      path: `/tours/${slug}`,
      component: path.resolve(`./src/templates/tour-details.tsx`),
      context: { slug },
    });
  });
};
