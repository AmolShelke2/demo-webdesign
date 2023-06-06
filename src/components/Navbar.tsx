import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const navActiveHandler = () => {
    setNavActive(!navActive);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:px-24 lg:px-36 py-4 bg-slate-100 text-black fixed top-0">
        <h1 className="text-black text-lg capitalize mb-4 border-b border-[#ccc] sm:border-none">
          demo website
        </h1>
        <div className="flex justify-center items-center">
          <ul className="text-black">
            <li>
              <a href="#link1" className="mr-4 border-r border-[#ccc] pr-2">
                Home
              </a>
              <a href="#link2" className="mr-4 border-r border-[#ccc] pr-2">
                About
              </a>
              <a href="#link3">Contact</a>
            </li>
          </ul>
        </div>
        <div
          className="absolute right-2 bottom-5 sm:right-3 sm:bottom-4 md:bottom-7 md:right-4 lg:right-20"
          onClick={navActiveHandler}>
          <AiOutlineMenu className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile Navbar slider */}

      <div
        className={`flex flex-col h-screen bg-[#ccc] text-black fixed right-0 transition-all ${
          navActive ? "w-80" : "w-0"
        } z-32`}>
        <div
          className={`flex flex-row ${
            navActive ? "max-w-[375px]" : "w-0"
          }  px-4 pt-6 border-b border-slate-50`}>
          <div className="flex justify-between w-full mb-4">
            <div>
              <h1 className="text-xl">Menu</h1>
            </div>

            <div onClick={navActiveHandler}>
              <AiOutlineClose className="cursor-pointer text-lg text-black" />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full justify-between items-start px-6 my-8">
          <div>
            <button className="py-4 px-16 bg-blue-600 text-white rounded-md mb-2">
              Sign Up
            </button>
          </div>
          <div className="flex flex-col mt-6">
            <a href="#link1" className="mb-4 border-b border-white pb-2">
              Home
            </a>
            <a href="#link2" className="mb-4 border-b border-white pb-2">
              About
            </a>
            <a href="#link3">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
