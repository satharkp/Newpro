import gradient from '../assets/gradient.png'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import About from '../Components/About';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);
  return (
    
    <>
    <main className="w-full">
      {/* Gradient image*/}
       <img className='absolute top-0 right-0 opacity-60 -z-1' src={gradient} alt="Colorful gradient background" />

       {/* Blur image */}
       <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_blue] -rotate-[30deg]'>
       </div>
       </main>
       <Header/>
       <Hero/>
       <About/>
       <Carousel/>
       <Footer/>
    </>
  )
}

export default Home