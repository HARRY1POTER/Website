/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import image from "../assets/image/resources.jpeg";
import { Service_Data } from "../components/Service_Data";
import slider1 from "../assets/image/machine/Batching-Plants.webp";
import slider5 from "../assets/image/machine/images.jfif";
import slider4 from "../assets/image/machine/img.jfif";
import slider3 from "../assets/image/machine/Types-of-Concrete-Pump.jpg";
import slider2 from "../assets/image/machine/Tower-Cranes.jpg";
import slider6 from "../assets/image/WhatsApp Image 2024-07-29 at 7.58.11 PM.jpeg";

const images = [slider1, slider2, slider3, slider4, slider5, slider6];

export const Capabilities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      {" "}
      <div className="relative overflow-hidden">
        {/* Image section */}
        <img
          src={image}
          alt="About Image"
          className="w-full h-[70vh] object-cover object-center"
        />

        {/* Text section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 lg:p-10 text-center space-y-6">
          <span className="text-white text-xl lg:text-5xl font-bold gradient-text">
            We design our spaces, and in turn, they define us.
          </span>
          {/*     <span className=" text-base font-bold lg:text-xl max-w-3xl ">
      We exist to make our clients’ lives easier by providing excellent
      and value-added construction services. To ensure this, all other
      stakeholder relationships are fulfilled with the same purpose in
      mind.
    </span> */}
        </div>
      </div>
      <div className="bg-gray-100 py-8">
        <div className="text-center p-5 mb-10">
          <hr className="my-4 border-gray-700 border-2" />
          <h1 className="text-4xl lg:text-6xl font-bold">Our Services</h1>
          <hr className="my-4 border-gray-700 border-2" />
        </div>

        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 ">
            {Service_Data?.map((d) => (
              <div
                key={d.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={d.icon}
                  alt={d.title}
                  className="w-full h-44 object-cover cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold mb-2 w-fit hover:text-yellow-500 cursor-pointer">
                    {d.title}
                  </h2>
                  <p className="text-xl text-gray-600">{d.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
      <div className="text-center p-5 mb-10">
        <hr className="my-4 border-gray-700 border-2" />
        <h1 className="text-4xl lg:text-6xl font-bold">Our Resources</h1>
        <hr className="my-4 border-gray-700 border-2" />
      </div>
      <div>
        <div className="flex mb-20  justify-center items-center mb-24ffffff px-4 py-">
          {/* Container for the carousel */}
          <div className="relative shadow-2xl shadow-black  w-full max-w-3xl overflow-hidden rounded-lg">
            {/* Carousel Wrapper */}
            <div className="relative  h-52 md:h-[25rem] overflow-hidden rounded-lg">
              {/* Flex container for slides */}
              <div
                className="flex  transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full  object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Previous Button */}
            <button
              type="button"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              &lt;
            </button>

            {/* Next Button */}
            <button
              type="button"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={handleNext}
              aria-label="Next slide"
            >
              &gt;
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
