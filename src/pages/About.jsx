import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='about'>

      {/* HERO SECTION */}
      <div className='aboutHero'>
        <div className='heroContentAbt'>
          <h1>About SiliconVista</h1>
        </div>
      </div>

      {/* ABOUT + COMMITMENT SECTION */}
      <div className="aboutContentGrid">

        {/* ABOUT CONTENT */}
        <div className="aboutBox">
          <h2>About Us</h2>
          <p>
            SiliconVista is an online VLSI and semiconductor training institute
            dedicated to nurturing skilled and confident engineers for the
            semiconductor industry. We are driven by a simple goal — to help
            learners build strong foundations and practical skills required to
            succeed in VLSI and chip design careers.
          </p>

          <p>
            With the rapid growth of the semiconductor domain, there is a growing
            demand for engineers who not only understand theory but can also apply
            concepts effectively. At SiliconVista, we focus on transforming
            academic concepts into practical, industry-relevant skills through
            structured and application-oriented training.
          </p>

        </div>

        {/* COMMITMENT CONTENT */}
        <div className="aboutBox">
          <h2>Our Vision</h2>
          <p>
            To become a trusted learning platform that empowers students and
            professionals with clear knowledge, hands-on exposure, and
            career-focused guidance in the field of VLSI and semiconductors.
          </p>

          <p className="highlightText">
            SiliconVista – Learn VLSI. Build Careers.
          </p>


          <h3>Our Commitment</h3>

          <p>At SiliconVista, we are committed to:</p>

          <ul>
            <li>Delivering quality education</li>
            <li>Providing honest career guidance</li>
            <li>Maintaining industry relevance</li>
            <li>Supporting learners throughout their learning journey</li>
          </ul>

          <p>
            We believe that with the right guidance and practical exposure, anyone
            with passion can build a successful career in the semiconductor
            industry.
          </p>
        </div>

      </div>

    </div>
  );
};

export default About;
