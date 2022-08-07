import Title from './Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import useScroll from '../hooks/useWindowSize';
import { graphql, useStaticQuery } from 'gatsby';
import { ToursQuery } from '@/types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function Distinations() {
  const scroll = useScroll();
  const data = useStaticQuery<ToursQuery.TourItemQuery>(graphql`
    {
      allContentfulTour {
        edges {
          node {
            cities
            id
            image {
              publicUrl
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const distinations = data.allContentfulTour.edges;
  return (
    <>
      <section className="  text-gray-600 mt-20">
        <div className="container mx-auto px-5 ">
          <div className="mb-8 text-center font-poppins">
            <Title
              title="Let’s go on an adventure"
              description="Find and book a great experience."
            />
            <div className="mt-6 flex justify-center">
              <div className="inline-flex h-1 w-16 rounded-full bg-indigo-500"></div>
            </div>
          </div>
          <Swiper
            spaceBetween={
              scroll.width > 768 ? (scroll.width > 1024 ? 30 : 20) : 10
            }
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            slidesPerView={
              scroll.width > 768
                ? scroll.width > 1024
                  ? scroll.width >= 1280
                    ? 5
                    : 4
                  : 3
                : scroll.width > 640
                ? 2
                : 1
            }
          >
            {distinations.map(({ node }) => {
              const OptImage = getImage(node.image.gatsbyImageData);
              return (
                <SwiperSlide key={node.id}>
                  <div className="relative mx-auto h-[310px] bg-gray-50 w-[240px] overflow-hidden rounded-xl">
                    <div className="absolute inset-0 z-0">
                      {OptImage ? (
                        <GatsbyImage
                          image={OptImage}
                          className="h-full w-full object-cover object-center"
                          alt=""
                        />
                      ) : (
                        <img
                          src={node.image.publicUrl}
                          className="h-full w-full object-cover object-center"
                          alt=""
                        />
                      )}
                    </div>
                    <div className="relative z-10 h-full bg-black/30 text-white">
                      <div className="flex h-full flex-col text-center items-center justify-center">
                        <p className="mt-2 text-xl  capitalize font-semibold">
                          {node.cities[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Distinations;
