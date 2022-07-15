import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Team1 from '../../components/Team';
import Swiper1 from '../../components/HeroSwiper/Swiper1';
import TravelWithUs from '../../components/Content/Content1';
import Features3 from '../../components/Features/Feature3';
import Features2 from '../../components/Features/Features2';
function About() {
  const heroSlides = [
    {
      title: `About Us`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      title: `Know About Us`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      title: `Be Our Friend`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      title: `Be Our Partner`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
  ];
  return (
    <>
      <Header />
      <Swiper1 Slides={heroSlides} />
      <Features3 />
      <TravelWithUs />
      <Team1 />
      <Features2 />
      <Footer />
    </>
  );
}

export default About;
