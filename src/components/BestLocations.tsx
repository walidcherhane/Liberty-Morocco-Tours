import Tours from '@/data/tours';
import { BsClock, BsStar } from 'react-icons/bs';
import { MdOutlineTour } from 'react-icons/md';
import BgGlassmorphism from './BgGlassmorphism';
import Title from './Title';
function BestLocations() {
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
          {tours.map((tour, index) => (
            <div
              data-wow-delay={`${index * 0.2}s`}
              data-wow-duration="2s"
              className="wow animate__fadeInUp group relative  flex w-3/4 cursor-pointer flex-col  overflow-hidden    font-poppins transition duration-500  sm:w-[320px]   "
              key={tour.id}
            >
              <img
                height={170}
                width={170}
                className="h-[170px] bg-gray-300 w-full object-cover object-center "
                src={tour.images[index]}
                alt="blog"
              />

              <div className="inset-x-0 bottom-0 z-10 flex  grow flex-col items-center gap-y-1 bg-white">
                <div className=" p-4 px-8 ">
                  <div className="self-start text-sm  text-gray-900  ">
                    From
                    <div className=" ml-2  text-2xl font-semibold text-blue-400">
                      {tour.price}
                      <sup className="ml-1 text-sm font-normal ">$</sup>
                    </div>
                  </div>
                  <div className="text-center text-lg font-semibold text-gray-800">
                    {tour.cities[0]}
                  </div>
                  <div className=" text-center text-xs font-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, vitae?
                  </div>
                </div>
                <div className=" flex w-full items-center justify-around gap-4 bg-blue-50 p-4 ">
                  <div className=" flex items-center justify-center gap-2 text-xs text-blue-500">
                    <MdOutlineTour />
                    <span className="text-gray-600">{tour.tags[0]}</span>
                  </div>
                  <div className=" flex items-center justify-center gap-2 text-xs text-blue-500">
                    <BsClock />
                    <span className="text-gray-600">{tour.duration}</span>
                  </div>
                  <div className=" flex items-center justify-center gap-2 text-xs text-blue-500">
                    <BsStar />
                    <span className="text-gray-600">{tour.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default BestLocations;
