import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination, Mousewheel } from "swiper/modules";
// import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../Constants";

const Carousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full bg-[#151515] py-12">
      <div className="max-w-full mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-start mb-[-190px] lg:mb-5">
          <h1
            id="wwd"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight text-white leading-tight mb-5"
          >
            PRODUCTS & SOLUTIONS
          </h1>
          <p className="text-white text-sm max-w-xl mb-4">
            We provide integrated tech-driven products for safety, communication, surveillance, and automation—ensuring reliable support and installation across all services.
          </p>
        </div>

        {/* Swiper Section */}
        <div className="relative flex items-center justify-between min-h-[750px] lg:mt-[-120px]">
          
          {/* Previous Button */}
          <button
            aria-label="Previous Slide"
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="absolute lg:mt-[-50px] mt-[-30px] left-0 sm:left-4 top-1/2 -translate-y-1/2 sm:-translate-y-1/2 text-white text-3xl sm:text-5xl p-3 sm:p-5 rounded-full hover:scale-125 transition z-40"
          >
            &#10094;
          </button>

          {/* Next Button */}
          <button
            aria-label="Next Slide"
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="absolute lg:mt-[-50px] mt-[-30px] right-0 sm:right-4 top-1/2 -translate-y-1/2 sm:-translate-y-1/2 text-white text-3xl sm:text-5xl p-3 sm:p-5 rounded-full hover:scale-125 transition z-40"
          >
            &#10095;
          </button>

          {/* Swiper Carousel */}
          <Swiper
            ref={swiperRef}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 24
              },
              1180: {
                slidesPerView: 4,
                spaceBetween: 32
              }
            }}
            freeMode={true}
            pagination={{
              clickable: true
            }}
            modules={[FreeMode, Pagination, Mousewheel]}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
            }}
            className="max-w-[90%] lg:max-w-[80%] !pb-10 mt-16 lg:mt-0 swiper-center-pagination mx-auto flex flex-col items-center"
          >
            {ServiceData.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="relative mb-10 mx-auto group w-[68vw] rounded-sm max-w-[280px] lg:w-[300px] overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 ease-in-out min-h-[320px] lg:min-h-[400px] mt-5">

                  {/* Background Image */}
                  <img
                    src={item.backgroundImage || '/fallback.jpg'}
                    alt={item.title}
                    loading={item.title === ServiceData[0].title ? "eager" : "lazy"}
                    width="300"
                    height="400"
                    className="absolute inset-0 w-full h-full object-cover aspect-[3/4] opacity-90 group-hover:opacity-10 transition-opacity duration-500 z-0"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-300 z-10" />

                  {/* Content */}
                  <div className="flex flex-col gap-6 relative z-20 text-white px-6 py-8 h-full w-full">
                    {item.icon && <item.icon className="text-white w-[27px] h-[30px] lg:h-[30px]" />}
                    <h3 className="text-lg font-bold mb-[-10px]">{item.title}</h3>
                    <p className="text-sm font-bold mb-[-20px]">{item.subHeading}</p>
                    <ul className="text-sm list-disc list-inside">
                      {item.content.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    {/* <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:to-blue-500 group-hover:rotate-45 duration-100 " /> */}
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Footer Section – Contact Us */}
        <div className="relative z-50 text-gray-600 text-center text-[11px] mt-[-120px] lg:text-[13px] min-h-[3.5rem]">
          Every product is backed by expert service & installation support <br />
          Need help choosing the right solution? <br />
          <a href="/contact" className="transition-colors duration-300 text-blue-400 ">
            📞 Contact us 
          </a>
          anytime
        </div>

      </div>
    </div>
  );
};

export default Carousel;
