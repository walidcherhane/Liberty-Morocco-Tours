import { Link } from 'gatsby';

export default function Thankyou() {
  return (
    <main className="h-screen bg-blue-400 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-white capitalize text-center">
        Thank you for your message. <br /> We will get back to you as soon as
        possible.
      </h1>
      <Link to="/">
        <button className="bg-blue-500 mt-8 uppercase hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg">
          Go back to home
        </button>
      </Link>
    </main>
  );
}
