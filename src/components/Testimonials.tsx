import { FC } from 'react';
import BgGlassmorphism from './BgGlassmorphism';
import Title from './Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

export interface SectionClientSayProps {
  className?: string;
}

const DEMO_DATA = [
  {
    id: 1,
    clientName: `Tiana Abie`,
    clientAddress: `Malaysia`,
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
  },
  {
    id: 2,
    clientName: `Lennie Swiffan`,
    clientAddress: `London`,
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
  },
  {
    id: 3,
    clientName: `Berta Emili`,
    clientAddress: `Tokyo`,
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
  },
];

const SectionClientSay: FC<SectionClientSayProps> = ({
  className = `py-16`,
}) => {
  const { clients } = useStaticQuery(graphql`
    {
      clients: allFile(filter: { sourceInstanceName: { eq: "clients" } }) {
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
    <div className={`container relative mx-auto ${className} `}>
      <BgGlassmorphism />
      <Title
        title="Good news from far away"
        description="Let's see what people think of us."
      />
      <div className="relative mx-auto max-w-2xl md:mb-16">
        <div className={`relative mt-12 lg:mt-16`}>
          <div className="  absolute right-full -top-20 -mr-20 w-16  opacity-40 lg:top-32 lg:mr-3 ">
            <StaticImage
              width={65}
              height={65}
              src="../images/icons/quote.png"
              alt=""
            />
          </div>
          <div className="  absolute left-full top-20 -ml-20  w-16 opacity-40 lg:top-32 lg:ml-3 rotate-180">
            <StaticImage
              width={65}
              height={65}
              src="../images/icons/quote.png"
              alt=""
            />
          </div>

          <Swiper
            autoplay={{
              delay: 7000,
            }}
            pagination={{
              el: `.swiper-bullets`,
              clickable: true,
              renderBullet: (_: any, className: string) => {
                return `<span class="${className}"></span>`;
              },
            }}
            modules={[Autoplay, Pagination]}
            centeredSlides={true}
            slidesPerView={1}
          >
            {DEMO_DATA.map((item, i) => {
              const gatsbyImageData =
                clients.edges[i].node.childImageSharp.gatsbyImageData;
              const OptimizedImage =
                gatsbyImageData && getImage(gatsbyImageData);
              return (
                <SwiperSlide
                  key={item.id}
                  className="flex cursor-grab flex-col items-center text-center font-poppins "
                >
                  <GatsbyImage
                    image={OptimizedImage}
                    className="mx-auto h-32 w-32 rounded-xl object-cover"
                    alt=""
                  />
                  <span className="mt-10 block w-4/5 text-lg sm:w-2/3  sm:text-2xl lg:w-4/5 lg:text-lg xl:w-5/6">
                    {item.content}
                  </span>
                  <span className="mt-8 block text-xl font-semibold">
                    {item.clientName}
                  </span>
                  <div className="mt-2 flex items-center space-x-2 text-2xl text-neutral-400">
                    <HiOutlineLocationMarker />
                    <span className="text-base">{item.clientAddress}</span>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="swiper-bullets " />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SectionClientSay;
