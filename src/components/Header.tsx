import { useState } from 'react';
import { MdKeyboardArrowDown, MdOutlineMenu } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import { useScroll } from 'ahooks';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import { AnimatePresence, motion } from 'framer-motion';
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [subMenuIndex, setSubMenuIndex] = useState<number>();
  const scroll = useScroll();
  const data = useStaticQuery(graphql`
    {
      allContentfulTour {
        nodes {
          categories
          cities
        }
      }
    }
  `);
  const nodes: {
    categories: string[];
    cities: string[];
  }[] = data.allContentfulTour.nodes;
  const allToursCategories = nodes.map((node) =>
    node.categories[node.categories.length - 1].toLocaleLowerCase(),
  );
  const allCategories = [...new Set(allToursCategories.flat())];

  const allToursCities = nodes.map((node) =>
    node.cities[node.cities.length - 1].toLocaleLowerCase(),
  );
  const allCities = [...new Set(allToursCities.flat())];

  const menuItems = [
    {
      label: `All Tours`,
      hasSubmenu: false,
      link: `/tours`,
    },
    {
      label: `Tours By City`,
      hasSubmenu: true,
      submenu: allCities.map((city) => ({
        label: city,
        link: `/tours/cities/${city}`,
      })),
    },
    {
      label: `Tours Categories`,
      hasSubmenu: true,
      submenu: allCategories.map((cat) => ({
        label: cat,
        link: `/tours/categories/${cat}`,
      })),
    },
    {
      label: `About`,
      hasSubmenu: false,
      link: `/about`,
    },
    {
      label: `Contact`,
      hasSubmenu: false,
      link: `/contact/contact1`,
    },
  ];

  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: 1024px)`,
  });
  return (
    <>
      <header
        className={` animate__animated  animate__fast top-0  z-50 bg-white/80 py-3 backdrop-blur-lg transition duration-700 lg:py-0 ${
          scroll && scroll.top! > 100
            ? `fadeIn shadow-gray-10 animate__fadeInDown fixed left-0  top-0 right-0 z-50 border-b shadow-gray-900/10`
            : `animate__slideInDown relative `
        }`}
      >
        <div className="container mx-auto">
          <div className=" mx-8 flex items-center justify-between font-poppins ">
            <Link to="/" className=" flex items-center justify-center gap-2 ">
              <img
                width={30}
                height={30}
                src="/images/icons/logo.png"
                alt="logo"
              />
              <span className="text-lg font-bold text-gray-500">Toursya</span>
            </Link>
            <div
              className={`navbar absolute top-0  right-0 left-[20%]  z-20 h-screen  overflow-yd-scroll  items-center gap-8 bg-gray-50 p-4 px-8 pt-20 transition duration-700 lg:visible  lg:static lg:flex lg:h-auto lg:translate-x-0 lg:bg-transparent lg:p-0 lg:opacity-100 ${
                isNavOpen
                  ? `visible translate-x-0 opacity-100`
                  : `invisible translate-x-4 opacity-0`
              }`}
            >
              {menuItems.map((item, index) => {
                return (
                  <motion.div
                    layout
                    key={item.label}
                    className=" group relative cursor-pointer flex flex-col items-start gap-1 p-6  lg:flex-row lg:items-center lg:px-4"
                  >
                    {item.link ? (
                      <Link
                        to={item.link}
                        className="w-full  cursor-pointer text-gray-800 "
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <motion.div
                        layout
                        onClick={() => {
                          if (subMenuIndex === index) {
                            setSubMenuIndex(undefined);
                          } else {
                            setSubMenuIndex(index);
                          }
                        }}
                        className="w-full flex  items-center text-gray-800 "
                      >
                        <span>{item.label}</span>
                        <div
                          className={`ml-auto lg:hidden transition duration-300 text-2xl ${
                            subMenuIndex === index && `rotate-180`
                          } `}
                        >
                          <MdKeyboardArrowDown />
                        </div>
                      </motion.div>
                    )}
                    {item.hasSubmenu ? (
                      <>
                        {isDesktopOrLaptop ? (
                          <div className="top-14  border-l-2 max-h-96 overflow-y-auto custom-sc right-0 mt-1   flex w-fit min-w-[200px] flex-col items-center lg:rounded-lg lg:border-gray-100 sm:bg-white   p-4  transition  duration-200 ease-in-out group-hover:visible group-hover:translate-y-0  group-hover:opacity-100   sm:invisible sm:absolute sm:translate-y-4 sm:border sm:opacity-0 sm:shadow-xl sm:shadow-[#0000000d] ">
                            <div className="flex w-full  flex-col justify-center">
                              {item.submenu?.map((subitem) => {
                                return (
                                  <Link
                                    key={subitem.label}
                                    to={subitem.link}
                                    className="cursor-pointer rounded-md p-2 my-1  font-normal  text-gray-500 hover:bg-gray-50"
                                  >
                                    <span className="capitalize">
                                      {subitem.label}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          subMenuIndex === index && (
                            <AnimatePresence>
                              <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 10, opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex items-center justify-between overflow-hidden"
                              >
                                <div className="border-l-2  flex w-fit max-h-96 overflow-y-auto custom-sc min-w-[200px] flex-col items-center p-4  py-0 mt-4">
                                  <div className="flex w-full  flex-col justify-center">
                                    {item.submenu?.map((subitem) => {
                                      return (
                                        <Link
                                          key={subitem.label}
                                          to={subitem.link}
                                          className="cursor-pointer rounded-md p-2 my-1 font-normal  text-gray-500 hover:bg-gray-50"
                                        >
                                          <span className="capitalize">
                                            {subitem.label}
                                          </span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              </motion.div>
                            </AnimatePresence>
                          )
                        )}
                        <span className="hidden text-gray-900 transition duration-300 group-hover:-rotate-180 group-hover:text-gray-900 lg:block">
                          <MdKeyboardArrowDown />
                        </span>
                      </>
                    ) : null}
                  </motion.div>
                );
              })}
            </div>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className=" z-20 cursor-pointer text-2xl lg:hidden"
            >
              {isNavOpen ? <GrClose /> : <MdOutlineMenu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
