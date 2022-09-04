import { ToursQuery } from '@/types';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

function HorizontalCard({
  tour,
}: {
  tour: ToursQuery.TourItemQuery['allContentfulTour']['edges'][0]['node'];
}) {
  const plainTextDescription = documentToPlainTextString(
    JSON.parse(tour.description.raw),
  );
  return (
    <div>
      <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row font-poppins h-full">
        <div className="flex-none h-[276px] max-h- xl:h-auto sm:w-60 lg:w-full xl:w-60 drop-shadow-xl  shadow-indigo-200 relative">
          <GatsbyImage
            image={tour.image?.gatsbyImageData}
            alt=""
            className="xl:absolute inset-0 w-full h-full object-cover rounded-xl saturate-150	"
          />
        </div>
        <div className="flex flex-col  justify-between flex-auto p-6 bg-white shadow-xl shadow-indigo-50 md:mx-4 xl:my-4 xl:mx-0 rounded-b-xl xl:rounded-l-none xl:rounded-r-xl">
          <div>
            <div className="flex flex-wrap">
              <h1 className="flex-auto font-medium text-slate-900">
                {tour.title}
              </h1>
              <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                ${tour.price}
              </div>
              <div className="text-sm font-medium text-slate-400">
                {tour.duration} day{tour.duration > 1 ? `s` : ``}
              </div>
            </div>
            <div className="flex items-baseline my-4 text-sm line-clamp-2">
              {plainTextDescription}
            </div>
          </div>

          <div className="mt-auto pt-4 justify-around flex  border-t border-slate-200 space-x-4">
            <Link
              to={`/tours/${tour.slug}`}
              className=" w-full text-center p-3 text-base font-semibold rounded-full bg-violet-600 hover:bg-violet-700  text-white"
              type="submit"
            >
              Learn More
            </Link>
            <Link
              to={`/contact`}
              className=" w-full text-center p-3 text-base font-semibold rounded-full border border-slate-200 hover:bg-gray-50 text-slate-900"
              type="button"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
