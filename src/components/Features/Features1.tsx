function Features() {
  const features: { title: string; description: string; icon: any }[] = [
    {
      title: `+ 1000 Customers`,
      description: `We are an Morocco managed tour operator and destination management company`,
      icon: (
        <svg
          className="h-8 w-8 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          ></path>
        </svg>
      ),
    },
    {
      title: `+60 Premium tours`,
      description: `We are an Morocco managed tour operator and destination management company`,
      icon: (
        <svg
          className="h-8 w-8 text-yellow-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          ></path>
        </svg>
      ),
    },
    {
      title: `Ready to help`,
      description: `We are an Morocco managed tour operator and destination management company`,
      icon: (
        <svg
          className="h-8 w-8 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          ></path>
        </svg>
      ),
    },
  ];
  return (
    <>
      <section className=" py-10 px-0 md:px-14 lg:px-0 ">
        <div className="container mx-auto max-w-6xl items-center  px-10 sm:px-20 md:px-32 lg:px-0">
          <div className="-mx-3 flex flex-wrap items-center">
            <div className="lg:order-0 order-1 w-full px-3 lg:w-1/2">
              <div className="w-full lg:max-w-md ">
                <h2 className="mb-4 w-4/5 sm:w-full font-poppins text-3xl font-bold leading-tight tracking-tight lg:mb-2 lg:text-2xl ">
                  Some good reasons to travel with us
                </h2>
                <p className="mb-4 font-medium tracking-tight text-gray-400 lg:text-sm xl:mb-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus sunt cumque nihil repellat asperiores maxime culpa
                  ullam assumenda illo exercitationem!:
                </p>
                <ul>
                  {features.map((feature, index) => (
                    <li
                      className="flex font-poppins items-center space-x-4 py-2 xl:py-3"
                      key={index}
                    >
                      {feature.icon}

                      <div className="flex w-full flex-col">
                        <span className="font-medium text-gray-900">
                          {feature.title}
                        </span>
                        <div className="text-xs text-gray-400">
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-0 mb-12 w-full  lg:order-1 lg:mb-0 lg:w-1/2">
              <img
                className="mx-auto  h-full "
                src="/images/122.png"
                alt="feature image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
