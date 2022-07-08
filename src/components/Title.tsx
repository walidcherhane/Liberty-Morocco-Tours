function Title({ title, description }: { title: string; description: string }) {
  return (
    <div className="my-8 mb-14 font-poppins text-center">
      <h1
        className={`wow animate__fadeInDown mb-4 text-4xl font-bold text-gray-900 `}
      >
        {title}
      </h1>
      <p className="wow animate__fadeInUp text-gray-500 mx-auto  text-base leading-relaxed lg:w-3/4 xl:w-2/4">
        {description}
      </p>
    </div>
  );
}

export default Title;
