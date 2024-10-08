import React, { useState } from 'react';
import Aboutuspage5 from '../Aboutus/Aboutuspage5';
import { HiMiniCheckCircle } from "react-icons/hi2";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Contactpage2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      message: ''
    });
  };

    useGSAP(() => {
      gsap.to(".abp4boxcontainer", {
        x: "-100%",
        ease: "linear",
        duration: 40,
        repeat: -1,
      });
    });

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-[10vw] max-md:px-[5vw] mx-auto w-screen flex flex-col gap-[50px] lg:flex-row lg:space-x-8">
        <div className="flex-1 w-[50%] max-lg:w-full">
          <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
          <p className="mb-8 text-5xl font-semibold">We would love to talk about...</p>
          <ul className="list-disc list-inside text-lg">
            <li className="flex items-center">
              <span className="text-green-500 text-2xl mr-2">
                <HiMiniCheckCircle />
              </span>{" "}
              Partnerships
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-2xl mr-2">
                <HiMiniCheckCircle />
              </span>{" "}
              Personalized demos
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-2xl mr-2">
                <HiMiniCheckCircle />
              </span>{" "}
              Career opportunities
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-2xl mr-2">
                <HiMiniCheckCircle />
              </span>{" "}
              Press queries
            </li>
          </ul>
          <div className="w-[100%] flex  items-center justify-center overflow-x-auto overflow-y-hidden custom-noscrollbar mt-[50px] py-[20px] rounded-lg bg-[#021E43]">
            <div className="abp4boxcontainer w-fit  px-[15px] flex gap-[30px]   ">
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/1.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/2.png"
                  alt=""
                />
              </div>

              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/3.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/4.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/5.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/6.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/7.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/8.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/9.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/10.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/11.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/12.jpg"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/13.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/14.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/15.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/16.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/17.jpg"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/18.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/19.png"
                  alt=""
                />
              </div>
            </div>
            <div className="abp4boxcontainer w-fit  px-[15px] flex gap-[30px]   ">
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/1.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/2.png"
                  alt=""
                />
              </div>

              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/3.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/4.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/5.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/6.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/7.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/8.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/9.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/10.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/11.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/12.jpg"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/13.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/14.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/15.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/16.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/17.jpg"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/18.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/19.png"
                  alt=""
                />
              </div>
            </div>
            <div className="abp4boxcontainer w-fit  px-[15px] flex gap-[30px]   ">
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/1.png"
                  alt=""
                />
              </div>

              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/2.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/3.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/4.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/5.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/6.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/7.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/8.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/9.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/10.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/11.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/12.jpg"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/13.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/14.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/15.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/16.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/17.jpg"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/18.png"
                  alt=""
                />
              </div>
              <div className="abp4box w-[100px] h-[100px] bg-[#fff] rounded-xl flex items-center justify-center ">
                <img
                  className="w-[90%] h-[90%] object-contain"
                  src="./images/marquelogo/19.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-base font-medium "
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-500 text-base rounded-lg block w-full p-2.5"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium "
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-500 text-base rounded-lg block w-full p-2.5"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="whatsapp"
                className="block mb-2 text-base font-medium "
              >
                WhatsApp / Phone Number
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-500 text-base rounded-lg block w-full p-2.5"
                placeholder="+1 (123) 456-7890"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium "
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="shadow-sm bg-gray-50 border border-gray-500 text-base rounded-lg block w-full p-2.5"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactpage2;