import React, { useState, useEffect } from "react";
import slider1 from "../assets/image/slider1.jpg";
import slider2 from "../assets/image/slider3.jpg";
import slider4 from "../assets/image/slider4.jpg";
import slider5 from "../assets/image/slider5.jpg";
import { Data } from "../components/data";
import home from "../assets/image/home.jfif";
import design from "../assets/image/design.jpg";
import img from "../assets/image/23.jpg";

const slides = [slider1, slider2, slider4, slider5];

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className=" relative w-full h-64 sm:h-80 md:h-96 lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 w-full h-">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide}
                className="w-full h-full object-cover object-center"
                alt={`Slide ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        {/* <header className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-teal-900">Welcome to Walls & Dreams</h1>
          <p>Your Design-Build Journey Begins Here!</p>
        </div>
      </header>
       */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/*  <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-teal-900 text-white p-6 rounded shadow-md text-center">
            <h2 className="text-xl font-bold">Architectural</h2>
            <p>Creating Spaces that Inspire</p>
          </div>
          <div className="bg-teal-900 text-white p-6 rounded shadow-md text-center">
            <h2 className="text-xl font-bold">Construction</h2>
            <p>Building Dreams with Quality Construction Solutions</p>
          </div>
          <div className="bg-teal-900 text-white p-6 rounded shadow-md text-center">
            <h2 className="text-xl font-bold">Interior</h2>
            <p>Transforming Interiors with Unique Design Elements</p>
          </div>
        </section> */}

          <section className="text-center">
            <h2 className="text-5xl font-bold mb-4">
              Let's Build Your <span className="text-teal-900">Dream Home</span>{" "}
              Together
            </h2>
            <p className="max-w-3xl mx-auto mb-8 text-xl">
              We believe that design is not just about aesthetics but also about
              functionality, sustainability, and innovation. Our team of
              architects, designers, and builders work collaboratively to bring
              your vision to life.
            </p>
            <img
              src={img}
              alt="Interior Design"
              className="w-full rounded shadow-md"
            />
          </section>
        </main>
      </div>
      {/* <div className="p-4">
      
        <div className="text-center text-xl font-bold mb-4">HELLO</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-gray-200 p-4">HELLO</div>
          <div className="bg-gray-200 p-4">HELLO</div>
          <div className="bg-gray-200 p-4">HELLO</div>
          <div className="bg-gray-200 p-4">HELLO</div>
        </div>
      </div> */}
      <div className="2xl:container 2xl:mx-auto lg:py-20 lg:px-24 md:py-12 md:px-6 py-9 px-4">
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-6/12 flex flex-col justify-center">
            <h2 className="w-full  lg:text-5xl text-4xl lg:leading-10 leading-9">
              Let’s Build Your New
              <br /> <span className="font-bold text-cyan-400">
                Dream Home
              </span>{" "}
              Together
            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
              At Walls And Dreams, we handle all aspects of the construction.
              Many people think that hiring an architect or home designer is the
              first step in building their dream home. However, engaging a
              builder before you design your home is one of the wisest choices
              you can make.
              <br />
              <br />
              Our company provides complete end to end home design and build
              packages in Noida, Greater Noida and Ghaziabad. If you have been
              searching for creative, custom home designers, real-world building
              expertise and the highest levels in construction management in
              Delhi-NCR region, then choose us.
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <img
              className="  w-full "
              src={home}
              alt="people discussing on board"
            />
          </div>
        </div>
      </div>
      <div className="">
        <section className="py-16 bg-gray-100" id="services">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="flex flex-wrap -mx-4">
              {Data?.map((d, index) => (
                <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                  <div className="bg-white h-[27rem] p-6 rounded-lg  text-center hover:shadow-2xl shadow-black cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                    <img
                      src={d.icon}
                      alt={d.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <h3 className="text-2xl font-semibold mb-4">{d.title}</h3>
                    <p className="text-gray-700">{d.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="2xl:container 2xl:mx-auto lg:py-20 lg:px-24 md:py-12 md:px-6 py-9 px-4">
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={design}
              alt="people discussing on board"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              When We Build Your Dream Home. We Build It Like This Is Our Home
            </h2>
            <p className="text-base text-gray-600 leading-6">
              No two homes built by us are ever the same. That’s because every
              home is uniquely built for you. With high quality of craftsmanship
              and energy efficient materials, we design and build your home as
              per your lifestyle. Whether you choose one of our construction
              packages or personalize it, we offer that flexibility to each of
              our customers. Once you’ve finalized all of your design selections
              and our construction package, we’ll start building your dream
              home.
              <br />
              <br />
              Walls & Dreams offers a unique build solution. You will still get:
              <br />
              <br />
              </p>
              <p className="text-gray-600 leading-6 text-sm">

          
              <li>
                Professional Architecture and structural engineering expertise,
                dedicated to your project.
                <li>Accurate and detailed estimation.</li>
                <li>
                  Real time monitoring of progress and budget consumption
                  through our digital platform.
                </li>
                <li>
                  We provide wiht 500 + quality cheks conducted by quality
                  engineers
                </li>
              </li>
              </p>
         
          </div>
        </div>
      </div>
    </>
  );
};
