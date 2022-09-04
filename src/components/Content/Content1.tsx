import { StaticImage } from 'gatsby-plugin-image';

function TravelWithUs() {
  return (
    <>
      <div className="container relative mx-auto font-poppins">
        <div className="flex flex-col justify-center gap-4 p-8 md:flex-row">
          {/* ------------------- */}
          <div className="flex w-full flex-col justify-center lg:w-1/2">
            <h1 className="mb-8 w-full  text-left text-4xl font-bold capitalize text-black  lg:w-full xl:w-5/6 lg:font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className=" lg:w-5/6 ">
              His hath is appear be one don &apos; t creepeth. Them and one
              moving the won &apos; t may. Moving saw wherein divide bearing
              called. Green moveth Hath. That it years fruit behold Meat also us
              third itself made seasons green void give replenish our said
              saying also spirit give lesser wherein.
            </p>
            <div className="mt-14">
              <a
                href=""
                className="border-b-2 border-sky-400   text-sky-400 capitalize "
              >
                learn more
              </a>
            </div>
          </div>
          {/* ------------------- */}
          <div className="relative mt-8 flex h-auto -space-x-32 lg:w-1/2">
            <StaticImage
              src="../../images/backgrounds/2.jpg"
              className="h w-full rounded-2xl object-cover object-center lg:mt-20 lg:h-80 lg:w-[500px]"
              alt=""
            />

            <StaticImage
              src="../../images/backgrounds/3.jpg"
              className="mb-20 ml-auto hidden h-60 w-60 rounded-2xl object-cover  object-center lg:block"
              alt=""
            />
          </div>
          {/* ------------------- */}
        </div>
      </div>
    </>
  );
}

export default TravelWithUs;
