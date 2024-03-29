import { graphql, Link, useStaticQuery } from 'gatsby';

function Categories() {
  const data = useStaticQuery(graphql`
    query AllToursCategories {
      allContentfulTour {
        nodes {
          categories
        }
      }
    }
  `);
  const nodes: {
    categories: string[];
  }[] = data.allContentfulTour.nodes;
  const allToursCategories = nodes.map((node) => node.categories);
  const allCategories = new Set(allToursCategories.flat());
  const categories = Array.from(allCategories).map((category) => {
    return {
      category,
      count: allToursCategories.filter((cats) => cats.includes(category))
        .length,
    };
  });
  const sortedCategories = categories.sort((a, b) => b.count - a.count);

  return (
    <div className="mt-8 font-poppins">
      <h1 className="text-xl text-gray-600 font-semibold">All Categories:</h1>
      <ul className="mt-7">
        {sortedCategories.map(({ category, count }, i) => (
          <Link
            to={`/tours/categories/${category.toLocaleLowerCase()}`}
            key={i}
            className="my-4 capitalize w-full flex font-semibold text-gray-600"
          >
            <>
              {i + 1}. {category}:
              <span className="text-gray-400 ml-auto font-light">{count}</span>
            </>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
