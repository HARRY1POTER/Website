import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { HiBarsArrowDown, HiBarsArrowUp } from "react-icons/hi2";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import { GrResources } from "react-icons/gr";
import logo from "../assets/image/IMG-20240805-WA0010.jpg"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    
      <nav className={` z-50 ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="title text-lg font-bold">
        <img src={logo} alt="logo" className="h-[29px]  "/>

        </Link>
        <div
          className="menu text-black "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="mt-2">
              <HiBarsArrowUp size={30} />
            </span>
          ) : (
            <span className="mt-2">
              <HiBarsArrowDown size={30} />
            </span>
          )}
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li className="flex">
            <NavLink to="/" className="" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="flex gap-2">
                <FaHome className="mt-1" />
                <span>Home</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="flex gap-2 ">
                <AiFillProject className="mt-1" />
                <span> Portfolio</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/capabilities" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="flex gap-2">
                <GrResources className="mt-1" />
                <span> Services & Resources </span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="flex gap-2">
                <FaInfoCircle className="mt-1" />
                <span> About </span>
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="flex gap-2">
                <IoMdContact className="mt-1" />
                <span> Contact</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

/* 
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBarsArrowDown, HiBarsArrowUp, HiOutlineBars3BottomLeft, HiOutlineBars3BottomRight } from "react-icons/hi2";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-50 bg-white p-4 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-black">
          Website
        </Link>
        <div
          className="text-black cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <HiOutlineBars3BottomLeft size={30} />
          ) : (
            <HiOutlineBars3BottomRight size={30} />
          )}
        </div>
        <ul
          className={`absolute top-14 right-0 text-center bg-white w-full md:static md:flex md:items-center md:w-auto transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0 overflow-x-hidden" : "translate-x-full overflow-x-hidden"
          } md:translate-x-0`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2 text-black border-b-2 transition-all duration-300 ease-in-out hover:border-red-500 ${
                  isActive ? 'border-red-500 font-bold ' : 'border-transparent'
                }` 
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `block px-4 py-2 text-black border-b-2 transition-all duration-300 ease-in-out hover:border-red-500 ${
                  isActive ? 'border-red-500 font-bold' : 'border-transparent'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
               className={({ isActive }) =>
                `block px-4 py-2 text-black border-b-2 transition-all duration-300 ease-in-out hover:border-red-500 ${
                  isActive ? 'border-red-500 font-bold' : 'border-transparent'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
               className={({ isActive }) =>
                `block px-4 py-2 text-black border-b-2 transition-all duration-300 ease-in-out hover:border-red-500 ${
                  isActive ? 'border-red-500 font-bold' : 'border-transparent'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
               className={({ isActive }) =>
                `block px-4 py-2 text-black border-b-2 transition-all duration-300 ease-in-out hover:border-red-500 ${
                  isActive ? 'border-red-500 font-bold' : 'border-transparent'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
 */
