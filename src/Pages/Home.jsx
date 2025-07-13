import gradient from '../assets/gradient.png'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import About from '../Components/About';
import { useLocation } from 'react-router-dom';

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
        <div className="h-0 w-[40rem] absolute top-[5%] right-[-5%] shadow-[0_0_900px_20px_blue] -rotate-[30deg] z-[-1]"></div>

        {/* Actual content */}
        <Header/>
        <Hero/>
        <About/>
        <section id="wwd">
         <Carousel />
        </section>
        <Footer/>
      </main>
    </div>
  )
}

export default Home