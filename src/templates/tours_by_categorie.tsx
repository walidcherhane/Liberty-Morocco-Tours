import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NewsLetter from '@/components/NewsLetter';
import Categories from '@/components/Categories';
import TourCard from '@/components/TourCard/BasicTourCard';
import { graphql, PageProps } from 'gatsby';
import { ToursQuery } from '@/types';
import { GatsbyImage } from 'gatsby-plugin-image';

function ToursList({ data, pageContext }: PageProps<ToursQuery.AllToursQuery>) {
  const tours = data.allContentfulTour.edges;
  return (
    <>
      <Header />
      <div className="relative bg-sky-800/30 font-poppins h-[360px]">
        <GatsbyImage
          image={
            tours[Math.floor(Math.random() * tours.length)]?.node.image
              ?.gatsbyImageData
          }
          className="absolute inset-0 -z-10 object-cover w-full h-full object-center"
          alt=""
        />
        <div className="container mx-auto p-8 h-full flex items-center justify-center ">
          <div className="text-4xl lg:text-5xl uppercase font-bold text-center text-white">
            {/* @ts-ignore */}
            ALL <span className="text-blue-500">{pageContext.category}</span>
            {` `} TOURS
          </div>
        </div>
      </div>
      <div className="container mx-auto m-10 relative">
        <div className="xl:grid flex flex-col px-8 grid-cols-1 xl:grid-cols-3 gap-8   ">
          {tours?.map((tour, index) => (
            <TourCard tour={tour.node} key={index} />
          ))}
          <aside className="row-start-1 row-end-4 bg-gray-100 p-8 h-full rounded-2xl  ">
            <NewsLetter />
            <Categories />
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}
export const query = graphql`
  query ToursByCategory($category: [String]!) {
    allContentfulTour(filter: { categories: { in: $category } }) {
      edges {
        node {
          categories
          cities
          id
          slug
          tags
          title
          description {
            raw
          }
          image {
            publicUrl
            gatsbyImageData
          }
        }
      }
    }
  }
`;
export default ToursList;
