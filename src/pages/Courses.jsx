import React, { useState } from 'react';
import './course.css';
import Footer from '../Components/Footer';

const Courses = () => {

    const [activeIndex , setActiveIndex] = useState(null);

    const courseContent = [
      {
        Title: "Semiconductor Overview" ,
        Tags: {Duration: ""} ,
        Modules : ["ASIC/FPGA Technologies & Flow" , "EDA Tools"]
      } , 
      {
        Title: "Digital Electronics",
        Tags: {Duration: ""},
        Modules: ["Introduction To Logic Gates" , "Combinational/Sequential Logic Circuits" ,
                  "Frequency Division Using Counters" , "Finite State Machine" ,
                  "Synchronous and Asynchronous Digital Circuits" , "Clock Domain Crossing, Low Power Design Techniques",
                  "Setup And Hold Time"]
      },
      {
        Title: "Verilog HDL" ,
        Tags: {Duration: ""} ,
        Modules: ["Introduction to Verilog, Data Types, Operators" , "Compiler Directives And System Tasks" , 
                  "Task & Function, Data Flow Modeling" , "Behavioral Modeling, Verilog For Design",
                  "Combinational/Sequential Logic Design" , "Synthesizable RTL For Design" ,
                  "Verilog For Verification, Timing Controls" , "Conditional Statements, Loops",
                  "Sequential And Parallel Blocks" , "Advanced Verilog For Verification, Timing Checks"
        ]
      },
      {
        Title: "Verification Concepts",
        Tags: {Duration: ""} ,
        Modules: ["Real-time verification scenarios"]
      },
      {
        Title: "System Verilog",
        Tags: {Duration: ""} ,
        Modules: ["Data Types – Arrays, Queue" , "Array Manipulation Methods" ,
                  "Structures, Unions, Task And Function" , "Task and Functions" ,
                  "Interface, Virtual Interface, SV Classes" , "Mailbox, Packages, Compilation Unit, Processes",
                  "Randomization And Constraints, SV Assertions"
        ]
      },
      {
        Title: "Protocol Training" ,
        Tags: {Duration: ""} ,
        Modules: ["PCIe or DDR or AXI"]
      },
      {
        Title: "UVM" ,
        Tags: {Duration: ""} ,
        Modules: ["UVM Introduction, Factory and Overrides" , "UVM Reporting, Transaction Level Modeling",
                  "UVM Driver, Sequencer, Monitor, Agent" , "UVM Environment, Test, Phases, Sequence",
                  "Virtual Sequence and Virtual Sequencer" , "UVM Scoreboard, Callbacks, Configuration Management",
                  "Register Abstraction Layer(RAL)" , "Functional Coverage Model and Subscriber",
                  "Reference Model"
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
                      {activeIndex === index ? "Hide Details ↗" : "More Details ↘"}
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
