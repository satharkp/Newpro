import gradient from '../assets/gradient.png'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import About from '../Components/Waw';
import { useLocation } from 'react-router-dom';
import HappyCl from '../Components/HappyCl';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    if (location.hash === "#wwd") {
      const section = document.getElementById("wwd");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="overflow-x-hidden">
      <main className="w-full relative">
        {/* Gradient image */}
        <img
          className="absolute top-0 right-0 opacity-60 z-[-1]"
          src={gradient}
          alt="Colorful gradient background"
        />

        {/* Blur effect */}
        <div className="absolute top-[3.5%] right-[-10%] w-[44rem] h-[9rem] bg-[#A1A1DE] opacity-100 blur-[35px] rotate-[-30deg] z-[-1]"></div>

        {/* Actual content */}
        <Header/>
        <Hero/>
        <About/>
        <section id="wwd">
         <Carousel />
        </section>
        <HappyCl/>
        <Footer/>
      </main>
    </div>
  )
}

export default Home