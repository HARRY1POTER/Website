import React from "react";
import image from "../assets/image/future.jpg";
import { Images } from "../components/Images";


const Data = [
  {
    title: "GENERAL MANAGER S BALAN BUILDING DIVISION",
    content:
      "Your workers have proven to be exceptionally skilled, detail-oriented, and capable of finishing the project on schedule and under budget. We firmly believe that selecting your company to engage in a design-build agreement was the optimal choice.",
  },
  {
    title: "GENERAL MANAGER, K.S.R PVT. LTD",
    content:
      "We would like to express our heartfelt gratitude to everyone at DEVKI GROUP who contributed to this project for a job well done. We are thrilled with the outcome and eager to collaborate with your capable team once more in the future.",
  },
  {
    title: "GENERAL MANAGER, NCC URBAN",
    content:
      "At our project, DEVKI GROUP has consistently upheld a positive work environment. Their commitment and upbeat attitude motivate us to collaborate with them on all of our next initiatives.",
  },
  {
    title: "GENERAL MANAGER S BALAN BUILDING DIVISION",
    content:
      "We are delighted to share our exceptional experience with DEVKI GROUP. Their team's expertise, meticulous attention to detail, and ability to deliver both on time and within budget made our decision to choose them for our design-build project undeniably the right one.",
  },
  {
    title: "GENERAL MANAGER, K.S.R PVT. LTD",
    content:
      "Our sincere thanks go out to everyone at DEVKI GROUP for their outstanding work. The results far exceeded our expectations, and we are excited about the prospect of working with them again in the future.",
  },
  {
    title: "GENERAL MANAGER, NCC URBAN",
    content:
      "Throughout the project, DEVKI GROUP maintained an excellent work environment, characterized by their dedication and positive attitude. This energy greatly contributed to the success of our project and reinforces our desire to partner with them on upcoming ventures.",
  },
];

export const Portfolio = () => {
  return (
    <>
      <div className="relative">
        <img
          src={image}
          alt="Image"
          className="w-full h-[30rem] sm:h-[40rem] lg:h-[50rem] object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-bold p-4">
          <p className="text-2xl text-orange-400 sm:text-3xl md:text-5xl lg:text-7xl">
            CONSTRUCT YOUR FUTURE
          </p>
          <span className="text-sm text-black sm:text-lg md:text-xl lg:text-2xl mt-3 md:mt-5 max-w-2xl">
            As the general construction, we first create the highest level of
            trust and integrity with our clients. We value our role in the
            success of your project.
          </span>
          <span className="mt-5">
            <a href="/contact">
              <button className="text-base lg:text-lg bg-orange-400 p-3  rounded-full mt-3 md:mt-5">
                Connect With Us
              </button>
            </a>
          </span>
        </div>
      </div>
      <div className="min-h-screen flex justify-center bg-gray-100 p-4 ">
        <div className="container mx-auto px-4">
          <div className="text-center p-5 mb-10">
            <hr className="my-4 border-gray-700 border-2" />
            <h1 className="text-4xl lg:text-6xl font-bold">Our Projects</h1>
            <hr className="my-4 border-gray-700 border-2" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Images?.map((d, index) => (
              <div
                key={index}
                className="relative bg-blue-500 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <img
                  src={d.icon}
                  alt="Card"
                  className="w-full h-[30rem] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl font-bold">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      <div className="flex justify-center items-center p-4 mb-20">
  <div className="container px-4">
      <div className="text-center p-5 mb-10">
            <hr className="my-4 border-gray-700 border-2" />
            <h1 className="text-4xl lg:text-6xl font-bold">Our Client's Reviews</h1>
            <hr className="my-4 border-gray-700 border-2" />
          </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center">
      {Data?.map((d, index1) => (
        <div
          key={index1}
          className="w-full max-w-[30rem] p-6 bg-gray-200 border hover:border-black border-gray-400 rounded-lg  hover:bg-gray-100 hover:shadow-black shadow-2xl  cursor-pointer transition-all duration-300 ease-in-out hover:scale-95"
          role="article"
          aria-labelledby={`title-${index1}`}
          aria-describedby={`content-${index1}`}
        >
          <h5
            id={`title-${index1}`}
            className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900"
          >
            {d.title}
          </h5>
          <p
            id={`content-${index1}`}
            className="font-normal text-sm sm:text-base md:text-lg text-gray-700"
          >
            {d.content}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>












    </>
  );
};
