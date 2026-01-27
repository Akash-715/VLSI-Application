import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import './whatsapp.css';

const WhatsappIcon = () => {

    const phone = "916369498025";
    const message = "Hi, I want to know about VLSI courses";

    // Try desktop app first
    const WhatsAppURL = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={WhatsAppURL}
      className='whatsApp_float'
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className='whatsapp_icon' />
    </a>
  );
};

export default WhatsappIcon;
