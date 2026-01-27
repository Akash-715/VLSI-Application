import React, { useState } from 'react';
import './course.css';
import Footer from '../Components/Footer';

const Courses = () => {

    const [activeIndex , setActiveIndex] = useState(null);

    const courseContent = [
      {
        Title: "Semiconductor Introduction" ,
        Tags: {Duration: ""} ,
        Modules : ["ASIC/FPGA Technologies & Flow" , "EDA Tools"]
      } , 
      {
        Title: "Introduction to Digital Systems",
        Tags: {Duration: ""},
        Modules:[
                    "Introduction to Digital Systems",
                    "Boolean Algebra & Logic Gates",
                    "Logic Simplification",
                    "Combinational Logic Circuits",
                    "Sequential Logic – Basics",
                    "Counters & Registers",
                    "Finite State Machines (FSM)"
                ]

      },
      {
        Title: "Verilog" ,
        Tags: {Duration: ""} ,
        Modules: [
                    "Introduction to HDL & Verilog",
                    "Verilog Basics",
                    "Modeling Styles",
                    "Procedural Statements",
                    "Combinational Logic Design",
                    "Sequential Logic Design",
                    "Timing & Coding Guidelines",
                    "Testbench Development",
                    "Simulation & Debugging",
                    "Synthesis Basics"
                  ]

      },
      {
        Title: "System Verilog",
        Tags: {Duration: ""} ,
        Modules: [
                    "Introduction to SystemVerilog",
                    "SystemVerilog Data Types",
                    "SystemVerilog Operators & Control",
                    "Interfaces & Modports",
                    "Object-Oriented Programming (OOP)",
                    "Randomization & Constraints",
                    "Functional Coverage",
                    "Assertions (SVA)",
                    "Mailbox, Packages, Compilation Unit, Processes"
                  ]

      },
      {
        Title: "Protocol Training" ,
        Tags: {Duration: ""} ,
        Modules: ["AMBA Overview" , "APB,AHB, AXI" , "I2C"]
      },
      {
        Title: "UVM" ,
        Tags: {Duration: ""} ,
        Modules: ["UVM Basics" , "UVM Testbench Architecture",
                  "UVM Phases" , "UVM Driver, Sequencer, Monitor, Agent",
                  "Virtual Sequence and Virtual Sequencer" , "UVM Configuration Database",
                  "Factory & Overrides" , "UVM Scoreboard",
                  "Register Layer (UVM-RAL)"
        ]
      },
      {
        Title: "Real Time Project Training",
        Tags: {Duration: ""} ,
        Modules: ["Students will get a chance to work on a Active Real Time Project involving AXI Interconnect/PCI Express and build their professional expertise."]
      }
    ]


    
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
            <li>Training delivered by experienced industry professionals</li>
            <li>Hands-on project experience using advanced technologies</li>

          </ul>

        </div>

        <div className='courseFeatures'>
          <h1>Salient Features</h1>

          <p>Course Duration</p>
          <ul className='durationli'>
            <li>4 Months</li>
          </ul>

          <h3>Eligibility</h3>

          <ul>
            <li>Engineering Degree in ECE, EEE, CSE, E&I, or equivalent Master’s <br /> Engineering programs</li>
          </ul>

        </div>
      </div>

        <div className='courseContent'>
          <h1>Course Content</h1>

              {courseContent.map((course, index) => (
                <div key={index} className="courseBlock">


                  <div 
                    className="courseHeader"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <span className="courseTitle">{course.Title}</span>
                    <span className="more">
                      {activeIndex === index ? "Hide Modules ↗" : "See Modules ↘"}
                    </span>
                  </div>


                  <div className={`modules ${activeIndex === index ? "active" : ""}`}>
                    <ul>
                      {course.Modules.map((module, i) => (
                        <li key={i}>{module}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
        </div>


    <Footer />
    </div>
  )
}

export default Courses
