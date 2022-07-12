/* eslint-disable no-undef */
import { Link } from 'gatsby';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { ToursQuery } from '@/types';
import { GatsbyImage } from 'gatsby-plugin-image';

function MediumTourCard({
  tour,
}: {
  tour: ToursQuery.TourItemQuery['allContentfulTour']['edges'][0]['node'];
}) {
  if (!tour?.description?.raw) return null;
  const plainTextDescription = documentToPlainTextString(
    JSON.parse(tour.description.raw),
  );
  return (
    <Link to={`/tours/${tour.slug}`}>
      <div className="flex flex-col gap-4 h-full">
        <GatsbyImage
          image={tour.image?.gatsbyImageData}
          className="h-[200px] bg-gray-200  rounded-xl object-cover object-center"
          alt=""
        />
        <article className="font-poppins">
          <h1 className="font-semibold text-gray-800 ">{tour.title}</h1>
          <p className="mt-4 text-sm text-gray-500">
            {plainTextDescription.substring(0, 80)}...
            <Link to={`/tours/${tour.slug}`} className="text-sky-500 underline">
              Continue Reading ↗
            </Link>
          </p>
        </article>
      </div>
    </Link>
  );
}

export default MediumTourCard;
