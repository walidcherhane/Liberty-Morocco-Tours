import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Gallery from '../components/Gallery';
import Steps from '../components/Steps';
import FeaturedTours from '../components/FeaturedTours';
import Team2 from '../components/Team/Team2';
import CallToAction from '../components/CallToAction/Cta1';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhyUs from '../components/WhyUs';
import BestLocations from '../components/BestLocations';
import Discount from '../components/Discount';
import Testimonials from '../components/Testimonials';

import 'animate.css';

const Home = () => {
  useEffect(() => {
    const initWow = async () => {
      const { WOW } = await import(`wowjs`);
      new WOW({
        live: false,
        animateClass: `animate__animated`,
        offset: 100,
        mobile: true,
      }).init();
    };
    initWow();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Destinations />
      <Gallery />
      <Steps />
      <BestLocations />
      <FeaturedTours />
      <WhyUs />
      <Testimonials />
      <Team2 />
      <Discount />
      <CallToAction />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
