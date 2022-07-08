import ContactForm2 from '../../components/ContactForm/ContactForm2';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function index() {
  return (
    <div className="bg-sky-100/20 relative">
      <img
        src="/images/Textures/6.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        alt=""
      />
      <Header />
      <div className="mx-auto my-20 w-3/4 text-center font-poppins text-4xl font-semibold capitalize">
        Ready for your next step ?
      </div>
      <ContactForm2 />
      <Footer />
    </div>
  );
}

export default index;
