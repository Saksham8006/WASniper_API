"use client"

import './WhatsApp.css'
import { BsWhatsapp } from "react-icons/bs";
import { useState, useEffect } from 'react';

const WhatsApp = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      // Add an event listener to check the scroll position
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleScroll = () => {
        // Check the scroll position, and show/hide the button accordingly
        if (window.pageYOffset > 90) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
    
   
    return (
        // <div>

            <a
                href="https://wa.me/+919084804158"
                className={`whatsapp_float  ${showButton ? 'block' : 'hidden'}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {/* <i className="fa fa-whatsapp whatsapp-icon"></i> */}
                <BsWhatsapp className="fa fa-whatsapp whatsapp-icon text-green-600 text-[50px] hover:scale-125 duration-500"/>
            </a>


        // </div>
    )
}

export default WhatsApp