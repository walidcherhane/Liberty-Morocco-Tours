import React, { FC, Fragment } from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { Dialog, Transition } from '@headlessui/react';
import { StaticImage } from 'gatsby-plugin-image';

export interface StateProps {
  value: number;
  label: string;
}

export interface VideoModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const VideoModal: FC<VideoModalProps> = ({ isOpen, handleClose }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative  z-[60] " onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[1128px]  h-[500px]  transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                  <iframe
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    width="100%"
                    height="100%"
                    marginWidth={0}
                    src="https://www.youtube.com/embed/hVvEISFw9w0?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com"
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const States: FC<{ className: string }> = ({ className }) => {
  const states: StateProps[] = [
    { value: 870, label: `Total Donations` },
    { value: 480, label: `Campaigns Closed` },
    { value: 930, label: `Happy People` },
    { value: 63, label: `Our Volunteers` },
  ];
  return (
    <>
      <div
        className={` ${className} inset-x-40 mt-4  border-white py-12  xl:py-8 xl:absolute xl:-bottom-20  rounded-t-3xl xl:border xl:bg-sky-50/95 xl:shadow-2xl xl:shadow-sky-200	 xl:backdrop-blur `}
      >
        <div className="flex w-full flex-wrap xl:flex-nowrap items-center  justify-center gap-4 divide-gray-300 px-8 xl:px-0   xl:justify-center xl:divide-y-0  xl:divide-x">
          {states.map(({ value, label }) => (
            <div
              className="group   rounded-xl xl:rounded-none border xl:border-0 p-4 xl:px-10 text-center  font-poppins text-3xl font-semibold text-blue-500 transition hover:bg-white xl:hover:bg-transparent  "
              key={value}
            >
              <div className="group-hover:text-gray-800 xl:group-hover:text-blue-500">
                +{value}
              </div>
              <div className="mt-2 text-sm font-light text-white group-hover:text-gray-800   xl:text-gray-800">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

function WhyUs() {
  const [isModelOpen, setIsModelOpen] = React.useState(false);

  return (
    <div className="relative mb-14">
      <VideoModal
        isOpen={isModelOpen}
        handleClose={() => {
          setIsModelOpen(false);
        }}
      />

      <div className="relative xl:py-32 xl:pt-10 bg-gray-400 after:absolute after:inset-0 after:bg-gray-800/60 overflow-hidden">
        <div className="object-cover absolute inset-0">
          <StaticImage
            alt="Why Us"
            className=" w-full h-full object-cover"
            src="../images/backgrounds/7.jpg"
          />
        </div>
        <div className="container font-poppins relative mx-auto z-20 ">
          <div className="flex flex-col items-center justify-center xl:mb-10">
            <button
              onClick={() => {
                setIsModelOpen(true);
              }}
              className="relative  my-20 xl:mb-10 text-center"
            >
              <span className="absolute inset-0 z-10 inline-flex animate-ping rounded-full border-2 border-sky-400  duration-150 "></span>
              <span className="absolute inset-0 z-10 inline-flex animate-ping  rounded-full  border-4 border-sky-400 duration-500 "></span>
              <span className="absolute inset-0 z-10 inline-flex animate-ping  rounded-full  border-8 border-sky-400  duration-700 "></span>
              <AiOutlinePlayCircle className="text-7xl text-sky-400/70" />
            </button>
            <h1 className="text-center text-5xl xl:text-8xl xl:mb-8 font-bold text-white/60">
              Why Us?
            </h1>
            <p className="mt-5 xl:mt-2 w-4/5 text-center text-white/80 lg:w-1/2  xl:w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Maecenas
            </p>
          </div>
          <States className="block xl:hidden" />
        </div>
      </div>
      <States className="hidden xl:block" />
    </div>
  );
}

export default WhyUs;
