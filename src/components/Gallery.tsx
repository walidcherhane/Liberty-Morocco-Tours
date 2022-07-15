import { GalleryImageProps } from '@/types';
import { graphql, useStaticQuery } from 'gatsby';
import ImagesGallery from './ImagesGallery';
const Gallery = () => {
  const { galleryImg } = useStaticQuery(graphql`
    {
      galleryImg: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
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

  const TourImageGallery: GalleryImageProps[] = Array.from(
    { length: galleryImg.edges.length },
    (_, index) => {
      return {
        id: index + 1,
        alt: `gallery`,
        size:
          // first and last image are large others are small ones
          index === 0 || index === galleryImg.edges.length - 1
            ? `large`
            : `small`,
        src: galleryImg.edges[index].node.publicURL,
        gatsbyImageData: galleryImg.edges[index].node.childImageSharp,
      };
    },
  );

  return (
    <>
      <section className="py-24 text-gray-600">
        <div className=" container mx-auto flex flex-wrap px-5 ">
          <div className="mb-20 flex w-full flex-wrap font-poppins">
            <h1 className="title-font mb-4 text-2xl font-semibold text-gray-900 sm:text-3xl lg:mb-0 lg:w-1/3">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3 lg:pl-6">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven&apos;t heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <ImagesGallery Gallery={TourImageGallery} />
        </div>
      </section>
    </>
  );
};

export default Gallery;
