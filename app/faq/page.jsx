"use client"

import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { FiPhoneCall } from "react-icons/fi";

const Section9 = () => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(1);

    const handleCurrentLi = (index) => {
        setCurrent(index);
        setOpen(!open);
    };

    const handleLeave = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* component */}
            <div className="xll:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 bg-green-100/40 my-[100px]">
                <div className="max-w-[1366px] mx-auto ">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-center text-slate-800 text-[32px] md:text-[38px] ls:text-[40px] lm:text-[42px] font-[900] leading-[1.375em] md:leading-[1.211em] lm:leading-[1.333em] tracking-[-.024em] md:tracking-[-.042em] mb-[16px] lm:mb-[24px]">
                            FAQs
                        </h2>
                        <div className="relative mr-[120px]">
                            <svg
                                className="absolute bottom-0 left-0"
                                width="225"
                                height="16"
                                viewBox="0 0 225 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M224.931 15.1987C151.063 1.40293 47.4825 6.23252 4.92601 10.3718L0.241161 6.21004C91.4615 -6.66766 188.043 6.83677 224.931 15.1987Z" fill="#2b784c"></path>
                            </svg>
                        </div>
                    </div>
                    <p className='text-slate-800 text-[18px] md:text-[21px] text-center'>Looking to learn more about SEO audit services? Check out our FAQs:</p>

                    <div className="flex p-6 md:flex-row flex-col md:space-x-8 md:mt-8 mt-5">
                        <div className="md:w-7/12 lg:w-full w-full md:mt-0 sm:mt-14 mt-10">
                            {/* Shipping Section */}
                            <div>
                                <div className="flex justify-between items-center cursor-pointer">
                                    <h3 className="text-[20px] md:text-[22px] ls:text-[24px] leading-[1.40em] md:leading-[1.455em] ls:leading-[1.333em] hover:underline text-slate-800 block relative py-[32px] pr-[70px] pl-0 font-[800] tracking-[-.018em]">
                                        What is WAsnipper?
                                    </h3>
                                    <button
                                        type='button'
                                        aria-label="toggle"
                                        className={`text-white  bg-green-700 rounded-full p-3 cursor-pointer ${current === 0 && open ? 'rotate-180 duration-500' : ''
                                            }`}
                                        onClick={() => handleCurrentLi(0)}
                                    >
                                        <FaAngleDown className='text-[21px]' />
                                    </button>
                                </div>

                                {current === 0 && !open && (
                                    <div id="para1">
                                        <p
                                            id="para1"
                                            className="font-normal text-base leading-6 text-slate-800 mt-4 w-11/12 mb-5"
                                        >
                                            <span className='text-[18px]'>Unveiling WAsniper: Your Ultimate WhatsApp Messaging Solution</span>

                                            <ul className='mt-[12px] ml-[22px] space-y-[10px] list-disc'>
                                                <li>WhatsApp API Gateway: WAsniper serves as a reliable WhatsApp API provider, granting access and connectivity to the extensive messaging network.</li>
                                                <li>Customer Engagement: It facilitates seamless communication with customers through the popular WhatsApp platform, ensuring effective interaction.</li>
                                                <li>Versatile Integration: Whether for CRM/ERP systems, chatbots, or diverse platforms, WAsniper offers a robust foundation to construct tailored WhatsApp solutions.</li>
                                                <li>Optimal Choice: For businesses seeking efficient and customizable methods to connect with clients via WhatsApp, WAsniper emerges as the ideal choice.</li>

                                            </ul>

                                        </p>

                                        <p className="font-normal text-base leading-6 text-slate-800 mt-4 w-11/12">If you are looking to contact your customers via WhatsApp or build your own WhatsApp solution (whether it is a CRM/ERP system, a chatbot, or some other platform), WA Sniper will be your perfect choice.</p>
                                    </div>
                                )}
                            </div>
                            <hr className="my-1 bg-[#2b784c] border-[#2b784c]" />
                            {/* Returns Section */}
                            <div>
                                <div className="flex justify-between items-center cursor-pointer">
                                    <h3 className="text-[20px] md:text-[22px] ls:text-[24px] leading-[1.40em] md:leading-[1.455em] ls:leading-[1.333em] hover:underline text-slate-800 block relative py-[32px] pr-[70px] pl-0 font-[800] tracking-[-.018em]">

                                        What can the WAsniper do?
                                    </h3>
                                    <button
                                        type='button'
                                        aria-label="toggle"
                                        className={`text-white  bg-green-700 rounded-full p-3 cursor-pointer ${current === 1 && open ? 'rotate-180 duration-500 ' : ''
                                            }`}
                                        onClick={() => handleCurrentLi(1)}
                                    >
                                        <FaAngleDown className='text-[21px]' />
                                    </button>
                                </div>
                                {current === 1 && open && (
                                    <p
                                        id="para2"
                                        className="font-normal text-base leading-6 text-slate-800 mt-4 w-11/12 mb-5"
                                    >

                                        <span className='text-[18px]'>Unleashing the Power of WAsniper.</span><br />
                                        <span className='text-[18px]'>Unlock the potential of WAsniper, a versatile tool designed to optimize WhatsApp functionalities.
                                        </span>
                                        <ul className='mt-[12px] ml-[22px] space-y-[10px] list-disc'>
                                            <li>Seamless File and Message Sending: Effortlessly transmit various file types and messages via WhatsApp.</li>
                                            <li>Automated Instance Creation: Streamline operations by automating instance creation and management.</li>
                                            <li>Webhook Integration: Utilize webhooks for enhanced connectivity and interaction.</li>
                                            <li>Event Notifications: Stay updated with timely event notifications tailored to your preferences.</li>

                                        </ul>
                                    </p>
                                )}
                            </div>
                            <hr className="my-1 bg-[#2b784c] border-[#2b784c]" />
                            <div>
                                <div className="flex justify-between items-center cursor-pointer">
                                    <h3 className="text-[20px] md:text-[22px] ls:text-[24px] leading-[1.40em] md:leading-[1.455em] ls:leading-[1.333em] hover:underline text-slate-800 block relative py-[32px] pr-[70px] pl-0 font-[800] tracking-[-.018em]">

                                        Ensuring Stability and Security with WAsniper.
                                    </h3>
                                    <button
                                        type='button'
                                        aria-label="toggle"
                                        className={`text-white  bg-green-700 rounded-full p-3 cursor-pointer ${current === 2 && open ? 'rotate-180 duration-500 ' : ''
                                            }`}
                                        onClick={() => handleCurrentLi(2)}
                                    >
                                        <FaAngleDown className='text-[21px]' />
                                    </button>
                                </div>
                                {current === 2 && open && (
                                    <p
                                        id="para2"
                                        className="font-normal text-base leading-6 text-slate-800 mt-4 w-11/12 mb-5"
                                    >
                                        <span className='text-[18px]'>  WAsniper is committed to ensuring a secure and reliable platform for its users. Here's how we prioritize stability and safety:</span>

                                        <ul className='mt-[12px] ml-[22px] space-y-[10px] list-disc'>
                                            <li>99.9% Server Uptime: Our commitment to maintaining good server uptime ensures consistent access to our services.</li>
                                            <li>Round-the-Clock Customer Support: Our dedicated support team is available 24/7 to assist users with any concerns or queries.</li>
                                            <li>Prompt Update Service: We prioritize urgent updates to enhance the platform's stability and security, ensuring a smooth user experience.</li>

                                        </ul>
                                    </p>
                                )}
                            </div>
                            <hr className="my-1 bg-[#2b784c] border-[#2b784c]" />
                            <div>
                                <div className="flex justify-between items-center cursor-pointer">
                                    <h3 className="text-[20px] md:text-[22px] ls:text-[24px] leading-[1.40em] md:leading-[1.455em] ls:leading-[1.333em] hover:underline text-slate-800 block relative py-[32px] pr-[70px] pl-0 font-[800] tracking-[-.018em]">
                                        Can I send bulk messages?
                                    </h3>
                                    <button
                                        type='button'
                                        aria-label="toggle"
                                        className={`text-white  bg-green-700 rounded-full p-3 cursor-pointer ${current === 3 && open ? 'rotate-180 duration-500 ' : ''
                                            }`}
                                        onClick={() => handleCurrentLi(3)}
                                    >
                                        <FaAngleDown className='text-[21px]' />
                                    </button>
                                </div>
                                {current === 3 && open && (
                                    <p
                                        id="para2"
                                        className="font-normal text-base leading-6 text-slate-800 mt-4 w-11/12 "
                                    >
                                        <span className='text-[18px]'>  Best Practices for Bulk Messaging with WASniper</span>

                                        <ul className='mt-[12px] ml-[22px] space-y-[10px] list-disc'>
                                            <li> Unlimited Messaging: WA Sniper allows you to send messages without a specific limit.</li>
                                            <li> Recommended Limit: While there's no fixed cap, it's advised not to exceed 5000 messages daily.</li>
                                            <li>Avoid Spamming: Sending bulk messages might trigger users to mark them as spam, potentially leading to your number being blocked.</li>
                                            <li>Target Your Audience: Send messages exclusively to your clients, avoiding spam or irritating advertisements.</li>
                                            <li>Purposeful Communication: Ensure messages serve a purpose such as reminders, OTPs, subscriptions, or any awaited
                                                customer-related information.</li>
                                        </ul>
                                    </p>
                                )}
                            </div>




                        </div>
                    </div>
                </div>
            </div>


            {/* Contact us Content  */}

            <div className='max-w-[1366px] mx-auto min-h-[60vh]'>
                <h2 className='my-[25px] text-[28px] font-bold text-center'>Have Question? Get in touch!</h2>
                <p className='my-[5px] text-[17px] font-medium text-center'>We always listen to our clients.</p>
                <p className='my-[5px] text-[17px] font-medium text-center'>That’s why WA Sniper is friendly and easy to use.</p>
                <p className='my-[5px] text-[17px] font-medium text-center'>If you have any wishes for the functionality, talk to us, so you can help develop the service.</p>

                <div className='flex justify-center my-[20px]'
                >
                    <button type="button" className="text-slate-800 text-center  bg-green-500 hover:bg-green-600 font-medium rounded-[4px] text-[20px] px-8 py-4 me-2 mb-2 flex items-center" aria-label="Contact us"><FiPhoneCall className='mr-2' />Contact us</button>
                </div>
            </div>
        </>
    );
};

export default Section9;
