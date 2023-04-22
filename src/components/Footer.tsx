import { StaticImage } from 'gatsby-plugin-image';
import React, { FC, ReactNode } from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { MdOutlineArrowRight } from 'react-icons/md';

type Link = {
  href: string;
  label: string;
};
type SocialType = {
  name: string;
  icon: ReactNode;
  href: string;
};
export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: Link[];
}

export interface SocialsList1Props {
  className?: string;
}

const socials: SocialType[] = [
  { name: `Facebook`, icon: <BsFacebook />, href: `#` },
  { name: `Twitter`, icon: <BsTwitter />, href: `#` },
  { name: `Youtube`, icon: <BsYoutube />, href: `#` },
  { name: `Instagram`, icon: <BsInstagram />, href: `#` },
];

const SocialsList1: FC<SocialsList1Props> = ({ className = `space-y-2.5` }) => {
  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className="group flex items-center space-x-2 text-2xl leading-none text-neutral-700 hover:text-black"
        key={index}
      >
        <span className="lg:text-md text-xl md:text-lg xl:text-sm ">
          {item.icon}
        </span>
        <span className="hidden text-sm lg:block">{item.name}</span>
      </a>
    );
  };

  return <div className={`${className}`}>{socials.map(renderItem)}</div>;
};

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: `5`,
    title: `Getting started`,
    menus: [
      { href: `#`, label: `Installation` },
      { href: `#`, label: `Release Notes` },
      { href: `#`, label: `Upgrade Guide` },
      { href: `#`, label: `Browser Support` },
      { href: `#`, label: `Editor Support` },
    ],
  },
  {
    id: `1`,
    title: `Explore`,
    menus: [
      { href: `#`, label: `Design features` },
      { href: `#`, label: `Prototyping` },
      { href: `#`, label: `Design systems` },
      { href: `#`, label: `Pricing` },
      { href: `#`, label: `Security` },
    ],
  },
  {
    id: `2`,
    title: `Resources`,
    menus: [
      { href: `#`, label: `Best practices` },
      { href: `#`, label: `Support` },
      { href: `#`, label: `Developers` },
      { href: `#`, label: `Learn design` },
      { href: `#`, label: `Releases` },
    ],
  },
  {
    id: `4`,
    title: `Community`,
    menus: [
      { href: `#`, label: `Discussion Forums` },
      { href: `#`, label: `Code of Conduct` },
      { href: `#`, label: `Community Resources` },
      { href: `#`, label: `Contributing` },
      { href: `#`, label: `Concurrent Mode` },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="w-fit text-lg font-bold text-neutral-900 ">
          {menu.title}
          <div className="mt-1 h-[2px] w-1/2 bg-sky-700" />
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li
              key={index}
              className="flex justify-center items-center group transition duration-500  lg:hover:translate-x-4 lg:hover:text-sky-400 lg:hover:underline"
            >
              <div className="md:opacity-0 text-lg group-hover:lg:opacity-100 transition-opacity duration-500">
                <MdOutlineArrowRight />
              </div>
              <a
                key={index}
                className="w-full block  text-neutral-700"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="relative border-t border-neutral-200 bg-gray-200/50 py-24 px-12 font-poppins  lg:py-20">
      <div className="absolute inset-0 -z-10 ">
        <StaticImage
          src="../images/textures/5.png"
          className="h-full w-full object-cover "
          placeholder="tracedSVG"
          alt=""
        />
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 relative z-10 ">
        <div className="col-span-2 grid grid-cols-4 gap-5 md:col-span-4 lg:flex lg:flex-col lg:md:col-span-1">
          <div className="col-span-2 ml-8 md:ml-0 flex h-auto  items-center justify-center md:justify-start gap-2 md:col-span-1">
            <StaticImage
              width={50}
              height={50}
              src="../images/icons/logo.png"
              alt="logo"
              placeholder="tracedSVG"
            />

            <h1 className="text-xl font-bold  text-sky-800">
              Liberty Morocco Tours
            </h1>
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-3 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-2.5" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;
