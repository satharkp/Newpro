import { useRef } from 'react';
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination, Mousewheel } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../Constants";

const Carousel = () => {
  const swiperRef = useRef(null);
  return (

    <div>
    <div>
      <h1 id='wwd'  
      data-aos="zoom-in" 
     className="text-3xl text-center mt-10 sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider mb-10 ">
        PRODUCTS & SOLUTIONS
      </h1>
      <p className=" text-gray-600 text-center text-[13px] ">Every product is backed by expert service & installation support <br /> Need help choosing the right solution? <br /> <a href="/contact" className=" transition-colors duration-300 text-blue-400 ">📞 Contact us </a>anytime
      </p>
    </div>

   <div className="relative flex items-center justify-between h-screen px-5">
      <button
        onClick={() => swiperRef.current.swiper.slidePrev()}
        className="absolute mt-[-50px] left-0 sm:left-4 top-1/2 -translate-y-1/2 sm:-translate-y-1/2 bg-gray-400 text-white text-3xl sm:text-5xl p-3 sm:p-5 rounded-full hover:bg-gray-500 transition z-40"
      >
        &#10094;
      </button>
      <button
        onClick={() => swiperRef.current.swiper.slideNext()}
        className="absolute mt-[-50px] right-0 sm:right-4 top-1/2 -translate-y-1/2 sm:-translate-y-1/2 bg-gray-400 text-white text-3xl sm:text-5xl p-3 sm:p-5 rounded-full hover:bg-gray-500 transition z-40"
      >
        &#10095;
      </button>
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
            slidesPerView: 3,
            spaceBetween: 32
          }
        }}
      freeMode={true}
      pagination={{
         clickable:true
      }}

      modules={[FreeMode, Pagination, Mousewheel]}
      mousewheel={true}
        className="max-w-[90%] lg:max-w-[80%] !pb-10 swiper-center-pagination mx-auto flex flex-col items-center"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="relative mb-20 ml-1 lg:ml-6 group h-[320px] w-[280px] lg:h-[400px] lg:w-[300px] rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-400 z-0 "
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-300 z-10 " />

                {/* Foreground Content */}
                <div className="flex flex-col gap-6 relative z-20 text-black px-6 py-8 h-full w-full  hover:font-bold hover:text-black">
                  <item.icon className="text-blue-600 w-[30px] h-[30px]"/>
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
    </div>

    
  )
}


export default Carousel;