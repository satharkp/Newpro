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

    <>
    <div>
      <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-3xl mt-32 sm:text-4xl md:text-5xl lg:text-4xl font-semibold tracking-wider p-8 mb-10">
        WHAT WE DO?
      </h1>
    </div>

   <div className="flex items-center flex-col h-screen lg:ml-0">
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
        >
          ←
        </button>
        <button
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
        >
          →
        </button>
      </div>
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
          1024: {
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
        className='max-w-[90%] lg:max-w-[80%] justify-start'
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="relative mb-20 group h-[320px] w-[280px] lg:h-[400px] lg:w-[300px] rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-70 lg:opacity-40 group-hover:opacity-70 transition-opacity duration-300 z-0"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-300 z-10" />

                {/* Foreground Content */}
                <div className="flex flex-col gap-6 relative z-20 text-white px-6 py-8 h-full w-full">
                  <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]:"/>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm">{item.content}</p>
                  <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:to-blue-500 group-hover:rotate-45 duration-100 " />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

    </div>
    </>

    
  )
}

export default Carousel;