import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { AiOutlineEye, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

type ImageProps = {
  id: number;
  alt?: string;
  src: string | undefined;
  size: string;
  gatsbyImageData?: any;
};

const PrevImage: React.FC<{
  src: string;
  alt?: string;
  size: string;
  className?: string;
  gatsbyImageData: any;
}> = ({ src, alt, size, gatsbyImageData }) => {
  const className = `${size}-image`;
  const [isZoomed, setIsZoomed] = React.useState(false);
  const OptimizedImage = getImage(gatsbyImageData);
  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <AnimatePresence>
      <div className="relative  h-full w-full">
        <div
          onClick={() => {
            handleZoom();
          }}
          className="cursor-pointer  h-full w-full flex group items-center justify-center after:absolute after:inset-0 after:z-10  after:transition  hover:after:bg-gray-800/50 after:pointer-events-none		"
        >
          {OptimizedImage && (
            <GatsbyImage
              image={OptimizedImage}
              alt={alt || ` `}
              className={`${className} relative preview-image  h-full w-full object-cover `}
            />
          )}
          <div className="absolute  text-white text-2xl opacity-0 group-hover:opacity-100 transition z-20   ">
            <AiOutlineEye />
          </div>
        </div>
        {isZoomed && (
          <motion.img
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              handleZoom();
            }}
            className="fixed inset-0 z-50 bg-gray-900/80  w-full flex items-center justify-center"
          >
            <div className="relative z-10 ">
              <motion.img
                key="modal"
                transition={{ duration: 0.2 }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                src={src}
                alt={alt}
                style={{
                  maxWidth: `100vw`,
                  maxHeight: `100vh`,
                }}
                className={`${className} w-full h-full object-cover object-center z-10 `}
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0    ">
              <div className=" animate-spin text-white text-4xl transition">
                <AiOutlineLoading3Quarters />
              </div>
            </div>
          </motion.img>
        )}
      </div>
    </AnimatePresence>
  );
};

const ImagesGallery: React.FC<{ Gallery?: ImageProps[] }> = ({ Gallery }) => {
  Gallery = Gallery || [
    {
      id: 1,
      src: `/images/Gallery/1.jpg`,
      size: `small`,
    },
    {
      id: 2,
      src: `/images/Gallery/2.jpg`,
      size: `small`,
    },
    {
      id: 3,
      src: `/images/Gallery/3.jpg`,
      size: `large`,
    },
    {
      id: 4,
      src: `/images/Gallery/4.jpg`,
      size: `large`,
    },
    {
      id: 5,
      src: `/images/Gallery/5.jpg`,
      size: `small`,
    },
    {
      id: 6,
      src: `/images/Gallery/6.jpg`,
      size: `small`,
    },
  ];
  return (
    <>
      <div className="-m-1 flex   md:-m-F2 ">
        <div className="flex w-1/2 flex-wrap">
          {Gallery.map(
            (gallery, index) =>
              gallery.id > 3 && (
                <>
                  <div
                    data-wow-delay={`${index * 0.2}s`}
                    data-wow-duration="2s"
                    className={`wow animate__fadeInUp overflow-hidden p-1 md:p-2 ${
                      gallery.size === `small` ? `w-1/2 ` : `w-full `
                    }`}
                    key={gallery.id}
                  >
                    {gallery.src && (
                      <PrevImage
                        size={gallery.size ?? `small`}
                        alt="gallery"
                        src={gallery.src}
                        gatsbyImageData={gallery.gatsbyImageData}
                      />
                    )}
                  </div>
                </>
              ),
          )}
        </div>
        <div className="flex w-1/2 flex-wrap">
          {Gallery.map(
            (gallery, index) =>
              gallery.id <= 3 && (
                <>
                  <div
                    data-wow-delay={`${index * 0.2}s`}
                    data-wow-duration="2s"
                    className={`wow animate__fadeInUp p-1 md:p-2 ${
                      gallery.size === `small` ? `w-1/2` : `w-full`
                    }`}
                    key={gallery.id}
                  >
                    {gallery.src && (
                      <PrevImage
                        size={gallery.size ?? `small`}
                        alt="gallery"
                        src={gallery.src}
                        gatsbyImageData={gallery.gatsbyImageData}
                      />
                    )}
                  </div>
                </>
              ),
          )}
        </div>
      </div>
    </>
  );
};

export default ImagesGallery;
