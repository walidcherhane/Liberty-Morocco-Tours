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
      <section className="body-font  text-gray-600">
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
                  className="wow animate__fadeInUp m-0 flex flex-col items-center text-center p-4  md:w-1/3    "
                >
                  <div className="mb-5 inline-flex h-64 w-64 flex-shrink-0 items-center justify-center overflow-hidden rounded-full  text-indigo-500">
                    <img
                      src={url}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow font-poppins">
                    <h2 className="title-font  text-lg font-bold text-gray-900">
                      {feature.title}
                    </h2>
                    <p className="text-base w-2/3 mx-auto leading-relaxed">
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
