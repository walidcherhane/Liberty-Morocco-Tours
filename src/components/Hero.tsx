import DatePickRange from './DatePickRange';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
function Hero() {
  const { heroBg } = useStaticQuery(graphql`
    {
      heroBg: allFile(filter: { sourceInstanceName: { eq: "hero" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const HERO_BG = getImage(heroBg.edges[0].node?.childImageSharp);
  return (
    <>
      <main className="w-full  transition duration-700">
        <div className="container mx-auto">
          <div className="wow animate__fadeIn relative flex flex-col  p-8  justify-start ">
            <div className="wow fadeIn absolute inset-0 -z-10  overflow-hidden rounded-[40px] after:absolute after:inset-0 after:z-10  after:bg-gray-900/20 ">
              {HERO_BG && (
                <GatsbyImage
                  image={HERO_BG}
                  alt="Hero background"
                  className="h-full w-full  object-cover  object-center "
                />
              )}
            </div>
            <div className="z-10 flex h-full w-full flex-col items-start justify-start   py-16 px-8   md:w-full md:items-start lg:w-2/3   lg:items-start  xl:w-1/2  ">
              <h1
                data-wow-duration="2s"
                className=" text-6xl  font-black text-white md:w-2/3 md:text-7xl lg:w-full lg:text-8xl  xl:font-bold"
              >
                Air, sleep, dream
              </h1>
              <p className="mt-4 text-lg font-semibold  text-white sm:text-2xl xl:text-xl">
                Find and book a great experience.
              </p>
              <div className="flex gap-4 items-center justify-start mt-8 relative">
                <button className="  rounded-full bg-white  px-8 py-4 font-poppins font-semibold text-gray-700 ">
                  Start your Search
                </button>
                <AiOutlineArrowDown className="absolute -right-14 text-3xl animate-upDown   text-white border border-dashed border-white p-2 w-10 h-10 rounded-full" />
              </div>
            </div>
            {/* Search */}
            <div className="  relative z-20 ">
              <DatePickRange />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
