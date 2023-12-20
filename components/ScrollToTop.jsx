// "use client"

// import { useState, useEffect } from 'react';

// import { BsFillArrowUpCircleFill} from 'react-icons/bs'

// const ScrollToTopButton = () => {
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     // Add an event listener to check the scroll position
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleScroll = () => {
//     // Check the scroll position, and show/hide the button accordingly
//     if (window.pageYOffset > 100) {
//       setShowButton(true);
//     } else {
//       setShowButton(false);
//     }
//   };

//   const scrollToTop = () => {
//     // Scroll to the top of the page
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <button
//     type='button'
//       className={`fixed right-5 bottom-4 z-10 ${showButton ? 'block' : 'hidden'}  text-green-600 text-4xl hover:text-5xl py-2 px-4 rounded-full transition-all`}
//       onClick={scrollToTop}
//     >
//      <BsFillArrowUpCircleFill />
//     </button>
//   );
// };

// export default ScrollToTopButton;
