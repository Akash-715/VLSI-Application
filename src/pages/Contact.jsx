import React, { useState } from 'react';
import './contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Footer from '../Components/Footer.jsx';

const Contact = () => {


  const [formFields , setFormfields] = useState({
    userName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleFields = (event) => {
    const [name , value] = event.target;

    setFormfields(prev => ({...prev , [name] : value}))
  }


  return (
    <div className='contactDiv'>
      <div className='contactWrapper'>

            <div className='contactForm'>
              <span id='ques'>Any Enquiry ?</span> <br />
              <span id='msg'>Message Us</span>

              <Form className='Form'>

                <Form.Group className='mb-3'>
                  <Form.Control type = "text" name='userName' onChange={handleFields} value={formFields.userName} placeholder='Enter Name' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Control type='email' name='email' onChange={handleFields} value={formFields.email} placeholder='Enter email' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Control type = 'number' name = 'phone' onChange={handleFields} value={formFields.phone} placeholder = 'Enter Phone Number' /> 
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Control as={'textarea'} rows={3} name='message' onChange={handleFields} value={formFields.message} placeholder='Enter Message' />
                </Form.Group>

                <Button  type='submit'>
                  submit
                </Button>
              </Form>
            </div>


            <div className='contactDetails'>

              <h1>Contact Details</h1>

            <p>Email: company@gmail.com</p>
            <p>Phone: 2346718901</p>
            <p>Location: Chennai</p>

            </div>

      </div>

    </div>
  )
}

export default Contact
