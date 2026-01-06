import React from 'react';
import Footer from '../Components/Footer.jsx';

const Home = () => {
  return (
    <div className='homeDiv'>
      <div className='sloganDiv'>
            <h1 id='head'>Company Name</h1>
            <p id='slogan'>Slogan takes place here</p>
      </div>

      <div className='descDiv'>
        <h1>Why Us ?</h1>
      </div>

      <div className='discountDiv'>
        <div className='discountWords'>

        </div>

        <div className='discountPercentage'>

        </div>
      </div>

      <div className='faqDiv'>

      </div>

      <Footer />
    </div>
  )
}

export default Home
