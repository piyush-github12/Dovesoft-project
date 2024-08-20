import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Swiperjs.css";

// import required modules
import {Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          //   depth: 500,
          modifier: 1,
          scale: 0.7,
          //   slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper text-white text-center "
      >
        <SwiperSlide className=" relative">
          <div className="w-[95%] h-[85%]  py-[2vw] px-[5vw] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl border-4 border-white  ">
            <div className="h-[50%] overflow-hidden ">
              <h2 className="text-sm italic ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, voluptates ab ex blanditiis deserunt debitis a enim
                nihil? Omnis et porro quos assumenda nesciunt, nemo, repudiandae
                provident ab esse excepturi at quo, dolor eum officiis!
                Distinctio harum dolore eveniet minima expedita iusto, numquam
                dignissimos reprehenderit suscipit in maiores tempora quasi.
              </h2>
            </div>
            <div className="h-[50%] flex flex-col items-center justify-center gap-1">
              <div className="w-[5vw] h-[5vw] rounded-full border-2 border-[#ff9500]">
                <img className="w-full object-cover" src="" alt="" />
              </div>
              <h2>Jone Wick</h2>
              <h4 className="text-xs ">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" relative">
          <div className="w-[95%] h-[85%]  py-[2vw] px-[5vw] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl border-4 border-white  ">
            <div className="h-[50%] overflow-hidden ">
              <h2 className="text-sm italic ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, voluptates ab ex blanditiis deserunt debitis a enim
                nihil? Omnis et porro quos assumenda nesciunt, nemo, repudiandae
                provident ab esse excepturi at quo, dolor eum officiis!
                Distinctio harum dolore eveniet minima expedita iusto, numquam
                dignissimos reprehenderit suscipit in maiores tempora quasi.
              </h2>
            </div>
            <div className="h-[50%] flex flex-col items-center justify-center gap-1">
              <div className="w-[5vw] h-[5vw] rounded-full border-2 border-[#ff9500]">
                <img className="w-full object-cover" src="" alt="" />
              </div>
              <h2>Jone Wick</h2>
              <h4 className="text-xs ">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" relative">
          <div className="w-[95%] h-[85%]  py-[2vw] px-[5vw] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl border-4 border-white  ">
            <div className="h-[50%] overflow-hidden ">
              <h2 className="text-sm italic ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, voluptates ab ex blanditiis deserunt debitis a enim
                nihil? Omnis et porro quos assumenda nesciunt, nemo, repudiandae
                provident ab esse excepturi at quo, dolor eum officiis!
                Distinctio harum dolore eveniet minima expedita iusto, numquam
                dignissimos reprehenderit suscipit in maiores tempora quasi.
              </h2>
            </div>
            <div className="h-[50%] flex flex-col items-center justify-center gap-1">
              <div className="w-[5vw] h-[5vw] rounded-full border-2 border-[#ff9500]">
                <img className="w-full object-cover" src="" alt="" />
              </div>
              <h2>Jone Wick</h2>
              <h4 className="text-xs ">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" relative">
          <div className="w-[95%] h-[85%]  py-[2vw] px-[5vw] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl border-4 border-white  ">
            <div className="h-[50%] overflow-hidden ">
              <h2 className="text-sm italic ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, voluptates ab ex blanditiis deserunt debitis a enim
                nihil? Omnis et porro quos assumenda nesciunt, nemo, repudiandae
                provident ab esse excepturi at quo, dolor eum officiis!
                Distinctio harum dolore eveniet minima expedita iusto, numquam
                dignissimos reprehenderit suscipit in maiores tempora quasi.
              </h2>
            </div>
            <div className="h-[50%] flex flex-col items-center justify-center gap-1">
              <div className="w-[5vw] h-[5vw] rounded-full border-2 border-[#ff9500]">
                <img className="w-full object-cover" src="" alt="" />
              </div>
              <h2>Jone Wick</h2>
              <h4 className="text-xs ">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" relative">
          <div className="w-[95%] h-[85%]  py-[2vw] px-[5vw] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl border-4 border-white  ">
            <div className="h-[50%] overflow-hidden ">
              <h2 className="text-sm italic ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, voluptates ab ex blanditiis deserunt debitis a enim
                nihil? Omnis et porro quos assumenda nesciunt, nemo, repudiandae
                provident ab esse excepturi at quo, dolor eum officiis!
                Distinctio harum dolore eveniet minima expedita iusto, numquam
                dignissimos reprehenderit suscipit in maiores tempora quasi.
              </h2>
            </div>
            <div className="h-[50%] flex flex-col items-center justify-center gap-1">
              <div className="w-[5vw] h-[5vw] rounded-full border-2 border-[#ff9500]">
                <img className="w-full object-cover" src="" alt="" />
              </div>
              <h2>Jone Wick</h2>
              <h4 className="text-xs ">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" relative">
          <div className="w-[95%] h-[85%]  py-[2vw] px-[5vw] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl border-4 border-white  ">
            <div className="h-[50%] overflow-hidden ">
              <h2 className="text-sm italic ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, voluptates ab ex blanditiis deserunt debitis a enim
                nihil? Omnis et porro quos assumenda nesciunt, nemo, repudiandae
                provident ab esse excepturi at quo, dolor eum officiis!
                Distinctio harum dolore eveniet minima expedita iusto, numquam
                dignissimos reprehenderit suscipit in maiores tempora quasi.
              </h2>
            </div>
            <div className="h-[50%] flex flex-col items-center justify-center gap-1">
              <div className="w-[5vw] h-[5vw] rounded-full border-2 border-[#ff9500]">
                <img className="w-full object-cover" src="" alt="" />
              </div>
              <h2>Jone Wick</h2>
              <h4 className="text-xs ">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
