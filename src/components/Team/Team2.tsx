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
                <div className="relative mb-10  w-full">
                  <img
                    width={300}
                    height={210}
                    alt="team"
                    className={`mb-4 flex-shrink-0 rounded-t-3xl object-cover object-center`}
                    src={`https://ui8-fleet-html.herokuapp.com/img/content/host-pic-${member.id}@2x.jpg`}
                  />
                  <div
                    data-wow-delay={`${index * 0.5}s`}
                    className="wow animate__fadeInDown absolute inset-x-0  -bottom-8 mx-auto h-20 w-20 overflow-hidden rounded-full  bg-gray-200 "
                  >
                    <img
                      src={member.img}
                      className="h-full w-full object-cover object-center saturate-150 filter "
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
