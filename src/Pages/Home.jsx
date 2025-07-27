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
import bni from '../assets/logos/bni.webp';
import akks from '../assets/logos/akks.png'

const Home = () => {
  const location = useLocation();

  const logos = [
      bni,akks
  ];

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
        


        <div className="absolute top-20 right-3 lg:top-4 lg:right-4 flex flex-row flex-wrap items-center justify-end lg:gap-3 gap-2  max-w-full">
          {logos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Client ${idx + 1}`}
              loading="lazy"
              className="z-10 h-10 sm:h-12 md:h-14 max-w-[100px] sm:max-w-[100px] object-contain transition-transform duration-300 hover:scale-150"
            />
          ))}
        </div>

        {/* Blur effect */}
        <div className="absolute top-[3.5%] right-[-10%] w-[44rem] h-[9rem] bg-[#6665fe] opacity-100 blur-[70px] rotate-[-30deg] z-[-1]"></div>

        {/* Actual content */}
        <Header/>
        <Hero/>
        <About />
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