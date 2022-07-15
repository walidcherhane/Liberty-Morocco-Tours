import React, { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import randomItem from '../../utils/randomItem';
export interface SwiperProps {
  className?: string;
  title: string;
  description: string;
}

const SwiperEl = ({
  children,
  isActive,
}: {
  // NO NOT CHANGE THE TYPE OF CHILDREN
  children: any;
  isActive: boolean;
}) => {
  const animationClasses = [
    `animate__zoomInDown`,
    `animate__slideInDown`,
    `animate__lightSpeedInRight`,
    `animate__flipInX`,
    `animate__zoomInUp`,
    `animate__fadeInDown`,
    `animate__fadeInUp`,
    `animate__backInUp`,
    `animate__backInDown`,
  ];
  return Children.map(children, (child) => {
    return React.cloneElement(child, {
      ...child.props,
      className: ` animate__animated ${
        isActive && randomItem(animationClasses)
      } ${child.props.className}`,
    });
  });
};

function HeroSwiper({ Slides }: { Slides: SwiperProps[] }) {
  return (
    <>
      <div className="relative bg-gray-800 font-poppins">
        <div className={`flex flex-wrap items-center justify-center `}>
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: `.swiper__pagination`,
              clickable: true,
              renderBullet: (_: any, className: string) => {
                return `<span class="${className}"></span>`;
              },
            }}
            modules={[EffectFade, Autoplay, Pagination]}
            effect={`fade`}
            centeredSlides={true}
            slidesPerView={1}
          >
            {Slides.map((slide, index) => (
              <SwiperSlide key={index}>
                {({ isActive }: any) => {
                  return (
                    <>
                      <div className=" relative z-0 bg-gray-800 text-center text-white saturate-150 filter  after:absolute after:inset-0 after:z-10 after:bg-gray-800/40  ">
                        <img
                          src={`/images/backgrounds/${index + 1}.jpg`}
                          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[10s] ${
                            isActive
                              ? ` ${randomItem([
                                  `scale-150`,
                                  `scale-100`,
                                ])} opacity-100`
                              : ` ${randomItem([
                                  `scale-150`,
                                  `scale-100`,
                                ])} opacity-50`
                          }`}
                          alt=""
                        />
                        <div className="container relative z-20  mx-auto p-8 py-40   text-left sm:text-center ">
                          <SwiperEl isActive={isActive}>
                            <h1 className="mb-4 text-5xl  font-bold leading-tight md:text-6xl ">
                              {slide.title}
                            </h1>
                            <p className="w-4/5 text-sm text-gray-50 sm:mx-auto  lg:w-1/2  ">
                              {slide.description}
                            </p>
                          </SwiperEl>
                        </div>
                      </div>
                    </>
                  );
                }}
              </SwiperSlide>
            ))}

            <div className=" swiper__pagination  " />
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeroSwiper;
