import { Checkbox } from 'primereact/checkbox';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdAccessTimeFilled } from 'react-icons/md';
import { InputProps } from '../../types';
import BgGlassmorphism from '../BgGlassmorphism';
import contactInfo from '@/data/contact';
import InputRenderer from './InputRenderer';

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
      className="w-full  rounded-xl border filter backdrop-blur-sm p-8  font-semibold text-black lg:bg-sky-50/50"
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
function ContactForm2() {
  return (
    <>
      <BgGlassmorphism />
      <div className="container px-9 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {renderSideMenu()}
        </div>
        <div className="mx-auto  max-w-2xl  py-10">{renderForm()}</div>
      </div>
    </>
  );
}

export default ContactForm2;
