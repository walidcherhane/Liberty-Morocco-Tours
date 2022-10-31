import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { AiOutlineEye, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { GalleryImageProps } from '@/types';

const PrevImage = ({ alt, src, gatsbyImageData }: GalleryImageProps) => {
  const [isZoomed, setIsZoomed] = React.useState(false);
  const OptimizedImage = gatsbyImageData && getImage(gatsbyImageData);
  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  const className = `h-full w-full object-cover`;
  return (
    <AnimatePresence>
      <div className="relative  h-full w-full">
        <div
          onClick={() => {
            handleZoom();
          }}
          className="cursor-pointer  h-full w-full flex group items-center justify-center after:absolute after:inset-0 after:z-10  after:transition  hover:after:bg-gray-800/50 after:pointer-events-none		"
        >
          {OptimizedImage ? (
            <GatsbyImage
              image={OptimizedImage}
              className={className}
              alt={alt}
            />
          ) : (
            src && <img src={src} className={className} alt={alt} />
          )}
          <div className="absolute  text-white text-2xl opacity-0 group-hover:opacity-100 transition z-20   ">
            <AiOutlineEye />
          </div>
        </div>
        {isZoomed && (
          <motion.div
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
                className={`w-full h-full object-cover object-center z-10 `}
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0    ">
              <div className=" animate-spin text-white text-4xl transition">
                <AiOutlineLoading3Quarters />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

const ImagesGallery: React.FC<{ Gallery: GalleryImageProps[] }> = ({
  Gallery,
}) => {
  return (
    <>
      <div className="flex">
        <div className="flex w-1/2 flex-wrap">
          {Gallery.map(
            (gallery, index) =>
              gallery.id > 3 && (
                <>
                  <div
                    data-wow-delay={`${index * 0.1}s`}
                    data-wow-duration="2s"
                    className={`overflow-hidden p-1 md:p-2 ${
                      gallery.size === `small` ? `w-1/2 ` : `w-full `
                    }`}
                    key={gallery.id}
                  >
                    <PrevImage
                      id={index}
                      size={gallery.size}
                      alt="gallery"
                      gatsbyImageData={gallery.gatsbyImageData}
                      src={gallery.src}
                    />
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
                    data-wow-delay={`${index * 0.1}s`}
                    data-wow-duration="2s"
                    className={`p-1 md:p-2 ${
                      gallery.size === `small` ? `w-1/2` : `w-full`
                    }`}
                    key={gallery.id}
                  >
                    <PrevImage
                      id={index}
                      size={gallery.size}
                      alt="gallery"
                      gatsbyImageData={gallery.gatsbyImageData}
                      src={gallery.src}
                    />
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
