import { BsClock, BsStar } from 'react-icons/bs';
import { MdOutlineTour } from 'react-icons/md';
import BgGlassmorphism from './BgGlassmorphism';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

import Title from './Title';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { ToursQuery } from '@/types';
function BestLocations() {
  const data = useStaticQuery<ToursQuery.TourItemQuery>(graphql`
    {
      allContentfulTour {
        edges {
          node {
            cities
            duration
            id
            price
            rating
            slug
            categories
            description {
              raw
            }
            previousPrice
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
  const tours = Tours.slice(0, 3);
  return (
    <>
      <section className="mt-18 relative min-h-[553px] w-full  p-8 py-18 container mx-auto rounded-t-2xl  ">
        <div className="absolute inset-0 -z-10 bg-gray-50 ">
          <BgGlassmorphism />
        </div>
        <div className="text-left w-full font-poppins p-1 md:text-center md">
          <Title
            title="Tours chosen for you"
            description="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
          />
        </div>
        <div className="overflow-hidden grid justify-items-center gap-8 sm:grid-cols-2   xl:grid-cols-3 mt-8">
          {tours.map(({ node }, index) => {
            const plainTextDescription = documentToPlainTextString(
              JSON.parse(node.description.raw),
            );
            return (
              <Link to={`/tours/${node.slug}`} key={node.id}>
                <div
                  data-wow-delay={`${index * 0.2}s`}
                  data-wow-duration="2s"
                  className="wow animate__fadeInUp group relative mx-auto  flex w-3/4 cursor-pointer flex-col  overflow-hidden    font-poppins transition duration-500  sm:w-[320px]   "
                >
                  <img
                    height={170}
                    width={170}
                    className="h-[170px] bg-gray-300 w-full object-cover object-center "
                    src={node.image.publicUrl}
                    alt="blog"
                  />
                  <div className="inset-x-0 bottom-0 z-10 flex  grow flex-col items-center gap-y-1 bg-white">
                    <div className=" p-4 px-8 ">
                      <div className="self-start text-sm  text-gray-900  ">
                        From
                        <div className=" ml-2  text-2xl font-semibold text-blue-400">
                          {node.price}
                          <sup className="ml-1 text-sm font-normal ">$</sup>
                        </div>
                      </div>
                      <div className="text-center text-lg capitalize font-semibold text-gray-800">
                        {node.cities[0]}
                      </div>
                      <div className=" text-center text-xs font-light">
                        {plainTextDescription.substring(0, 100)}...
                      </div>
                    </div>
                    <div className=" flex w-full items-center justify-around gap-4 bg-blue-50 p-4 ">
                      <div className=" flex items-center justify-center gap-2 text-xs text-blue-500">
                        <MdOutlineTour />
                        <span className="text-gray-600">
                          {node.categories[0]}
                        </span>
                      </div>
                      <div className=" flex items-center justify-center gap-2 text-xs text-blue-500">
                        <BsClock />
                        <span className="text-gray-600">
                          {`${node.duration} day${
                            node.duration > 1 ? `s` : ``
                          }`}
                        </span>
                      </div>
                      <div className=" flex items-center justify-center gap-2 text-xs text-blue-500">
                        <BsStar />
                        <span className="text-gray-600">{node.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default BestLocations;
