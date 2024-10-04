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
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className={` bg-white text-white text-center  `}
      >
        <SwiperSlide className={` w-[50vw]  landingpageswiper  relative`}>
          <div className="w-[95%] my-[20px] min-h-[350px] flex flex-col justify-between  py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                The OTP SMS service from Dove Soft Limited has been a
                game-changer for our online business. The delivery is always
                prompt, and the security features ensure a safe experience for
                our customers.
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[100px] h-[100px] overflow-hidden rounded-full border-4 border-[#FFD02B]">
                <img
                  className="w-full object-cover"
                  src="./images/customer.jpg"
                  alt=""
                />
              </div>
              <h2 className="text-base">
                Fintech Products and Solutions India Pvt Ltd
              </h2>
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={` w-[50vw]  landingpageswiper  relative`}>
          <div className="w-[95%] my-[20px] min-h-[350px] flex flex-col justify-between  py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                The failover feature with nocode workflow builder has been a
                lifesaver. My campaigns seamlessly switch to multiple channels,
                ensuring maximum reach.
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-full border-4 bg-white border-[#FFD02B]">
                <img
                  className="w-[90%] "
                  src="./images/marquelogo/7.png"
                  alt=""
                />
              </div>
              <h2 className="text-base">Gurukrupa Realcon</h2>
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={` w-[50vw]  landingpageswiper  relative`}>
          <div className="w-[95%] my-[20px] min-h-[350px] flex flex-col justify-between  py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                Before using this platform, our marketing campaigns were a
                patchwork of different tools. Now, we have a centralized
                solution that allows us to create, manage, and optimize all our
                campaigns from one place
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-full border-4 bg-white border-[#FFD02B]">
                <img
                  className="w-[100%] object-cover"
                  src="./images/marquelogo/khadims.webp"
                  alt=""
                />
              </div>
              <h2 className="text-base">khadims</h2>
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={` w-[50vw]  landingpageswiper  relative`}>
          <div className="w-[95%] my-[20px] min-h-[350px] flex flex-col justify-between  py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                The drag-and-drop interface makes it incredibly easy to design
                complex workflows. We've been able to create highly personalized
                customer journeys that drive conversions.
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-full border-4 bg-white border-[#FFD02B]">
                <img
                  className="w-[90%] object-cover"
                  src="./images/marquelogo/11.png"
                  alt=""
                />
              </div>
              <h2 className="text-base">Bikanervala</h2>
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={` w-[50vw]  landingpageswiper  relative`}>
          <div className="w-[95%] my-[20px] min-h-[350px] flex flex-col justify-between  py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                The platform's(mobiCOMM) analytics and reporting features are
                invaluable. We can track the performance of our campaigns in
                real-time and make data-driven decisions.
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-full border-4 bg-white border-[#FFD02B]">
                <img
                  className="w-[90%] object-cover"
                  src="./images/marquelogo/2.png"
                  alt=""
                />
              </div>
              <h2 className="text-base">Zee Limited</h2>
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={` w-[50vw]  landingpageswiper  relative`}>
          <div className="w-[95%] my-[20px] min-h-[350px] flex flex-col justify-between  py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                Our previous communication platform was unreliable and prone to
                outages. With this solution, we've experienced 100% uptime and
                have been able to maintain consistent communication with our
                customers.
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-full border-4 bg-white border-[#FFD02B]">
                <img
                  className="w-[80%] object-cover"
                  src="./images/marquelogo/21.webp"
                  alt=""
                />
              </div>
              <h2 className="text-base">INOX Leisure</h2>
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={` w-[50vw]  landingpageswiper  relative`}>
          <div className="w-[95%] my-[20px] min-h-[350px] flex flex-col justify-between  py-[20px] px-[5vw]  rounded-xl border-4 border-white  ">
            <div className="min-h-[60%] max-sm:h-[70%] overflow-hidden ">
              <div className=" ">
                <img className="w-[30px] " src="./images/quotes.png" alt="" />
              </div>
              <h2 className="text-base max-sm:text-base leading-[28px] italic  relative ">
                Our company was struggling with high customer churn rates. By
                implementing a chatbot-powered support system, we were able to
                reduce churn by 25% and improve customer satisfaction.
              </h2>
            </div>
            <div className="min-h-[40%] mt-[20px] flex flex-col items-center justify-end gap-1">
              <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-full border-4 bg-white border-[#FFD02B]">
                <img
                  className="w-[90%]  object-cover"
                  src="./images/marquelogo/9.png"
                  alt=""
                />
              </div>
              <h2 className="text-base">EaseMyTrip</h2>
             
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
