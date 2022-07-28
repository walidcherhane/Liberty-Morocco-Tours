function Features2() {
  const features = [
    {
      number: `328`,
      name: `Projects Completed`,
      desc: `You every can't thing seed subdue subdue light female.`,
    },
    {
      number: `10+`,
      name: `Years of exeperience`,
      desc: `Called a fly, behold seasons meat which stars bring fruit.`,
    },
    {
      number: `68%`,
      name: `Cost savings`,
      desc: `Image isn't that give appear made us you're yielding.`,
    },
    {
      number: `1k`,
      name: `Email leads generated`,
      desc: `Fruit deep first cattle set fourth without and day subdue.`,
    },
  ];

  return (
    <>
      <div className="container relative mx-auto rounded-2xl bg p-8 font-poppins overflow-hidden mb-20 ">
        <img
          src="/images/textures/4.jpg"
          className="absolute inset-0 -z-10 h-full w-full object-cover "
          alt=""
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div className="p-4" key={index}>
              <h1 className=" text-4xl font-semibold text-sky-800">
                {feature.number}
              </h1>
              <h3 className=" font-bold text-gray-800">{feature.name}</h3>
              <p className="mt-2 text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Features2;
