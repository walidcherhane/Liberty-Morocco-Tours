import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewsLetter from '../../components/NewsLetter';
import Categories from '../../components/Categories';
import MediumTourCard from '../../components/TourCard/MediumTourCard';
import TourCard from '../../components/TourCard/BasicTourCard';
import WideTourCard from '../../components/TourCard/WideTourCard';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { TourProps } from '@/types';

type DataProps = {
  allContentfulTour: {
    nodes: TourProps[];
  };
};

function ToursList({ data }: PageProps<DataProps>) {
  const tours = data.allContentfulTour.nodes;
  return (
    <>
      <Header />
      <div className="relative bg-sky-800/30 font-poppins h-[360px]">
        <img
          src="../../images/backgrounds/landscape/1.jpg"
          className="absolute inset-0 -z-10 object-cover w-full h-full object-center"
          alt=""
        />
        <div className="container mx-auto p-8 h-full flex items-center justify-center ">
          <div className="text-4xl lg:text-5xl font-bold text-center text-white">
            TOUR STANDARD LIST
          </div>
        </div>
      </div>
      <div className="container mx-auto m-10 relative">
        <div className="xl:grid flex flex-col px-8 grid-cols-1 xl:grid-cols-3 gap-8  xl:mx-20 ">
          {tours?.map(
            (tour, index) => index < 3 && <TourCard tour={tour} key={index} />,
          )}

          {tours?.map(
            (tour, index) =>
              index === 3 && <WideTourCard tour={tour} key={index} />,
          )}

          <div className="col-span-2 col-start-2 grid grid-cols-2 gap-8 ">
            {tours?.map(
              (tour, index) =>
                index > 3 && <MediumTourCard tour={tour} key={index} />,
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
      nodes {
        slug
        id
        title
        description {
          raw
        }
        price
        previousPrice
        rating
        cities
        languages
        tags
        duration
        categories
        comments {
          author {
            name
          }
          comment {
            raw
          }
        }
      }
    }
  }
`;

export default ToursList;
