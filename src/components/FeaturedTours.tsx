import Tours from '@/data/tours';
import { AiFillStar } from 'react-icons/ai';

function FeaturedTours() {
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
          <div className="mt-10 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4   ">
            {tours.map((tour, index) => (
              <div
                data-wow-delay={`${index * 0.2}s`}
                data-wow-duration="2s"
                className="wow  animate__fadeInUp group relative  h-[400px] w-3/4 cursor-pointer  overflow-hidden rounded-2xl border  border-gray-300 p-4 font-poppins transition duration-500 hover:-translate-y-6 hover:shadow-2xl  hover:shadow-gray-300/50 sm:w-full   "
                key={tour.id}
              >
                <div className="base absolute top-4 left-4 z-10 rounded-full bg-gray-900/60 px-4  py-2 text-xs font-bold text-white">
                  {tour.price}$
                </div>
                <div className="h-full  ">
                  <img
                    className="absolute inset-0 z-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-125 "
                    src={tour.images[index]}
                    alt="blog"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 rounded-t-2xl bg-white p-6 ">
                    <h1 className="title-font  text-lg font-medium text-gray-900">
                      {tour.title}
                    </h1>
                    <h2 className="title-font mb-4 text-xs font-bold  uppercase tracking-widest text-gray-400">
                      {tour.cities[0]}
                    </h2>
                    <hr />
                    <div className="mt-4 flex flex-wrap items-center">
                      <div className="inline-flex items-center text-gray-500 md:mb-2 lg:mb-0">
                        {tour.duration}
                      </div>
                      <span className=" ml-auto inline-flex items-center py-1  text-sm leading-none text-yellow-400 md:ml-0 lg:ml-auto">
                        <AiFillStar />
                        <div className="ml-1 text-xs  font-semibold text-gray-800">
                          {tour.rating}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedTours;