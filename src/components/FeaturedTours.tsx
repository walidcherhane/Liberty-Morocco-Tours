import { ToursQuery } from '@/types';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import HorizontalCard from './TourCard/HorizontalCard';

function FeaturedTours() {
  const data = useStaticQuery<ToursQuery.TourItemQuery>(graphql`
    {
      allContentfulTour {
        edges {
          node {
            title
            duration
            price
            slug
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
  `);
  const [Tours] = React.useState(data.allContentfulTour.edges);
  const tours = Tours.slice(0, 4);

  return (
    <>
      <div className="mt-18  container mx-auto">
        <div className="rounded-2xl bg-gray-50/40 p-10 py-16">
          <div className="w-full text-center font-poppins md:text-left">
            <h1 className="mb-5 text-4xl font-semibold text-gray-800">
              Go somewhere
            </h1>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Quaerat, quisquam.
            </p>
          </div>
          <div className="mt-10 grid justify-items-center gap-8 lg:grid-cols-2  xl:grid-cols-2   ">
            {tours.map(({ node }, index) => (
              <HorizontalCard tour={node} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedTours;
