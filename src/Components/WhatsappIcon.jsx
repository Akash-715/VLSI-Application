import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import './whatsapp.css';

const WhatsappIcon = () => {

    const phone = "919159462524";
    const message = "Hi, I want to know about VLSI courses";

    const WhatsAppURL = `http://wa.me/${phone}?text=${encodeURIComponent(message)}`


  return (
    <a
    href = {WhatsAppURL}
    className='whatsApp_float'
    target="_blank"
    rel="noopener noreferrer"
    >
        <FaWhatsapp className='whatsapp_icon' />
    </a>
  )
}

export default WhatsappIcon
