/* eslint-disable no-undef */
import { Link } from 'gatsby';
function TourCard1({
  tour,
}: {
  tour: Queries.TourItemQuery['allContentfulTour']['edges'][0]['node'];
}) {
  console.log(tour);
  return (
    <Link
      to={`/tours/${tour.slug}`}
      className="relative cursor-pointer  font-poppins min-h-[400px] rounded-lg overflow-hidden"
    >
      <img
        src={tour.image?.publicUrl}
        className="absolute inset-0 -z-10 object-cover w-full h-full object-center"
        alt=""
      />
      <div className="mt-auto p-8 px-4 absolute bottom-0 inset-x-0 z-10 flex flex-col w-full items-start justify-start bg-gradient-to-t from-gray-800 to-transparent">
        <div className="flex gap-4">
          {tour.categories &&
            tour.categories.slice(0, 2).map((cat) => (
              <div
                key={cat}
                className="bg-sky-400 p-2 px-4 text-xs text-white uppercase -skew-x-6	"
              >
                {cat}
              </div>
            ))}
        </div>
        <div className=" font-semibold text-2xl text-white mt-4">
          {tour.title}
        </div>
        {tour.duration && (
          <p className="text-white ">
            {tour.duration}
            <span className="ml-2">day{tour.duration > 1 ? `s` : ``} in </span>
            {tour.cities?.map((c) => c).join(`, `)}
          </p>
        )}

        <div className="text-xs text-white flex gap-2 mt-4">
          {tour.tags?.map((tag, index) => (
            <span key={index} className="">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default TourCard1;
