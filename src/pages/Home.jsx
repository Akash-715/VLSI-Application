import React, { useState } from 'react';
import Footer from '../Components/Footer.jsx';

import descImage from '../assets/descImage.webp'

const Home = () => {

  const [activeIndex , setActiveIndex] = useState(null);

  const faqs = [
  {
    question: "What is VLSI ?",
    answer:
      "VLSI is the technology used to design integrated circuits with millions of transistors."
  },
  {
    question: "Who can study VLSI ?",
    answer:
      "ECE, EEE, CSE students, freshers, and working professionals can study VLSI."
  },
  {
    question: "What is the role of a VLSI Design Engineer ?",
    answer: 
    "A VLSI Design Engineer designs, verifies, and implements chip-level circuits using industry tools for processors, SoCs, and ICs."
  },
  {
    question: "Is VLSI a good career ?",
    answer: "Yes, VLSI is a high-demand, future-proof career with strong growth opportunities and competitive salaries in the global semiconductor industry."
  },
  {
    question: "Is VLSI course useful for ECE / EEE students ?",
    answer: "Yes, VLSI courses align closely with ECE/EEE core subjects and open doors to core electronics and semiconductor design roles."
  },
  {
    question: "Do I need coding knowledge to learn VLSI ?",
    answer: "Basic programming knowledge is helpful, but not mandatory; required coding concepts are covered during the course."
  },
  {
    question: "What is verification VLSI design ?",
    answer: "Verification in VLSI is the process of validating the functionality of a chip design to ensure it performs correctly according to specifications, using simulation, testbenches, and verification methodologies like UVM before fabrication."
  }

  ];



  return (
    <div className='homeDiv'>
      <div className='sloganDiv'>
          <div className='sloganGreen'>
            <h1 id='head'>Silicon Vista</h1>
            <p id='slogan'>Build Your VLSI Career from the Ground Up.</p>
          </div>

          <div className='sloganImage'>
            
          </div>
      </div>

      <div className='descDiv'>
      <div className="descContent">
        <h1>Why You Need to Choose Us?</h1>

        <p>
          <b>SiliconVista offers Design Verification Courses </b> and bridge the gap between academic knowledge and real-world semiconductor
          industry requirements. Our VLSI programs are designed by industry experts
          to make you job-ready, not just certificate-ready.
        </p>

        <ul>
          <li>Industry-oriented aligned with VLSI curriculum</li>
          <li>Hands-on projects with real tools</li>
          <li>Internship & real-time exposure</li>
          <li>Expert mentors from semiconductor industry</li>
          <li>Placement assistance & career guidance</li>
          <li>Courses for freshers & professionals</li>
          <li>Our real-time, hands-on training combined with individual one-on-one mentoring ensures you understand every concept deeply and progress with confidence.</li>
        </ul>
      </div>

      <div className='descImage'>
        <img src={descImage}></img>
      </div>

      </div>

      <div className='discountDiv'>
        <div className='discountWords'>
          <h1>Internship Program</h1>

          <p>
            We don’t just train — we provide real industry exposure.
            Our students get the opportunity to work on practical VLSI
            projects under the guidance of experienced semiconductor professionals.
          </p>

          <ul>
            <li>Internship on live VLSI projects</li>
            <li>Mentorship from working VLSI engineers</li>
            <li>Internship certificate upon completion</li>
            <li>Internship aligned with placement preparation</li>
          </ul>
        </div>

        <div className='discountPercentage'>
            <h2>Industry-Backed</h2>
            <h1>VLSI Internship</h1>
            <p>Hands-on | Mentor-Led | Real Projects</p>
        </div>
      </div>

      <div className='faqDiv'>
        <h1>Have Doubts ?</h1>
        <h2>Read Our FAQs</h2>

        <div className='faqContent'>
          {faqs.map((faq , index) => (
            <div key={index} className='faqItem'>
              <button 
              className='morebtn'
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >{activeIndex === index ? "-" : "+"}</button>

              <label className='question'>{faq.question}</label>

              <p className = {`answer ${activeIndex === index ? "active" : ""}`}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
