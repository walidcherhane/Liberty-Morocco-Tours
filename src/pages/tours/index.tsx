import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewsLetter from '../../components/NewsLetter';
import Categories from '../../components/Categories';
import MediumTourCard from '../../components/TourCard/MediumTourCard';
import TourCard from '../../components/TourCard/BasicTourCard';
import WideTourCard from '../../components/TourCard/WideTourCard';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { ToursQuery } from '@/types';

function ToursList({ data }: PageProps<ToursQuery.AllToursQuery>) {
  const tours = data.allContentfulTour.edges;
  return (
    <>
      <Header />
      <div className="relative bg-sky-800/30 font-poppins h-[360px]">
        <img
          src="/images/backgrounds/2.jpg"
          className="absolute inset-0 -z-10 object-cover w-full h-full object-center"
          alt=""
        />
        <div className="container mx-auto p-8 h-full flex items-center justify-center ">
          <div className="text-4xl lg:text-5xl font-bold text-center text-white">
            ALL TOURS LIST
          </div>
        </div>
      </div>
      <div className="container mx-auto m-10 relative">
        <div className="xl:grid flex flex-col px-8 grid-cols-1 xl:grid-cols-3 gap-8  xl:mx-20 ">
          {tours?.map(
            (tour, index) =>
              index < 3 && <TourCard tour={tour.node} key={index} />,
          )}

          {tours?.map(
            (tour, index) =>
              index === 3 && <WideTourCard tour={tour.node} key={index} />,
          )}

          <div className="col-span-2 col-start-2 grid grid-cols-2 gap-8 ">
            {tours?.map(
              (tour, index) =>
                index > 3 && <MediumTourCard tour={tour.node} key={index} />,
            )}
          </div>
          <div className="mt-8 col-span-full w-full flex justify-center font-poppins">
            <button className="bg-gray-800 rounded-lg text-white font-semibold py-3 px-6">
              Load More
            </button>
          </div>
          <aside className="row-start-2 row-end-4 bg-gray-100 p-8 h-full rounded-2xl  ">
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
  query AllTours {
    allContentfulTour {
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
