import Title from './Title';
import { graphql, useStaticQuery } from 'gatsby';

function Steps() {
  const features = [
    {
      title: `Book & relax`,
      description: `We realize ideas from simple to complex, everything becomes easy to use.`,
    },
    {
      title: `Smart checklist`,
      description: `We realize ideas from simple to complex, everything becomes easy to use.`,
    },
    {
      title: `Save more`,
      description: `We realize ideas from simple to complex, everything becomes easy to use.`,
    },
  ];

  const { icons } = useStaticQuery(graphql`
    {
      icons: allFile(filter: { sourceInstanceName: { eq: "icons" } }) {
        edges {
          node {
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <section className="body-font mb-10  text-gray-600">
        <div className="container mx-auto px-5 py-24 pt-0 md:py-8">
          <Title
            title="Let’s go on an adventure"
            description="Find and book a great experience."
          />
          <div className="-mx-4 -mb-10 mt-10 flex flex-wrap justify-center  sm:-m-4 ">
            {features.map((feature, index) => {
              const url = icons.edges.filter(({ node }: any) => {
                return node.publicURL
                  .toLowerCase()
                  .includes(feature.title.split(` `)[0].toLowerCase());
              })[0]?.node.publicURL;
              return (
                <div
                  data-wow-delay={`${index * 0.2}s`}
                  data-wow-duration="2s"
                  key={index}
                  className="m-0 flex space-x-4 flex-col items-center text-center md:w-1/3    "
                >
                  <div className="mb-5 inline-flex h-64 w-64  items-center justify-center ">
                    <img
                      src={url}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow font-poppins">
                    <h2 className="title-font uppercase text-xl font-extrabold bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500 text-transparent ">
                      {feature.title}
                    </h2>
                    <p className="text-base w-2/3 md:w-full md:text-sm lg:text-base mt-2 mx-auto leading-relaxed text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Steps;
