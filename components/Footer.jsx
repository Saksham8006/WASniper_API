"use client"

import { FaPhoneAlt } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = '+919069825148';
  const supportNumber = "+918888999682"


  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);



  // Function to scroll to a section
  const scrollToSection = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
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
    <>

      <footer className="bg-neutral-100 text-center text-neutral-600  lg:text-left">

        {/* Main container div: holds the entire content of the footer, including four sections (TW elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="flex flex-col lg:flex-row  justify-around">
            {/* TW elements section */}
            <div className="lg:w-[30%]">
              <h2 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img
                    width="130"
                    height="16"
                    src="./images/WaSniperLogo.webp"
                    alt="WA Sniper"
                    className="custom-logo style-svg entered lazyloaded"
                  />
                </a>

              </h2>
              <p>
                Here you can use rows and columns to organize your footer content.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-start gap-y-[20px]"> */}
            <div className="flex flex-col md:flex-row gap-x-[25px] xl:gap-x-[35px] xll:gap-x-[55px] justify-start gap-y-[20px] mt-[30px]">
              {/* Products section */}
              <div className=" flex flex-col text-start">
                <h3 className="mb-4  text-green-600 justify-center text-start font-extrabold uppercase md:justify-start text-[18px]">
                  WASniper
                </h3>
                <span className="mb-4 text-slate-800 cursor-pointer text-[14px] font-semibold hover:underline hover:text-green-600">
                  <h4 onClick={() => scrollToSection('home')}>HOME</h4>
                </span>
                <span className="mb-4 text-slate-800 cursor-pointer text-[14px] font-semibold hover:underline hover:text-green-600">
                  <h4 onClick={() => scrollToSection('codeeditor')}>API</h4>
                </span>
                <span className="mb-4 text-slate-800 cursor-pointer text-[14px] font-semibold hover:underline hover:text-green-600">
                  <h4 onClick={() => scrollToSection('contact')}>CONTACT US</h4>
                </span>
                <span className="mb-4 text-slate-800 cursor-pointer text-[14px] font-semibold hover:underline hover:text-green-600">
                  <h4 onClick={() => scrollToSection('faq')}>FAQ</h4>
                </span>

              </div>
              {/* Useful links section */}
              <div className=" flex flex-col text-start">
                <h4 className="mb-4   text-green-600 justify-center font-extrabold uppercase md:justify-start text-[18px]">
                  Useful links
                </h4>

                <span className="mb-4 text-slate-800 cursor-pointer text-[14px] font-semibold hover:underline hover:text-green-600">
                  <h4 onClick={() => scrollToSection('codeeditor')}> API DOCUMENTATION</h4>
                </span>
                <span className="mb-4 text-slate-800 cursor-pointer text-[14px] font-semibold hover:underline hover:text-green-600">
                  <h4 onClick={() => scrollToSection('t&c')}>TERMS & CONDITIONS</h4>
                </span>
                <span className="mb-4 text-slate-800 cursor-pointer text-[14px] font-semibold hover:underline hover:text-green-600">
                  <h4 onClick={() => scrollToSection('privacy')}>PRIVACY POLICY</h4>
                </span>
                <span className="mb-4 text-slate-800 cursor-pointer text-[14px] font-semibold hover:underline hover:text-green-600">
                  <h4 onClick={() => scrollToSection('help')}>HELP</h4>
                </span>



              </div>
              {/* Contact section */}
              <div className=" flex flex-col  text-start">
                <h4 className="mb-4  text-green-600 justify-center font-extrabold uppercase md:justify-start text-[18px]">
                  Contact Us
                </h4>
                <p className="mb-4 flex items-center cursor-pointer justify-start md:justify-start">
                  <IoHomeSharp className="text-[23px] mr-2" />
                  <span className="text-slate-800 text-[14px] font-semibold underline hover:text-green-600 "> A-51, Sector-65, Noida 201301</span>
                </p>
                <p className="mb-4 flex items-center justify-start md:justify-start">
                  <IoIosMail className="text-[23px] mr-2" />
                  <Link href="mailto:info@wasniper.com" className="text-slate-800 text-[14px] font-semibold underline hover:text-green-600">info@wasniper.com</Link>.
                </p>

                <p className="mb-4 flex items-center justify-start md:justify-start">
                  <FaPhoneAlt className="text-[23px] mr-2" />
                  <Link href={`tel:${phoneNumber}`} className="text-slate-800 text-[14px] font-semibold underline hover:text-green-600 ">
                    {phoneNumber} (Sales & Info)
                  </Link>
                </p>
                <p className="flex items-center justify-start md:justify-start">
                  <MdSupportAgent className="text-[23px] mr-2" />
                  <Link href={`tel:${supportNumber}`} className="text-slate-800 text-[14px] font-semibold underline hover:text-green-600 ">
                    {supportNumber} (Support)
                  </Link>

                </p>
              </div>
            </div>
          </div>
        </div>
        {/*Copyright section*/}
        <div className="bg-neutral-200 p-6 text-center ">
          <span>Copyright ©{currentYear}</span>
          <a
            className="font-semibold text-slate-600"
            href="https://tw-elements.com/"
          >
            {" "} .All rights reserved.
          </a>
        </div>
      </footer>
    </>

  )
}

export default Footer