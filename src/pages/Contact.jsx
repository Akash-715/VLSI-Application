import React, { useState } from 'react';
import './contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Footer from '../Components/Footer.jsx';
import { useContact } from '../context/ContactContext.jsx';

const Contact = () => {

   const { sendEnquiry, loading, successMsg, errorMsg } = useContact();


  const [formFields , setFormfields] = useState({
    userName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleFields = (event) => {
    const {name , value} = event.target;

    setFormfields(prev => ({...prev , [name] : value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendEnquiry(formFields);

    if(result.ok){
      setFormfields({
            userName: "",
            email: "",
            phone: "",
            message: ""
      })
    }
  }

  return (
    <div className='contactDiv'>
      <div className='contactWrapper'>

            <div className='contactForm'>
              <span id='ques'>Any Enquiry ?</span> <br />
              <span id='msg'>Message Us</span>

              <Form className='Form' onSubmit={handleSubmit}>

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

                <Button  type='submit' disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </Form>

                  {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}
                  {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            </div>


            <div className='contactDetails'>

              <h1>Contact Details</h1>

            <p>Email: company@gmail.com</p>
            <p>Phone: 2346718901</p>
            <p>Location: Chennai</p>

            </div>

      </div>

      <Footer />

    </div>
  )
}

export default Contact
