/* eslint-disable no-undef */
import { Link } from 'gatsby';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

function MediumTourCard({
  tour,
}: {
  tour: Queries.TourItemQuery['allContentfulTour']['edges'][0]['node'];
}) {
  if (!tour?.description?.raw) return null;
  const plainTextDescription = documentToPlainTextString(
    JSON.parse(tour.description.raw),
  );
  return (
    <Link to={`/tours/${tour.slug}`}>
      <div className="flex flex-col gap-4 h-full">
        <img
          src={tour.image?.publicUrl}
          className="max-h-[400px] h-full  rounded-xl object-cover object-center"
          alt=""
        />
        <div className=" font-poppins">
          <div className="font-semibold text-gray-800 ">{tour.title}</div>
          <div className="mt-4 text-sm">
            {plainTextDescription.length > 100 ? (
              <>
                <p className="text-gray-500">
                  {plainTextDescription.substring(0, 60)}...
                  <a href="" className="text-sky-500 underline">
                    Continue Reading ↗
                  </a>
                </p>
                <a
                  href=""
                  className="text-sky-600 inline-flex  items-center underline  underline-offset-1"
                ></a>
              </>
            ) : (
              plainTextDescription
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MediumTourCard;
