import Title from './Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import useScroll from '../Hooks/useWindowSize';

function Distinations() {
  const scroll = useScroll();
  const distinations = Array.from({ length: 10 }, (_, index) => {
    return {
      id: index,
      title: `Paris`,
      img: `/images/Destinations/${index + 1}.jpg`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    };
  });

  return (
    <>
      <section className="  text-gray-600 mt-20">
        <div className="container mx-auto px-5 ">
          <div className="mb-8 text-center font-poppins">
            <Title
              title="Let’s go on an adventure"
              description="Find and book a great experience."
            />
            <div className="mt-6 flex justify-center">
              <div className="inline-flex h-1 w-16 rounded-full bg-indigo-500"></div>
            </div>
          </div>
          <Swiper
            spaceBetween={
              scroll.width > 768 ? (scroll.width > 1024 ? 30 : 20) : 10
            }
            autoplay={{
              delay: 7000,
            }}
            modules={[Autoplay]}
            slidesPerView={
              scroll.width > 768
                ? scroll.width > 1024
                  ? scroll.width >= 1280
                    ? 5
                    : 4
                  : 3
                : scroll.width > 640
                ? 2
                : 1
            }
          >
            {distinations.map((distination) => (
              <SwiperSlide key={distination.id}>
                <div className="relative mx-auto h-[310px] w-[240px] overflow-hidden rounded-xl">
                  <div className="absolute inset-0 z-0">
                    <img
                      src={distination.img}
                      className="h-full w-full object-cover object-center"
                      alt=""
                    />
                  </div>
                  <div className="relative z-10 h-full bg-black/30 text-white">
                    <div className="flex h-full flex-col items-center justify-center">
                      <div className="text-3xl font-semibold ">
                        {distination.title}
                      </div>
                      <p className="mt-2  ">+203 Tours</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Distinations;
