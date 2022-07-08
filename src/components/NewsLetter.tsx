function NewsLetter() {
  return (
    <>
      <div className="font-poppins ">
        <h1 className="text-xl text-gray-600 font-semibold">
          Sign up for our newsletter
        </h1>
        <p className="text-gray-600 text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam,
          quidem.
        </p>
        <form action="" className="mt-8">
          <div className="flex flex-col gap-4 ">
            <input
              type="text"
              className="w-full p-4 py-2 border-2 rounded-md border-gray-300 outline-none focus:border-gray-400"
              placeholder="Enter Your Name"
            />
            <input
              required
              type="text"
              className="w-full p-4 py-2 border-2 rounded-md border-gray-300 outline-none focus:border-gray-400"
              placeholder="Enter Your Email"
            />
            <button
              className="bg-gray-900 hover:bg-gray-700 text-white uppercase tracking-wider py-3 px-4 rounded-md"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewsLetter;
