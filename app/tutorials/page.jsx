import Link from "next/link";
import './Tutorials.css';

const Tutorials = () => {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 relative">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 relative">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-center text-slate-800 text-[32px] md:text-[38px] ls:text-[40px] lm:text-[42px] font-[900] leading-[1.375em] md:leading-[1.211em] lm:leading-[1.333em] tracking-[-.024em] md:tracking-[-.042em] mb-[16px] lm:mb-[24px]">
                            Tutorials
                        </h2>
                        <div className="relative mr-[150px]">
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
                    <div className="r features-content">
                        <p className="mb-5 font-bold text-slate-800 sm:text-xl contentColor z-10">
                            Here at Flowbite we focus on markets where technology, innovation, and
                            capital can unlock long-term value and drive economic growth.
                        </p>

                    </div>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-green-600 hover:scale-105 duration-500 hover:bg-green-100/40 shadow ">
                        <h3 className="mb-4 text-xll font-semibold">How to Send WhatsApp Messages</h3>

                        {/* List */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">How to Send a Messages by WhatsApp API using PHP easily</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">How to Send a Messages by WhatsApp API using Nods.js easily</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">How to Send a Messages by WhatsApp API using C# easily</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">How to Send a Messages by WhatsApp API using vbnet easily</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">How to Send a Messages by WhatsApp API using Python | Quickstart easily</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">How to Send a Messages by WhatsApp API using Java easily</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">How to Send a Messages by WhatsApp API using Objective-C easily</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">How to Send a Messages by WhatsApp API using cUrl easily</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">How to Send a Messages by WhatsApp API using Ruby easily</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">Send WhatsApp images and Documents using Base64</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">send message too WhatsApp Group using WhatsApp API</span></Link>
                            </li>
                        </ul>

                    </div>
                    {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border  border-green-600 hover:scale-105 duration-500 hover:bg-green-100/40 shadow ">
                        <h3 className="mb-4 text-xll font-semibold">How to Recieve WhatsApp Messages</h3>

                        {/* List */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">Recieve WhatsApp messages using PHP and webhook</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">How to Recieve WhatsApp messages using python and webhook ?</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">How to Recieve WhatsApp messages using VB.NET and webhook</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">Recieve WhatsApp messages using C# and webhook</span></Link>
                            </li>

                        </ul>

                    </div>
                    {/* Pricing Card */}
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-green-600 hover:scale-105 duration-500 hover:bg-green-100/40 shadow ">
                        <h3 className="mb-4 text-xll font-semibold">How to make WhatsApp chatbot</h3>

                        {/* List */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">Build a WhatsApp chatbot using PHP</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">Build a WhatsApp Chatbot With Python</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">How to create a WhatsApp Chatbot suing VBNET</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 "
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <Link href="#"><span className="hover:underline hover:text-green-600">Build a WhatsApp Chatbot using c#</span></Link>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>
        </section>

    )
}

export default Tutorials