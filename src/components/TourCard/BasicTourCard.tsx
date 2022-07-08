import { TourProps } from '@/types';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
function TourCard1({ tour }: { tour: TourProps }) {
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
    <Link
      to={`/tours/${tour.slug}`}
      className="relative cursor-pointer  font-poppins min-h-[400px] rounded-lg overflow-hidden"
    >
      <Img
        fluid={data.allFile.nodes[1].childImageSharp.fluid}
        className="absolute inset-0 -z-10 object-cover w-full h-full object-center"
        alt=""
      />
      <div className="mt-auto p-8 px-4 absolute bottom-0 inset-x-0 z-10 flex flex-col w-full items-start justify-start bg-gradient-to-t from-gray-800 to-transparent">
        <div className="flex gap-4">
          <div className="bg-sky-400 p-2 px-4 text-xs text-white uppercase -skew-x-6	">
            {tour.categories[tour.id]}
          </div>
        </div>
        <div className=" font-semibold text-2xl text-white mt-4">
          {tour.title}
        </div>
        <div className="text-xs text-white flex gap-2 mt-4">
          {tour.tags.map((tag, index) => (
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
