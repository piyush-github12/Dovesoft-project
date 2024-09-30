import React, { useState } from 'react';

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

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl font-['Epilogue'] tracking-tight font-extrabold text-center ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 text-base">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
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
    </section>
  );
};

export default Contactpage2;