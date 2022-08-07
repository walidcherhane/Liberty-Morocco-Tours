import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
function BookWithUs() {
  const list = [
    {
      id: 1,
      label: `Invest in your simply neighborhood`,
    },
    {
      id: 2,
      label: `Support people in free text extreme need`,
    },
    {
      id: 3,
      label: `Largest global industrial business community`,
    },
  ];
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-16 md:flex-row">
          <StaticImage
            width={550}
            height={550}
            data-wow-duration="2s"
            className="wow animate__fadeIn rounded object-cover object-center"
            alt="hero"
            src="../images/textures/1.png"
          />
          <div className="flex flex-col items-start justify-start text-left font-poppins md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h1
              data-wow-duration="2s"
              className="wow animate__fadeInLeft title-font mb-4 text-3xl font-semibold leading-5	 text-gray-900 sm:text-5xl"
            >
              Plan Your Trip with Toursya
            </h1>
            <p
              data-wow-duration="2.3s"
              className="wow animate__fadeInLeft mb-8 leading-relaxed"
            >
              There are many variations of passages of available but the
              majority have suffered alteration in some form, by injected hum
              randomised words which don &apos; t look even slightly.
            </p>
            <ul className="ml-2 flex flex-col justify-center gap-y-4 text-xl">
              {list.map((item) => (
                <li
                  data-wow-delay={`${item.id * 0.2}s`}
                  data-wow-duration="2.5s"
                  className="wow animate__fadeInLeft flex items-center justify-start  text-sm"
                  key={item.id}
                >
                  <div className=" text-blue-400">
                    <AiFillCheckCircle />
                  </div>
                  <span className="ml-4 text-left text-gray-500">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/contact/contact1">
              <div
                data-wow-duration="2.5s"
                className="wow animate__fadeInDown cursor-pointer flex items-center justify-center gap-2 group mt-10   rounded-lg   bg-blue-400 py-3  px-6  text-center font-semibold text-white shadow-blue-900  transition duration-500 hover:scale-110 hover:shadow-2xl"
              >
                Contact Us
                <span className="text-2xl font-bold transition duration-500 group-hover:translate-x-2">
                  <BsArrowRightShort />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookWithUs;
