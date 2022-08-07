import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Gallery from '../components/Gallery';
import Steps from '../components/Steps';
import FeaturedTours from '../components/FeaturedTours';
import CallToAction from '../components/CallToAction/Cta1';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhyUs from '../components/WhyUs';
import BestLocations from '../components/BestLocations';
import BookWithUs from '../components/BookWithUs';
import Testimonials from '../components/Testimonials';

import 'animate.css';
import 'react-dates/initialize';

const Home = () => {
  useEffect(() => {
    if (typeof window !== `undefined` || !window) return;
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
      <BookWithUs />
      <CallToAction />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
