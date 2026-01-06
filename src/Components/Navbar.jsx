import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [scrolled , setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll" , handleScroll);

    return () => window.removeEventListener("scroll" , handleScroll)

  } , [])


  return (
    <div>
      <div className = {`mainNav ${scrolled ? "scrolled" : ""}`} >

        <div className= "brand">Company Name & Logo</div>
        <ul>
            <li><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "/about">About</NavLink></li>
            <li><NavLink to = "/courses">Courses</NavLink></li>
            <li><NavLink to = "/contact">Contact us </NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
