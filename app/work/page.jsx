"use client"


import { GrLogin } from "react-icons/gr";
import { PiScanBold } from "react-icons/pi";
import { BiSend } from "react-icons/bi";
import AnimatedButton from "@/components/AnimatedButton";
import { useState } from "react";
import { FaCheck } from 'react-icons/fa';
import './Work.css'

const Work = () => {
 
    const [show, setShow] = useState(false);
    const [step, setStep] = useState(1);
    const[current, setCurrent] = useState(0);


    const handleNext = () => {
        setStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
        setCurrent(current + 1);

        setShow(true)
        // console.log("currentnext", current)
        
    };

    const handlePrev = () => {
        setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
        
      

        if(current === 2){
            setCurrent(2 - 1);
            // console.log("Hihhhhhhhhhhhhhhhhhhhhh")
        }else{
            setCurrent(current - 1);
            setShow(false)
        }

    //    console.log("currentprev", current)
      
        
    };




    return (
        <div className='max-w-[1366px] mx-auto px-[24px] py-[96px]'>

            <div className="">
                <h2 className='my-[25px] text-[28px] font-bold text-center'>How does the pricing model work for this platform?</h2>
                <p className="mb-5 mt-[30px] font-bold text-slate-600 sm:text-xl z-10 max-w-[1366px] mx-auto w-full md:w-[78%] text-center">Our platform operates on a transparent fixed-price model, ensuring no hidden fees.
                    Users can enjoy unlimited messaging without any additional costs per message. Additionally,
                    our quick onboarding process takes less than 5 minutes, providing hassle-free access to our services. </p>
            </div>


            <div className="flex flex-row px-[12px] sm:px-[24px]">


                <div className="hidden lg:block multistep-progress multistep-progresssss mt-[60px] ">
                    <div className={`step ${step >= 1 ? 'active' : 'active'}  flex items-center justify-center w-[80px] h-[80px] bg-green-100/70 rounded-full `}>
                        <GrLogin className="text-[50px] " />
                    </div>
                    <div className="line"></div>
                    <div className={`step ${step >= 2 ? 'active' : 'active'}`}>
                        <PiScanBold className="text-[50px] " />
                    </div>
                    <div className="line"></div>
                    <div className={`step ${step >= 3 ? 'active' : 'active'}`}>
                        <BiSend className="text-[50px] " />
                    </div>
                </div>


                <ol className="relative w-full  border-gray-200 my-[50px] ">
                    <li className="mb-10 ms:[15px] lg:ms-[120px]">

                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 pt-[10px]">
                            Create Account{" "}

                        </h3>

                        {/* {!show && step === 1 && current === 0 &&  ( */}
                            <div>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                                    Unlock Pages of Power
                                </time>
                                <p className="mb-4 text-base font-normal text-gray-500 ">
                                    Dive into a multifunctional dashboard featuring interactive charts, a Kanban board, a dynamic calendar,
                                    and pre-order E-commerce & Marketing pages. Access all you need in one place for enhanced productivity and business success.</p>

                                {/* <div className="mt-2">

                                    <button type="button" onClick={handleNext} disabled={step === 3} className="text-green-500 border border-green-600 hover:bg-green-100/40  font-medium  text-sm px-5 py-2.5 me-2 mb-2 ">NEXT</button>
                                </div> */}
                            </div>
                         {/* )}  */}
                    </li>
                    <li className="mb-10 ms:[15px] lg:ms-[120px]">

                        <h3 className={`mb-1 text-lg font-semibold text-gray-900 ${show ? "pt-[120px]" : "pt-[70px] "} `}>
                            Scan QR
                        </h3>

                        {/* {show && step === 2 && current===1 &&( */}
                            <div>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                                    Figma's QR Integration: Design Consistency
                                </time>
                                <p className="text-base font-normal text-gray-500 ">
                                    Scan QR codes for unified design updates between Figma and project components,
                                    ensuring seamless consistency and efficiency in our creative workflow.
                                </p>

                                {/* <div className="mt-3">
                                    <button type="button" onClick={handlePrev} disabled={step === 1} className="text-red-500 border border-red-600 hover:bg-red-100/40 font-medium  text-sm px-5 py-2.5 me-2 mb-2 ">BACK</button>
                                    <button type="button" onClick={handleNext} disabled={step === 3} className="text-green-500 border border-green-600 hover:bg-green-100/40  font-medium  text-sm px-5 py-2.5 me-2 mb-2 ">NEXT</button>
                                </div> */}
                            </div>
                        {/* )} */}
                    </li>
                    <li className="ms:[15px] lg:ms-[120px]">

                        <h3 className={`mb-1 text-lg font-semibold text-gray-900 relative ${show ? "pt-[100px]" : "pt-[90px] "} ${current===1 ? "pt-[60px]" : "pt-[181px] "}`}>
                            Start Sending Messages
                        </h3>
                        {/* {show && step === 3 && current === 2 && ( */}
                            <div>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                                    Effortless Messaging: Tailwind CSS Web Components
                                </time>
                                <p className="text-base font-normal text-gray-500 ">
                                    Begin messaging effortlessly with Tailwind CSS-based web components and interactive features,
                                    simplifying your communication endeavors.
                                </p>


                                {/* <div className="mt-3">
                                    <AnimatedButton />

                                    <button type="button" onClick={handlePrev} disabled={step === 2} className="text-red-500 border border-red-600 hover:bg-red-100/40 font-medium  text-sm px-5 py-2.5 me-2 mb-2 ">BACK</button>
                                </div> */}
                            </div>
                        {/* )} */}
                    </li>
                </ol>

            </div>

        </div>
    )
}

export default Work