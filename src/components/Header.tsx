import { useState } from 'react';
import { MdKeyboardArrowDown, MdOutlineMenu } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import { useScroll } from 'ahooks';
import { Link } from 'gatsby';
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const scroll = useScroll();
  const menuItems = [
    {
      label: `Home`,
      hasSubmenu: false,
      link: `/`,
    },
    {
      label: `About`,
      hasSubmenu: false,
      link: `/about`,
    },
    {
      label: `Tours`,
      hasSubmenu: true,
      submenu: [
        {
          label: `All Tours`,
          link: `/tours`,
        },
        {
          label: `Single Tour`,
          link: `/tours/amazing-tours-activities-in-the-world-02`,
        },
      ],
    },
    {
      label: `Contact`,
      hasSubmenu: true,
      link: `/Contact/Contact1`,
      submenu: [
        {
          label: `Contact 01`,
          link: `/contact/contact1`,
        },
        {
          label: `Contact 02`,
          link: `/contact/contact2`,
        },
      ],
    },
  ];
  return (
    <>
      <div className="  min-h-[80px]">
        <header
          className={` animate__animated  animate__fast top-0  z-50 bg-white/80 py-6 backdrop-blur-lg transition duration-700 sm:py-1 ${
            scroll && scroll.top! > 100
              ? ` fadeIn shadow-gray-10 animate__fadeInDown fixed left-0  top-0 right-0 z-50 border-b shadow-gray-900/10`
              : `animate__slideInDown relative `
          }`}
        >
          <div className="container mx-auto">
            <div className=" mx-8 flex items-center justify-between font-poppins ">
              <div className=" flex items-center justify-center gap-2 ">
                <img width={40} height={40} src="/images/Logo.png" alt="logo" />
                <span className="text-lg font-bold text-gray-500">Toursya</span>
              </div>
              <div
                className={`navbar absolute top-0  right-0  z-20 h-screen items-center gap-8 bg-gray-50 p-4 px-8 pt-20 transition duration-700 sm:visible  sm:static sm:flex sm:h-auto sm:translate-x-0 sm:bg-transparent sm:p-0 sm:opacity-100 ${
                  isNavOpen
                    ? `visible translate-x-0 opacity-100`
                    : `invisible translate-x-4 opacity-0`
                }`}
              >
                {menuItems.map((item) => {
                  return (
                    <div
                      key={item.label}
                      className=" group relative  flex flex-col items-start gap-1 p-6  sm:flex-row sm:items-center sm:px-4"
                    >
                      {item.link ? (
                        <Link
                          to={item.link}
                          className="w-full  cursor-pointer text-gray-800 "
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="w-full text-gray-800 ">
                          {item.label}
                        </span>
                      )}
                      {item.hasSubmenu ? (
                        <>
                          <div className="top-14  right-0 mt-1  flex w-fit min-w-[200px] flex-col items-center rounded-lg border-gray-100 sm:bg-white   p-4  transition  duration-200 ease-in-out group-hover:visible group-hover:translate-y-0  group-hover:opacity-100   sm:invisible sm:absolute sm:translate-y-4 sm:border sm:opacity-0 sm:shadow-xl sm:shadow-[#0000000d] ">
                            <div className="flex w-full  flex-col justify-center">
                              {item.submenu?.map((subitem) => {
                                return (
                                  <Link
                                    key={subitem.label}
                                    to={subitem.link}
                                    className="cursor-pointer rounded-md p-2 my-1  font-normal  text-gray-500 hover:bg-gray-50"
                                  >
                                    <span>{subitem.label}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                          <span className="hidden text-gray-900 transition duration-300 group-hover:-rotate-180 group-hover:text-gray-900 sm:block">
                            <MdKeyboardArrowDown />
                          </span>
                        </>
                      ) : null}
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className=" z-20 cursor-pointer text-2xl sm:hidden"
              >
                {isNavOpen ? <GrClose /> : <MdOutlineMenu />}
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
