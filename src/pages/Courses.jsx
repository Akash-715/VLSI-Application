import React from 'react';
import './course.css';
import Footer from '../Components/Footer';

const Courses = () => {
  return (
    <div className='course'>
      <div className='courseHero'>
        <div className='heroContent'>
          <h1>Comprehensive VLSI Design Verification Course</h1>
        </div>
      </div>

      <div className='courseOutline'>
        <div className='courseDetails'>
          <h1>Professional Development Program in VLSI Design Verification</h1>

          <p>
            Our VLSI Design Verification Professional Development Program is a comprehensive, industry-focused training designed to prepare engineers for careers in the global semiconductor industry.
          </p>

          <p>
            The course is carefully structured with the right balance of in-depth classroom sessions and extensive hands-on lab projects, enabling graduates to transition into skilled verification professionals.
          </p>

          <p>
            The program is designed to address the growing demand for VLSI Design Verification engineers, equipping learners with both theoretical fundamentals and practical expertise required by today’s semiconductor companies.
          </p>

          <h2>What Makes This Course Stand Out</h2>

          <ul>
            <li>Strong foundation in Digital Design and Verilog</li>
            <li>Coverage of state-of-the-art VLSI verification concepts</li>
            <li>Extensive training in SystemVerilog and UVM</li>
            <li>Access to industry-standard verification tools</li>
            <li>Training delivered by experienced industry professionals</li>
            <li>Hands-on project experience using advanced technologies</li>

          </ul>

        </div>

        <div className='courseFeatures'>
          <h1>Salient Features</h1>

          <p>Course Duration</p>
          <ul className='durationli'>
            <li>4 Months (Full-Time)</li>
          </ul>

          <h3>Eligibility & Intake Process</h3>

          <ul>
            <li>Engineering Degree in ECE, EEE, CSE, E&I, or equivalent Master’s Engineering programs</li>
            <li>Written Test covering:</li>
            <ul className='innerList'>
              <li>Digital & Analog Electronics</li>
              <li>C, C++</li>
              <li>Analytical skills</li>
            </ul>
            <li>Technical Interview</li>
          </ul>

        </div>

        <div className='courseContent'>
          
        </div>
      </div>


    <Footer />
    </div>
  )
}

export default Courses
