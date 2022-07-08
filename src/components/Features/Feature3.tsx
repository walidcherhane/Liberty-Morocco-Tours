import React from 'react';
import {
  MdCardTravel,
  MdOutlineAddLocationAlt,
  MdOutlineBed,
  MdOutlineEmojiTransportation,
} from 'react-icons/md';

export interface BenifitesProps {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
}

function WhoWeAre() {
  const benifits: BenifitesProps[] = [
    {
      id: 1,
      icon: <MdOutlineEmojiTransportation />,
      title: `Private Transport`,
      description: `Sponsorships are like unicorns or leprechauns, talked about often but they don’t exist. There is one dollars`,
    },
    {
      id: 2,
      icon: <MdOutlineAddLocationAlt />,
      title: `Diverse Destinations`,
      description: `Sponsorships are like unicorns or leprechauns, talked about often but they don’t exist. There is one dollars`,
    },
    {
      id: 3,
      icon: <MdOutlineBed />,
      title: `Great Hotels`,
      description: `Sponsorships are like unicorns or leprechauns, talked about often but they don’t exist. There is one dollars`,
    },
    {
      id: 4,
      icon: <MdCardTravel />,
      title: `Fast Booking`,
      description: `Sponsorships are like unicorns or leprechauns, talked about often but they don’t exist. There is one dollars`,
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4 py-10 font-poppins">
        <h1 className="text-center text-4xl font-bold capitalize text-sky-800 ">
          Who we are
        </h1>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5">
          {benifits.map((benifit: BenifitesProps) => (
            <div
              className="flex flex-col justify-center items-start  p-4 "
              key={benifit.id}
            >
              <div className="text-4xl mb-4 text-sky-400">{benifit.icon}</div>
              <div>
                <div className="text-xl text-sky-900 font-semibold">
                  {benifit.title}
                </div>
                <div className="h-[2px] my-2 bg-sky-400 w-1/2 " />
              </div>
              <p className="  text-sm  font-light">{benifit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
