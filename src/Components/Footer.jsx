import React from 'react'
import './footer.css'

import { NavLink } from 'react-router-dom'

const Footer = () => {


  return (
    <footer className="footerDiv">

      <div className="footerContent">

        {/* LEFT – BRAND / QUICK LINKS */}
        <div className="footerCol">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "/about">About us</NavLink></li>
            <li><NavLink to = "/courses">Courses</NavLink></li>
            <li><NavLink to = "/contact">Contact us </NavLink></li>
          </ul>
        </div>

        {/* MIDDLE – PROGRAMS */}
        <div className="footerCol">
          <h3>Programs</h3>
          <ul>
            <li>VLSI Design Verification</li>
            <li>Internship Program</li>
            <li>SystemVerilog & UVM</li>
            <li>Protocol Training</li>
          </ul>
        </div>

        {/* RIGHT – CONTACT */}
        <div className="footerCol">
          <h3>Contact</h3>
          <p>Email: company@gmail.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
          <p>Location: Chennai, India</p>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="footerDivider"></div>

      {/* COPYRIGHT */}
      <div className="footerBottom">
        © 2026 Company Name. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer
