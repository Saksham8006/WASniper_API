"use client"

// Import necessary dependencies
import { useState, useRef, useEffect } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

// Create a new functional component for the Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to scroll to a section
  const scrollToSection = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add an event listener to close the menu when clicking outside the navbar
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">

      {/* for desktop */}
      <div className="hidden max-w-screen-xl md:flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            width="130"
            height="16"
            src="./images/WaSniperLogo.webp"
            alt="WA Sniper"
            className="custom-logo style-svg entered lazyloaded"
          />
        </a>

       

        <div
          className="items-center justify-between w-full md:flex  md:w-auto md:order-1"
          id="navbar-sticky"
          ref={navbarRef}
        >
          <ul className=" p-0  font-medium  rounded-lg  space-x-8 rtl:space-x-reverse  flex flex-row mt-0  bg-white ">
            <li className="block  uppercase cursor-pointer  rounded bg-transparent text-green-700 p-0">
              <span onClick={() => scrollToSection('home')}>Home</span>
            </li>
            <li className="block  uppercase cursor-pointer  rounded bg-transparent text-green-700 p-0 ">
              <span onClick={() => scrollToSection('work')}>Work</span>
            </li>
            <li className="block  uppercase cursor-pointer  rounded bg-transparent text-green-700 p-0 ">
              <span onClick={() => scrollToSection('codeeditor')}>WhatsApp API</span>
            </li>
            <li className="block  uppercase cursor-pointer  rounded bg-transparent text-green-700 p-0 ">
              <span onClick={() => scrollToSection('usecases')}>Use Cases</span>
            </li>
            <li className="block  uppercase cursor-pointer  rounded bg-transparent text-green-700 p-0 ">
              <span onClick={() => scrollToSection('pricing')}>Pricing</span>
            </li>
            <li className="block  uppercase cursor-pointer  rounded bg-transparent text-green-700 p-0 ">
              <span onClick={() => scrollToSection('faq')}>Faq</span>
            </li>
          </ul>
        </div>
      </div>

      {/* For mobile screen */}

      <div className="max-w-screen-xl flex md:hidden flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            width="130"
            height="16"
            src="./images/WaSniperLogo.webp"
            alt="WA Sniper"
            className="custom-logo style-svg entered lazyloaded"
          />
        </a>

        <button type='button' onClick={toggleMenu} aria-label="List Menu">
          { !isOpen ? (
          <IoMenuSharp className='text-[35px] border border-green-600 p-1 text-slate-800 '/>
          ):(
          <RxCross2 className='text-[35px] border border-green-600 p-1 text-slate-800 '/>
          )}
        </button>

       { isOpen && (

        <div
          className="items-center justify-between w-full  flex-col order-1"
          id="navbar-sticky"
          ref={navbarRef}
        >
          <ul className=" px-2 py-4  font-medium  space-x-8 gap-y-[20px]  flex flex-col mt-[20px] mb-[20px] bg-gray-50 ">
            <li className="block ml-[32px] uppercase cursor-pointer  rounded bg-transparent text-slate-700 hover:text-green-600 p-0">
              <span onClick={() => scrollToSection('home')}>Home  M</span>
            </li>
            <li className="block  uppercase cursor-pointer  rounded bg-transparent text-slate-700 hover:text-green-600 p-0 ">
              <span onClick={() => scrollToSection('work')}>Work</span>
            </li>
            <li className="block  uppercase cursor-pointer  rounded bg-transparent text-slate-700 hover:text-green-600 p-0 ">
              <span onClick={() => scrollToSection('codeeditor')}>WhatsApp API</span>
            </li>
            <li className="block  uppercase cursor-pointer  rounded bg-transparent text-slate-700 hover:text-green-600 p-0 ">
              <span onClick={() => scrollToSection('usecases')}>Use Cases</span>
            </li>
            <li className="block  uppercase cursor-pointer  rounded bg-transparent text-slate-700 hover:text-green-600 p-0 ">
              <span onClick={() => scrollToSection('pricing')}>Pricing</span>
            </li>
            <li className="block  uppercase cursor-pointer  rounded bg-transparent text-slate-700 hover:text-green-600 p-0 ">
              <span onClick={() => scrollToSection('faq')}>Faq</span>
            </li>
          </ul>
        </div>

)}
      </div>



    </nav>
  );
};

export default Navbar;

