import team from '@/data/team';
import { FC } from 'react';
import Title from '../Title';

const Team: FC<{ classNames?: string }> = ({ classNames = `` }) => {
  return (
    <>
      <section className={`${classNames} relative font-poppins text-gray-600`}>
        <div className="container mx-auto px-5 py-24">
          <Title
            title="Meet the team"
            description="DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
          />
          <div className=" grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
            {team.map((member, index) => (
              <div
                data-wow-delay={`${index * 0.2}s`}
                data-wow-duration="2s"
                className="wow animate__fadeIn group flex h-full flex-col items-center text-center"
                key={member.id}
              >
                <div className="relative mb-10  rounded-3xl overflow-hidden  w-full">
                  <div
                    data-wow-delay={`${index * 0.5}s`}
                    className="wow animate__fadeInDown w-[300px] h-[300px]  flex-shrink-0  after:absolute after:inset-0 after:z-10  after:transition after:duration-1000 group-hover:after:bg-sky-800/50 "
                  >
                    <img
                      src={member.img}
                      className=" h-full w-full object-cover object-center saturate-150 filter transition duration-1000 group-hover:scale-125 "
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full font-poppins">
                  <h2 className="title-font text-lg font-bold text-gray-900">
                    {member.name}
                  </h2>
                  <h3 className="mb-3 text-gray-500">{member.position}</h3>
                  <p className="mb-4">{member.description}</p>
                  <span className="inline-flex gap-4 text-xl">
                    {member.social.map(({ icon, id, link }) => (
                      <a
                        className="rounded-xl border bg-gray-50 p-2 text-gray-500 hover:bg-gray-100"
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {icon}
                      </a>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
