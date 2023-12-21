"use client"

import './WhatsApp.css';
import { BsWhatsapp } from 'react-icons/bs';
import { useState } from 'react';

const WhatsApp = () => {
  const [showButton] = useState(true);

  return (
    <div className='bottom-[20px] left-[150px]'>
      <a
        href='https://wa.me/+919084804158'
        className={`whatsapp_float  ${showButton ? 'block' : 'hidden'}`}
        target='_blank'
        rel='noopener noreferrer'
        aria-label="Contact us on WhatsApp"
      >
        <BsWhatsapp className='fa fa-whatsapp whatsapp-icon text-green-600 text-[40px] hover:scale-125 duration-500' />
      </a>
    </div>
  );
};

export default WhatsApp;
