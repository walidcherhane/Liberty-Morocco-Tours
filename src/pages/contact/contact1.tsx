import ContactForm1 from '../../components/ContactForm/ContactForm1';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeroSwiper from '../../components/HeroSwiper/Swiper1';

function index() {
  const Slides = Array.from({ length: 3 }, () => {
    return {
      title: `Contact Us`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    };
  });
  return (
    <>
      <Header />
      <HeroSwiper Slides={Slides} />
      <ContactForm1 />
      <Footer />
    </>
  );
}

export default index;
