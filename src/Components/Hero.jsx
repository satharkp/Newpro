import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className="flex lg:mt-20 mb-[100px] mt-0 flex-col-reverse lg:flex-row items-center justify-between min-h-[calc(90vh-6em)]">
      

    <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="max-w-xl ml-[3%] z-10 mt-[20%] md:mt-[20%] lg:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider mt-10 mb-1">
        SECURE. POWER.AUTOMATE. REPAIR.
        </h1>
        <p className="text-base mb-5 sm:text-lg tracking-wider text-gray-600 max-w-[25rem] lg:max-w-[30rem]">
        Your space deserves reliable technology. We specialize in security systems, solar energy, home automation, and IT support — all delivered with expert care and attention to detail.
        </p>

        {/* Call to action button*/}

        <div className="flex gap-4 lg:mt-10 mb-20">
            <a href="#about" className="border border-blue-500 py-4 sm:py-5 px-5 sm:px-7 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-black hover:text-white">
            <i className='bx bx-link-external'></i>
              More about Us
            </a>
            <a className="border border-blue-500 py-4 sm:py-5 px-5 sm:px-7  rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-black hover:text-white" href="/contact">
              Contact Us
              <i className='bx bx-chevron-right'></i> 
            </a>
        </div>
    </div>
    {/* 3d Robot*/}
    <div className="flex justify-center mt-28  lg:mt-0 lg:ml-[13%] items-center w-full max-w-5xl mx-auto scale-[2] sm:scale-[1] md:scale-[1.2] lg:scale-[2]">
    <Spline scene="https://prod.spline.design/Mzsufjfbt4z5nMrl/scene.splinecode" loading="lazy" />




    </div>
    {/*robot that only can for canvas*/} 

    </main>
  )
}

export default Hero