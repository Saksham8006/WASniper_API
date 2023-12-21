"use client"

import { PiArrowCircleUpRightBold } from "react-icons/pi";
import './Use.css'


const Usecases = () => {
  const initialContent =
    "Implement intelligent automated conversations for seamless customer interactions.";
  const text1 =
    "Engage and re-engage customers through targeted messaging, boosting conversion rates.";
  const text2 =
    "Provide efficient and personalized assistance, resolving queries promptly.";
  const text3 =
    "Deliver rich media content to enhance engagement and communication.";
  const text4 =
    "Instantly update customers about important events, offers, or account activities.";
  const text5 =
    "Facilitate timely reminders for appointments, payments, or follow-ups.";
  const text6 =
    "Securely verify users and ensure data protection.";
  const text7 =
    "Foster stronger relationships through personalized and interactive communication.";
  const text8 =
    "Streamline workflows and processes, saving time and resources while enhancing efficiency.";


  return (
    <div>

      <div className='max-w-[1366px] mx-auto w-full py-[106px]'>
        <div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-slate-800 text-[32px] md:text-[38px] ls:text-[40px] lm:text-[42px] font-[900] leading-[1.375em] md:leading-[1.211em] lm:leading-[1.333em] tracking-[-.024em] md:tracking-[-.042em] mb-[16px] lm:mb-[24px]">
              <span className="text-green-600"> Powering</span> Business <span className="text-green-600">Connectivity</span>
            </h2>
            <div className="relative mr-[42%]">
              <svg
                className="hidden lg:block absolute lg:bottom-0 lg:left-[-70px] xl:left-[-10px]"
                width="225"
                height="16"
                viewBox="0 0 225 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.931 15.1987C151.063 1.40293 47.4825 6.23252 4.92601 10.3718L0.241161 6.21004C91.4615 -6.66766 188.043 6.83677 224.931 15.1987Z" fill="#2b784c"></path>
              </svg>
            </div>
            <div className="relative ml-[150px]">
              <svg
                className="hidden lg:block absolute lg:bottom-0 lg:left-[10px] xl:left-[-10px]"
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

          <p className="mb-5 mt-[30px] font-bold text-slate-800 sm:text-xl useCasesColor z-10 max-w-[1366px] mx-auto w-[68%] text-center">
            WAsniper - the ultimate API for WhatsApp, elevating businesses and programmers. Seamlessly integrates into diverse systems, enabling swift messaging,
            user alerts, and more. Your streamlined solution for robust communication.
          </p>
        </div>


        <div className="flex flex-col md:flex-row px-[24px] gap-x-[20px] my-[60px] w-full">
          <div className="w-full md:w-[58.66666667%]">
            <img src="./images/usecaseimg.webp" alt="use cases image" className="h-auto w-[90%]" width="500" height="300" />
          </div>

          <div className="w-full md:w-[58.33%] md:mt-[70px]">
            <h2 className='my-[25px] text-[28px] font-bold md:text-start text-center'>WhatsApp API: Enhanced Engagement</h2>

            <p className="text-center md:text-start">Global Reach: Connect with 2.1 billion users worldwide.</p>

            <div className="my-[20px] flex  items-center flex-col">
              <p className='my-[5px]  sm:pl-[32px] md:pl-0 lg:pl-[35px] text-[17px] font-medium text-start flex items-center text-slate-500'><PiArrowCircleUpRightBold className="text-green-500 text-[25px] mr-2 mt-1" />20X Notification Impact: Boost open rates significantly.</p>
              <p className='my-[5px] text-[17px] font-medium text-start flex items-center text-slate-500'><PiArrowCircleUpRightBold className="text-green-500 text-[25px] mr-2 mt-1" />Efficiency Gain: Cut order processing time by 80%.</p>
              <p className='my-[5px] text-[17px] font-medium text-start flex items-center text-slate-500'><PiArrowCircleUpRightBold className="text-green-500 text-[25px] mr-2 mt-1" />Efficiency Gain: Cut order processing time by 80%.</p>

            </div>
          </div>

        </div>

        <div className="px-[24px]">
          <h2>Experience the Potential of WhatsApp business API Use Cases</h2>
        </div>


        <div className=" py-20 ">
          <h2
            className="w-full md:w-[70%] mx-auto font-[900] text-center  text-[32px] md:text-[32px] ls:text-[45px] leading-[1.375em] md:leading-[1.211em]
               lm:leading-[1.333em] lm:mb-[24px] tracking-[-.020] md:tracking-[-.010em] "
          >
            Unlocking the Potential: WhatsApp Business API's Dynamic Use Cases
          </h2>

          {/* <div className=" w-[85%] md:w-full mx-auto text-center flex flex-wrap justify-center  items-stretch gap-6 "> */}
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[24px] gap-x-[30px] gap-y-[20px]">
            <div className="flex-shrink-0 w-full mt-14 ">
              <div className="shadow-sm p-8 mt-10 bg-green-100/40 rounded-3xl relative h-full ">
                <div className="m-auto absolute bottom-[82%] right-[38%] md:right-[37%] mb-6 h-[30%]">
                  <img src="/images/chatbots.webp" alt="Chatbot Image" className="w-full h-auto" width="500" height="300" />
                </div>

                <div className="h-auto">
                  <h2 className="text-[24px] font-bold mt-10 text-center  md:text-[24px] ls:text-[24px] lm:text-[24px] lm:leading-[35px] leading-[35px] md:leading-[35px] tracking-[-.018em] ">
                    Chatbots
                  </h2>
                  <div className="px-4 my-2 text-center md:text-start text-[20px] leading-[1.667em] tracking-[-.005em] font-[400] text-[#222]">

                    <span className="text-center flex text-[20px]">{initialContent}</span>


                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full mt-14">
              <div className="shadow-sm p-8 mt-10 bg-green-100/40 rounded-3xl relative h-full ">
                <div className="m-auto absolute bottom-[82%] right-[38%] md:right-[37%] mb-6 h-[30%] ">
                  <img src="/images/remarketing.webp" alt="Remarketing Image" className="w-auto h-auto" width="500" height="300" />
                </div>
                <div className="h-auto">
                  <h2 className="text-[24px] mt-10 text-center font-bold md:text-[24px] ls:text-[24px] lm:text-[24px] lm:leading-[35px] leading-[35px] md:leading-[35px] tracking-[-.018em] ">
                    Remarketing
                  </h2>
                  <div className="px-4 my-2 text-center md:text-start text-[20px] leading-[1.667em] tracking-[-.005em] font-[400] text-[#222]">

                    <span className="flex text-center">{text1}</span>


                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full mt-14">
              <div className="shadow-sm p-8 mt-10 bg-green-100/40 rounded-3xl relative h-full ">
                <div className="m-auto absolute bottom-[82%] right-[38%] md:right-[37%] mb-6 h-[30%] ">
                  <img src="/images/customerSupport.webp" alt="Customer Support Image" className="w-auto h-auto" width="500" height="300" />
                </div>
                <div className="h-auto">
                  <h2 className="text-[24px] mt-10 text-center font-bold md:text-[24px] ls:text-[24px] lm:text-[24px] lm:leading-[35px] leading-[35px] md:leading-[35px] tracking-[-.018em] ">
                    Customer Support
                  </h2>
                  <div className="px-4 my-2 text-center md:text-start text-[20px] leading-[1.667em] tracking-[-.005em] font-[400] text-[#222]">

                    <span className="flex text-center">{text2}</span>


                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full mt-14">
              <div className="shadow-sm p-8 mt-10 bg-green-100/40 rounded-3xl relative h-full ">
                <div className="m-auto absolute bottom-[82%] right-[38%] md:right-[37%] mb-6 h-[30%] ">
                  <img src="/images/multimedia.webp" alt="Multimedia Image" className="w-auto h-auto" width="500" height="300"  />
                </div>
                <div className="h-auto">
                  <h2 className="text-[24px] mt-10 text-center font-bold md:text-[24px] ls:text-[24px] lm:text-[24px] lm:leading-[35px] leading-[35px] md:leading-[35px] tracking-[-.018em] ">
                    Multimedia Messages
                  </h2>
                  <div className="px-4 my-2 text-center md:text-start text-[20px] leading-[1.667em] tracking-[-.005em] font-[400] text-[#222]">

                    <span className="flex text-center">{text3}</span>


                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full mt-14">
              <div className="shadow-sm p-8 mt-10 bg-green-100/40 rounded-3xl relative h-full ">
                <div className="m-auto absolute bottom-[82%] right-[38%] md:right-[33%] mb-6 h-[30%] ">
                  <img src="/images/notifications.webp" alt="Notification Image" className="w-auto h-auto" width="500" height="300" />
                </div>
                <div className="h-auto">
                  <h2 className="text-[24px] mt-10 text-center font-bold md:text-[24px] ls:text-[24px] lm:text-[24px] lm:leading-[35px] leading-[35px] md:leading-[35px] tracking-[-.018em] ">
                    Notifications
                  </h2>
                  <div className="px-4 my-2 text-center md:text-start text-[20px] leading-[1.667em] tracking-[-.005em] font-[400] text-[#222]">

                    <span className="flex text-center">{text4}</span>


                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full mt-14">
              <div className="shadow-sm p-8 mt-10 bg-green-100/40 rounded-3xl relative h-full ">
                <div className="m-auto absolute bottom-[82%] right-[38%] md:right-[37%] mb-6 h-[30%] ">
                  <img src="/images/reminders.webp" alt="Reminders Image" className="w-auto h-auto" width="500" height="300" />
                </div>
                <div className="h-auto">
                  <h2 className="text-[24px] mt-10 text-center font-bold md:text-[24px] ls:text-[24px] lm:text-[24px] lm:leading-[35px] leading-[35px] md:leading-[35px] tracking-[-.018em] ">
                    Reminders
                  </h2>
                  <div className="px-4 my-2 text-center md:text-start text-[20px] leading-[1.667em] tracking-[-.005em] font-[400] text-[#222]">

                    <span className="flex text-center">{text5}</span>


                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full mt-14">
              <div className="shadow-sm p-8 mt-10 bg-green-100/40 rounded-3xl relative h-full ">
                <div className="m-auto absolute bottom-[82%] right-[38%] md:right-[37%] mb-6 h-[30%] ">
                  <img src="/images/authentication.webp" alt="Authentication" className="w-auto h-auto" width="500" height="300" />
                </div>
                <div className="h-auto">
                  <h2 className="text-[24px] mt-10 text-center font-bold md:text-[24px] ls:text-[24px] lm:text-[24px] lm:leading-[35px] leading-[35px] md:leading-[35px] tracking-[-.018em] ">
                    Verification & Authentication
                  </h2>
                  <div className="px-4 my-2 text-center md:text-start text-[20px] leading-[1.667em] tracking-[-.005em] font-[400] text-[#222]">

                    <span className="flex text-center">{text6}</span>


                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full mt-14">
              <div className="shadow-sm p-8 mt-10 bg-green-100/40 rounded-3xl relative h-full ">
                <div className="m-auto absolute bottom-[82%] right-[38%] md:right-[37%] mb-6 h-[30%] ">
                  <img src="/images/customerCommunication.webp" alt="Effective communication with customers" className="w-auto h-auto" width="500" height="300" />
                </div>
                <div className="h-auto">
                  <h2 className="text-[24px] mt-10 text-center font-bold md:text-[24px] ls:text-[24px] lm:text-[24px] lm:leading-[35px] leading-[35px] md:leading-[35px] tracking-[-.018em] ">
                    Customer Comminucation
                  </h2>
                  <div className="px-3 my-2 text-center md:text-start text-[20px] leading-[1.667em] tracking-[-.005em] font-[400] text-[#222]">

                    <span className="flex text-center">{text7}</span>


                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full mt-14">
              <div className="shadow-sm p-8 mt-10 bg-green-100/40 rounded-3xl relative h-full ">
                <div className="m-auto absolute bottom-[82%] right-[38%] md:right-[37%] mb-6 h-[30%] ">
                  <img src="/images/automation.webp" alt="Automation" className="w-auto h-auto" width="500" height="300" />
                </div>
                <div className="h-auto">
                  <h2 className="text-[24px] mt-10 text-center font-bold md:text-[24px] ls:text-[24px] lm:text-[24px] lm:leading-[35px] leading-[35px] md:leading-[35px] tracking-[-.018em] ">
                    Automation
                  </h2>
                  <div className="px-2 my-2 text-center md:text-start text-[20px] leading-[1.667em] tracking-[-.005em] font-[400] text-[#222]">

                    <span className="flex text-center">{text8}</span>


                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
    </div>
  )
}

export default Usecases