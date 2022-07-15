import { Link } from 'gatsby';
import { BsArrowRightShort } from 'react-icons/bs';
function Cta1() {
  return (
    <>
      <section className="body-font relative text-gray-600  bg-blue-700 ">
        <div className="container   overflow-hidden mx-auto px-10 md:px-20 py-24 rounded-1xl ">
          <div className="absolute w-full h-full inset-0 z-0 opacity-40">
            <img
              src="/images/textures/2.png"
              className="w-full h-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="mx-auto font-poppins flex flex-col items-start sm:items-center text-white relative z-10">
            <p className="wow animate__fadeInUp text-lg mb-4 font-semibold text-left">
              See with real eyes
            </p>
            <h1 className="wow animate__fadeInDown title-font mb-8 flex-grow text-4xl capitalize font-bold  sm:pr-16">
              Book a ticket and just leave
            </h1>
            <p
              className="md:text-center md:w-2/3 wow animate__fadeInDown"
              data-delay="0.5s"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quis
              amet, officiis voluptas voluptates eligendi, numquam, rerum optio
              illo cum incidunt quaerat corrupti. Inventore consectetur quia
              aspernatur perferendis esse. Maiores.
            </p>
            <Link
              to="/contact/contact1"
              data-delay="2s"
              className="wow animate__fadeInDown group bg-white rounded-lg hover:shadow-2xl shadow-blue-900   transition duration-500  hover:scale-110 text-gray-900 text-center py-3 px-6 font-semibold mt-8 flex justify-center items-center gap-2"
            >
              Contact Us
              <div className=" text-2xl font-bold group-hover:translate-x-2 transition duration-500">
                <BsArrowRightShort />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta1;
