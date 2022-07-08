import { graphql, Link, useStaticQuery } from 'gatsby';
import { TourProps } from '@/types';
import Img from 'gatsby-image';

function MediumTourCard({ tour }: { tour: TourProps }) {
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
    <Link to={`/tours/${tour.slug}`}>
      <div className="flex flex-col gap-4 h-full">
        <Img
          fluid={data.allFile.nodes[1].childImageSharp.fluid}
          className="max-h-[400px] h-full  rounded-xl object-cover object-center"
          alt=""
        />
        <div className=" font-poppins">
          <div className="font-semibold text-gray-800 ">{tour.title}</div>
          <div className="mt-4 text-sm">
            {tour.description.length > 100 ? (
              <>
                <p className="text-gray-500">
                  {tour.description.substring(0, 60)}...
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
              tour.description
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MediumTourCard;
