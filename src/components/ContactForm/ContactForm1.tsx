import { FaPhoneAlt } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdAccessTimeFilled } from 'react-icons/md';
import { Checkbox } from 'primereact/checkbox';
import InputRenderer from './InputRenderer';
import { InputProps } from '@/types';
import contactInfo from '@/data/contact';
import BgGlassmorphism from '../BgGlassmorphism';
const renderForm = () => {
  const formInputs: InputProps[] = [
    {
      label: `Name`,
      name: `name`,
      placeholder: `Enter your name`,
      type: `text`,
    },
    {
      label: `Email`,
      name: `email`,
      placeholder: `Enter your email`,
      type: `email`,
    },
    {
      label: `Phone`,
      name: `phone`,
      placeholder: `Enter your phone`,
      type: `text`,
    },
    {
      label: `Country`,
      name: `country`,
      placeholder: `Enter your country`,
      type: `text`,
    },
    {
      label: `Message`,
      name: `message`,
      placeholder: `Enter your message`,
      type: `textarea`,
    },
  ];

  return (
    <form action="" className="font-poppins">
      <h1 className=" text-2xl font-bold text-sky-400">Fill the bellow form</h1>
      <p className="mt-3 w-4/5 text-sm text-gray-400">
        We are here to answer any questions you may have about our travel
        experiences. Reach out to us and we&apos;ll respond as soon as we can.
      </p>
      <div className="mt-4 grid gap-8 lg:grid-cols-2">
        {formInputs.map((input, index) => (
          <div
            key={index}
            className={`p-2 font-poppins ${
              input.type === `textarea` ? `col-span-full` : ``
            } `}
          >
            <InputRenderer
              key={index}
              Component={input.type === `textarea` ? `textarea` : `input`}
              InputProps={{
                ...input,
              }}
            />
          </div>
        ))}
        <div className="col-span-full flex flex-col gap-9">
          <div>
            <Checkbox inputId="terms" />
            <label className="ml-2 font-poppins" htmlFor="terms">
              Agree to terms and conditions
            </label>
          </div>
          <input
            type="submit"
            value="Send Message"
            className="cursor-pointer rounded-full bg-sky-300 px-8 py-4 font-poppins font-semibold text-white  hover:bg-sky-400"
          />
        </div>
      </div>
    </form>
  );
};

const renderSideMenu = () => {
  const items = [
    {
      icon: <FaPhoneAlt />,
      title: `Contact Info:`,
      desc: Object.keys(contactInfo.basic).map((i, index) => (
        <li key={index} className=" list-none">
          <span className="capitalize">{i}</span>:{` `}
          {Object.values(contactInfo.basic)[index]}
        </li>
      )),
    },
    {
      icon: <HiLocationMarker />,
      title: `Address:`,
      desc: contactInfo.address,
    },
    {
      icon: <MdAccessTimeFilled />,
      title: `Hours of operation:`,
      desc: contactInfo.workingHours,
    },
  ];
  return items.map((item, index) => (
    <div
      key={index}
      className="w-full rounded-xl lg:bg-sky-50/50  py-8 lg:px-8 font-semibold text-black"
    >
      <div className="flex items-start gap-4">
        <div className=" mt-2 text-lg text-sky-500">{item.icon}</div>
        <div className="grow">
          <div className="text-lg">{item.title}</div>
          <div className="mt-4 font-normal text-gray-600">{item.desc}</div>
        </div>
      </div>
    </div>
  ));
};

function ContactForm1() {
  return (
    <div className="relative overflow-hidden py-10">
      <BgGlassmorphism />
      <div className="container relative mx-auto grid grid-cols-1 lg:grid-cols-3 px-8">
        <div className="flex md:col-span-full lg:col-span-1 flex-wrap md:flex-nowrap  lg:w-5/6 gap-3 font-poppins lg:flex-col">
          {renderSideMenu()}
        </div>
        <div className="col-span-2 ">{renderForm()}</div>
      </div>
    </div>
  );
}

export default ContactForm1;