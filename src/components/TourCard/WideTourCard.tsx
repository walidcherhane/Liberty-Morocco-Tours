import { graphql, Link, useStaticQuery } from 'gatsby';
import { TourProps } from '@/types';
import Img from 'gatsby-image';

function WideTourCard({ tour }: { tour: TourProps }) {
  const data = useStaticQuery(
    graphql`
      {
        allFile {
          nodes {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `,
  );
  return (
    <Link to={`/tours/${tour.slug}`} className="col-span-2 overflow-hidden">
      <div className="flex flex-col gap-4">
        <Img
          fluid={data.allFile.nodes[1].childImageSharp.fluid}
          className="max-h-[400px]  rounded-2xl"
          alt=""
        />
        <div className=" font-poppins">
          <div className="uppercase  text-sky-500 font-semibold">
            {tour.categories[1]}
          </div>
          <div className="text-3xl font-semibold text-gray-800 ">
            {tour.title}
          </div>
          <div className="mt-4">
            {tour.description.length > 200 ? (
              <>
                <p className="text-gray-500">
                  {tour.description.substring(0, 150)}...
                  <a
                    href={`/Tours/${tour.slug}`}
                    className="text-sky-500 underline"
                  >
                    Continue Reading ↗
                  </a>
                </p>
                <a
                  href=""
                  className="text-sky-600 inline-flex  items-center underline  underline-offset-1"
                ></a>
              </>
            ) : (
              tour.description
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default WideTourCard;
