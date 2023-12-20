// "use client"

// import { useEffect, useRef } from 'react';
// import confetti from 'canvas-confetti';

// const ConfettiButton = () => {
//   const buttonRef = useRef(null);

//   const handleClick = () => {
//     const rect = buttonRef.current.getBoundingClientRect();
//     const center = {
//       x: rect.left + rect.width / 2,
//       y: rect.top + rect.height / 2,
//     };
//     const origin = {
//       x: center.x / window.innerWidth,
//       y: center.y / window.innerHeight,
//     };

//     confettiExplosion(origin);
//   };

//   const confettiExplosion = (origin) => {
//     fire(0.25, { spread: 26, startVelocity: 55, origin });
//     fire(0.2, { spread: 60, origin });
//     fire(0.35, { spread: 100, decay: 0.91, origin });
//     fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, origin });
//     fire(0.1, { spread: 120, startVelocity: 45, origin });
//   };

//   const fire = (particleRatio, opts) => {
//     confetti(
//       Object.assign({}, defaults, opts, {
//         particleCount: Math.floor(200 * particleRatio),
//       })
//     );
//   };

//   const defaults = {
//     disableForReducedMotion: true,
//   };

//   useEffect(() => {
//     const triggers = document.querySelectorAll('.js-confetti');
//     Array.from(triggers).forEach((trigger) => {
//       trigger.addEventListener('click', handleClick);
//     });

//     return () => {
//       Array.from(triggers).forEach((trigger) => {
//         trigger.removeEventListener('click', handleClick);
//       });
//     };
//   }, []);

//   return (
//     <button ref={buttonRef}   className="btn js-confetti text-white bg-green-600 hover:bg-green-7 00 font-medium  text-sm px-5 py-2.5 me-2 mb-2 ">
//       FINISH
//     </button>
//   );
// };

// export default ConfettiButton;
