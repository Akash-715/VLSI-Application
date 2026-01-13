import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";


import './navbar.css';

const Navbar = () => {

  const [scrolled , setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll" , handleScroll);

    return () => window.removeEventListener("scroll" , handleScroll)

  } , []);

const [openMenu , setOpenMenu] = useState(false);

  return (
    <div>
      <div className = {`mainNav ${scrolled ? "scrolled" : ""}`} >

        <div className= "brand">Company Name & Logo</div>
        <ul className='navLinks'>
            <li><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "/about">About</NavLink></li>
            <li><NavLink to = "/courses">Courses</NavLink></li>
            <li><NavLink to = "/contact">Contact us </NavLink></li>
        </ul>

      <div className='hamburger'>
        <FaBars size={28} onClick={() => setOpenMenu(prev => !prev)} />
      </div>
      </div>

      <div className= {`menu ${openMenu ? "active" : ""}`}>

            <NavLink to="/" onClick={() => setOpenMenu(false)}>Home</NavLink>
            <NavLink to = "/about">About</NavLink>
            <NavLink to = "/courses">Courses</NavLink>
            <NavLink to = "/contact">Contact us </NavLink>

      </div>


    </div>
  )
}

export default Navbar
