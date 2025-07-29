import React, { useEffect, useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Hero = () => {
  const [SplineComponent, setSplineComponent] = useState(null);
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    import('@splinetool/react-spline').then((module) => {
      setSplineComponent(() => module.default);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpline(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex lg:mt-20 mb-[100px] mt-0 flex-col-reverse lg:flex-row items-center justify-between min-h-[calc(90vh-6em)]">
      

    <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="max-w-xl ml-[3%] z-10 mt-[20%] md:mt-[20%] lg:mt-0">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider mt-10 mb-1 leading-tight lg:w-[700px] min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]">
        SECURE. EMPOWER. AUTOMATE. SUPPORT.
        </h1>
        <p className="text-base mt-3 lg:mt-5 sm:text-md tracking-wider text-gray-600 max-w-[25rem] lg:max-w-[30rem] min-h-[4.5rem] sm:min-h-[5.5rem]">
        Your space deserves reliable, future-ready technology.
        We specialize in security systems, solar energy, home and office automation, custom PCs, automated gates & shutters, and IT support — all delivered with precision, expertise, and a commitment to long-term reliability.
        </p>

        {/* Call to action button*/}

        <div className="flex gap-4 mt-5 lg:mt-5 mb-20">
            <a href="#about" className="border border-[#1d2f36] h-14 sm:h-[60px] px-5 sm:px-7 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-black hover:text-white flex items-center gap-2">
            <i className='bx bx-link-external'></i>
              About Us
            </a>
            <a className="border border-[#1d2f36] h-14 sm:h-[60px] px-5 sm:px-7 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-black hover:text-white flex items-center gap-2" href="/contact">
              Contact Us
              <i className='bx bx-chevron-right'></i> 
            </a>
        </div>
    </div>
    {/* 3d Robot*/}
    <div className="relative flex justify-center mt-40 lg:mt-0 lg:ml-[13%] items-center w-full max-w-5xl mx-auto scale-[1.5] sm:scale-[1] md:scale-[1.9] md:ml-10 lg:scale-[2] min-h-[200px] ">
    {showSpline && SplineComponent && (
      <SplineComponent
      scene="https://prod.spline.design/Mzsufjfbt4z5nMrl/scene.splinecode"
        loading="lazy"
      />
    )}

    </div>

    </main>
  )
}

export default Hero