import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiperjs.css";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";


export default function App() {


  
  return (
    <div div className="">
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
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className={` bg-white text-white text-center  `}
      >
        <SwiperSlide
          className={` w-[50vw]  landingpageswiper  relative`}
        >
          <div className="w-[95%] my-[20px] h-fit   py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, voluptates ab ex blanditiis deserunt debitis a enim
                nihil? Omnis et porro quos assumenda nesciunt, nemo, repudiandae
                provident ab esse excepturi at quo, dolor eum officiis!
                Distinctio harum dolore eveniet minima expedita iusto, numquam
                dignissimos reprehenderit suscipit in maiores tempora quasi.
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[70px] h-[70px] overflow-hidden rounded-full border-4 border-[#FFD02B]">
                <img
                  className="w-full object-cover"
                  src="./images/customer.jpg"
                  alt=""
                />
              </div>
              <h2 className="text-base">Jone Wick</h2>
              <h4 className="text-sm font-[50] ">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={` w-[50vw]  landingpageswiper  relative`}
        >
          <div className="w-[95%] my-[20px] h-fit   py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, voluptates ab ex blanditiis deserunt debitis a enim
                nihil? Omnis et porro quos assumenda nesciunt, nemo, repudiandae
                provident ab esse excepturi at quo, dolor eum officiis!
                Distinctio harum dolore eveniet minima expedita iusto, numquam
                dignissimos reprehenderit suscipit in maiores tempora quasi.
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[70px] h-[70px] overflow-hidden rounded-full border-4 border-[#FFD02B]">
                <img
                  className="w-full object-cover"
                  src="./images/customer.jpg"
                  alt=""
                />
              </div>
              <h2 className="text-base">Jone Wick</h2>
              <h4 className="text-sm font-[50] ">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={` w-[50vw]  landingpageswiper  relative`}
        >
          <div className="w-[95%] my-[20px] h-fit   py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, voluptates ab ex blanditiis deserunt debitis a enim
                nihil? Omnis et porro quos assumenda nesciunt, nemo, repudiandae
                provident ab esse excepturi at quo, dolor eum officiis!
                Distinctio harum dolore eveniet minima expedita iusto, numquam
                dignissimos reprehenderit suscipit in maiores tempora quasi.
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[70px] h-[70px] overflow-hidden rounded-full border-4 border-[#FFD02B]">
                <img
                  className="w-full object-cover"
                  src="./images/customer.jpg"
                  alt=""
                />
              </div>
              <h2 className="text-base">Jone Wick</h2>
              <h4 className="text-sm font-[50] ">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={` w-[50vw]  landingpageswiper  relative`}
        >
          <div className="w-[95%] my-[20px] h-fit   py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, voluptates ab ex blanditiis deserunt debitis a enim
                nihil? Omnis et porro quos assumenda nesciunt, nemo, repudiandae
                provident ab esse excepturi at quo, dolor eum officiis!
                Distinctio harum dolore eveniet minima expedita iusto, numquam
                dignissimos reprehenderit suscipit in maiores tempora quasi.
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[70px] h-[70px] overflow-hidden rounded-full border-4 border-[#FFD02B]">
                <img
                  className="w-full object-cover"
                  src="./images/customer.jpg"
                  alt=""
                />
              </div>
              <h2 className="text-base">Jone Wick</h2>
              <h4 className="text-sm font-[50] ">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={` w-[50vw]  landingpageswiper  relative`}
        >
          <div className="w-[95%] my-[20px] h-fit   py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, voluptates ab ex blanditiis deserunt debitis a enim
                nihil? Omnis et porro quos assumenda nesciunt, nemo, repudiandae
                provident ab esse excepturi at quo, dolor eum officiis!
                Distinctio harum dolore eveniet minima expedita iusto, numquam
                dignissimos reprehenderit suscipit in maiores tempora quasi.
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[70px] h-[70px] overflow-hidden rounded-full border-4 border-[#FFD02B]">
                <img
                  className="w-full object-cover"
                  src="./images/customer.jpg"
                  alt=""
                />
              </div>
              <h2 className="text-base">Jone Wick</h2>
              <h4 className="text-sm font-[50] ">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={` w-[50vw]  landingpageswiper  relative`}
        >
          <div className="w-[95%] my-[20px] h-fit   py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, voluptates ab ex blanditiis deserunt debitis a enim
                nihil? Omnis et porro quos assumenda nesciunt, nemo, repudiandae
                provident ab esse excepturi at quo, dolor eum officiis!
                Distinctio harum dolore eveniet minima expedita iusto, numquam
                dignissimos reprehenderit suscipit in maiores tempora quasi.
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[70px] h-[70px] overflow-hidden rounded-full border-4 border-[#FFD02B]">
                <img
                  className="w-full object-cover"
                  src="./images/customer.jpg"
                  alt=""
                />
              </div>
              <h2 className="text-base">Jone Wick</h2>
              <h4 className="text-sm font-[50] ">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={` w-[50vw]  landingpageswiper  relative`}
        >
          <div className="w-[95%] my-[20px] h-fit   py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, voluptates ab ex blanditiis deserunt debitis a enim
                nihil? Omnis et porro quos assumenda nesciunt, nemo, repudiandae
                provident ab esse excepturi at quo, dolor eum officiis!
                Distinctio harum dolore eveniet minima expedita iusto, numquam
                dignissimos reprehenderit suscipit in maiores tempora quasi.
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[70px] h-[70px] overflow-hidden rounded-full border-4 border-[#FFD02B]">
                <img
                  className="w-full object-cover"
                  src="./images/customer.jpg"
                  alt=""
                />
              </div>
              <h2 className="text-base">Jone Wick</h2>
              <h4 className="text-sm font-[50] ">
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
