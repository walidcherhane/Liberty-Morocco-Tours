/* eslint-disable no-undef */
import { Link } from 'gatsby';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { ToursQuery } from '@/types';
import { GatsbyImage } from 'gatsby-plugin-image';

function WideTourCard({
  tour,
}: {
  tour: ToursQuery.TourItemQuery['allContentfulTour']['edges'][0]['node'];
}) {
  if (!tour?.description?.raw) return null;
  const plainTextDescription = documentToPlainTextString(
    JSON.parse(tour.description.raw),
  );
  return (
    <Link to={`/tours/${tour.slug}`} className="col-span-2 overflow-hidden">
      <div className="flex flex-col gap-4">
        <GatsbyImage
          image={tour.image?.gatsbyImageData}
          className="h-[400px] bg-gray-200  rounded-2xl"
          alt=""
        />
        <div className=" font-poppins">
          <h3 className="uppercase  text-sky-500 font-semibold">
            {tour.categories && tour.categories.map((cat) => cat)}
          </h3>
          <h1 className="text-3xl font-semibold text-gray-800 ">
            {tour.title}
          </h1>
          <p className="text-gray-500 mt-4">
            {plainTextDescription.substring(0, 250)}...
            <Link to={`/tours/${tour.slug}`} className="text-sky-500 underline">
              Continue Reading ↗
            </Link>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default WideTourCard;
