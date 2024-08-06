import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/image/IMG-20240805-WA0010.jpg"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white ">
      {/* Social Media Section */}
      <section className="border-t  border-b border-gray-700 py-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <span className="font-semibold">Connect with us:</span>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="/"
              className="text-gray-400 hover:text-blue-500"
              aria-label="Facebook"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-blue-400"
              aria-label="Twitter"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-red-500"
              aria-label="Google"
            >
              <FcGoogle size={22} />
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-pink-500"
              aria-label="Instagram"
            >
              <AiFillInstagram size={22} />
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Content Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col  ">
            {/* Company Info */}
            <div className="flex-1 mb-8 lg:mb-0  ">
                <img src={logo} alt="logo" className="h-[29px] bg-white rounded "/>
              <h6 className="text-lg mt-3 font-bold mb-4 flex items-center">
                <i className="fas fa-gem text-gray-400 mr-2"> DEVKI GROUP</i>
               
              </h6>
              <p className="text-gray-300">
                Our company has always worked on improving and initiating growth
                by producing quality products locally that enhance our customers
                need. As Devki Group, we continue to give the best of all to our
                customers, staff, employees for their and a better tomorrow.{" "}
              </p>
            </div>
            <div className="border-b border-gray-700 mt-6"/>
            
      

   

            <footer className="bg-white dark:bg-gray-900">
              <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                      Company
                    </h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <a href="/" className="hover:underline">
                          Home
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="/portfolio" className="hover:underline">
                          Portfolio
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="/capabilities" className="hover:underline">
                          Services & Resources
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="/about" className=" hover:underline">
                          About
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="/contact" className=" hover:underline">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                      Help center
                    </h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <a href="#" className="hover:underline">
                          Discord Server
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">
                          Twitter
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">
                          Facebook
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                

<div className="  ">
                      <h2 className="text-sm  md:text-base text-white font-semibold">
                        Address
                      </h2>
                      <p className="text-gray-400 text-base md:text-base leading-8 tracking-wider mt-5">
                        B104, 1st Floor, Gulmohar Apartment <br />
                        Above SBI Bank East Street Camp,
                        <br />
                        Pune - 411 001
                      </p>
                    </div>

                  <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                      Get in TouchS
                    </h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <h2 className="mb-2 text-white">Phone:</h2>
                      <li className=" ">
                        <span className="hover:underline cursor-pointer">
                          +91 9822014861 <br /> <br />
                        </span>
                        <span className="hover:underline cursor-pointer">
                          +91 9822347333 <br />
                          <br />
                        </span>
                        <span className="hover:underline cursor-pointer">
                          +91 9822595591 <br />
                          <br />
                        </span>
                      </li>
                  
                      <h2 className="mb-4 text-white">Email:</h2>
                      <li className="mb-4 hover:underline cursor-pointer">
                        ncp772@gmail.com
                      </li>
                      <li className="mb-4 hover:underline cursor-pointer">
                        Parmargr65@gmail.com
                      </li>
                      <li className="mb-4 hover:underline cursor-pointer">
                        ncp776@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
            
          </div>
          
        </div>
        
      </section>
      

      {/* Copyright Section */}
      <div className="bg-gray-800 text-center py-4 text-gray-400">
        © {currentYear}Construction Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
