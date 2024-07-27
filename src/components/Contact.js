import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dotted from './assets/shape-dotted-light.svg'

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    phoneNumber: '',
    message: ''
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formbold.com/s/unique_form_id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          phoneNumber: '',
          message: ''
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <section id="support" className="px-4 md:px-8 2xl:px-0 mt-10 my-[10%]">
        <div className="relative mx-auto max-w-6xl px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0  h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[white] z-10 "></div>
          <div className="absolute bottom-[-255px] left-0 h-full w-full">
            <img src={dotted} alt="Dotted" className="" />
          </div>

          <div className="z-[30] flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20 p-20">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-[90%] rounded-lg bg-white p-7.5 shadow-lg md:w-3/5 lg:w-3/4 xl:p-10 z-20"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black xl:text-4xl">
                Send a message
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14 mt-10">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    className="w-full border-b border-gray-300 bg-transparent pb-3.5 focus:border-blue-500 focus:placeholder:text-black focus:outline-none lg:w-1/2"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address"
                    className="w-full border-b border-gray-300 bg-transparent pb-3.5 focus:border-blue-500 focus:placeholder:text-black focus:outline-none lg:w-1/2"
                    required
                  />
                </div>

                <div className="mb-4 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full border-b border-gray-300 bg-transparent pb-3.5 focus:border-blue-500 focus:placeholder:text-black focus:outline-none lg:w-1/2"
                    required
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    className="w-full border-b border-gray-300 bg-transparent pb-3.5 focus:border-blue-500 focus:placeholder:text-black focus:outline-none lg:w-1/2"
                  />
                </div>

                <div className="mb-4 flex">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows={4}
                    className="w-full border-b border-gray-300 bg-transparent focus:border-blue-500 focus:placeholder:text-black focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  aria-label="send message"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-4 mt-4 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho"
                >
                  Send Message
                  <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                </button>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-2/5 md:p-7.5 lg:w-1/4 ml-20 z-[30]"
            >
              <h2 className="mb-14 text-3xl font-semibold text-black xl:text-4xl">
                Find us
              </h2>

              <div className="mb-7">
                <h3 className="mb-4 text-lg font-medium text-black">
                  Our Location
                </h3>
                <p>Rai Ka Bagh Old Police Line MIA Phase 2 , Basni H-676</p>
              </div>
              <div className="mb-7">
                <h3 className="mb-4 text-lg font-medium text-black">
                  Email Address
                </h3>
                <p>
                  <a href="mailto:dr.ruks768@gmail.com">dr.ruks768@gmail.com</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-lg font-medium text-black">
                  Phone Number
                </h4>
                <p>
                  <a href="tel:+917028828831">+91 9460768988</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
