// "use client"

// // Import necessary dependencies
// import Link from 'next/link';
// import { useState, useRef, useEffect } from 'react';
// import { IoMenuSharp } from "react-icons/io5";
// import { RxCross2 } from "react-icons/rx";
// // Create a new functional component for the Navbar
// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const navbarRef = useRef(null);

//    const toggleMenu = () => {
//     setOpen(false);
//   };

//   // Function to scroll to a section
//   const scrollToSection = (id) => {
//     const targetElement = document.getElementById(id);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' });
//       setOpen(false);
//     }
//   };

//   useEffect(() => {
//     // Add an event listener to close the menu when clicking outside the navbar
//     const handleClickOutside = (event) => {
//       if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [navbarRef]);

//   return (
//     <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img
//             width="130"
//             height="16"
//             src="https://wasniper.com/wp-content/uploads/2022/12/c2130b70992c27c8759d106616d61573-1-1.png"
//             alt="WA Sniper"
//             className="custom-logo style-svg entered lazyloaded"
//           />
//         </a>

//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <button
//             onClick={() => setOpen(!open)}
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//             aria-controls="navbar-sticky"
//             aria-expanded={open}
//           >
//             <span className="sr-only">Open main menu</span>

         
//               <IoMenuSharp className={`text-[40px] ${open ? "hidden": " "}`} />
       
//               <RxCross2 className={`text-[40px] ${open ? "block": " hidden"}`} />
          

//           </button>
//         </div>

//         <div
//           className={`${open ? 'block' : 'hidden'
//             } items-center justify-between w-full md:flex md:w-auto md:order-1`}
//           id="navbar-sticky"
//           ref={navbarRef}
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
//             <li className="block py-2 px-3 uppercase cursor-pointer text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 ">
//               <a onClick={() => scrollToSection('home')}>Home</a>
//             </li>
//             <li className="block py-2 px-3 uppercase cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">
//               <a onClick={() => scrollToSection('work')}>Work</a>
//             </li>
//             <li className="block py-2 px-3 uppercase cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">
//               <a onClick={() => scrollToSection('codeeditor')}>WhatsApp API</a>
//             </li>
//             <li className="block py-2 px-3 uppercase cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">
//               <a onClick={() => scrollToSection('usecases')}>Use Cases</a>
//             </li>
//             <li className="block py-2 px-3 uppercase cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">
//               <a onClick={() => scrollToSection('pricing')}>Pricing</a>
//             </li>
//             <li className="block py-2 px-3 uppercase cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">
//               <a onClick={() => scrollToSection('faq')}>Faq</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client"

// Import necessary dependencies
import { useState, useRef, useEffect } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

// Create a new functional component for the Navbar
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

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
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            width="130"
            height="16"
            src="https://wasniper.com/wp-content/uploads/2022/12/c2130b70992c27c8759d106616d61573-1-1.png"
            alt="WA Sniper"
            className="custom-logo style-svg entered lazyloaded"
          />
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={open}
          >
            <span className="sr-only">Open main menu</span>
            {open ? (
              <RxCross2 className="text-[40px]" />
            ) : (
              <IoMenuSharp className="text-[40px]" />
            )}
          </button>
        </div>

        <div
          className={`${
            open ? 'block' : 'hidden'
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
          ref={navbarRef}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li className="block py-2 px-3 uppercase cursor-pointer text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 ">
              <a onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li className="block py-2 px-3 uppercase cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">
              <a onClick={() => scrollToSection('work')}>Work</a>
            </li>
            <li className="block py-2 px-3 uppercase cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">
              <a onClick={() => scrollToSection('codeeditor')}>WhatsApp API</a>
            </li>
            <li className="block py-2 px-3 uppercase cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">
              <a onClick={() => scrollToSection('usecases')}>Use Cases</a>
            </li>
            <li className="block py-2 px-3 uppercase cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">
              <a onClick={() => scrollToSection('pricing')}>Pricing</a>
            </li>
            <li className="block py-2 px-3 uppercase cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 ">
              <a onClick={() => scrollToSection('faq')}>Faq</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

