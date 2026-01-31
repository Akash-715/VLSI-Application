import React, { useState } from "react";
import "./contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Footer from "../Components/Footer.jsx";
import { useContact } from "../context/ContactContext.jsx";

const Contact = () => {
    const { sendEnquiry, loading, successMsg, errorMsg } = useContact();

    const [formFields, setFormfields] = useState({
        userName: "",
        email: "",
        phone: "",
        message: "",
        course: "",
        duration: ""
    });


    const handleFields = (e) => {
        const { name, value } = e.target;
        setFormfields((prev) => ({ ...prev, [name]: value }));
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendEnquiry(formFields);

    if(result.ok){
      setFormfields({
            userName: "",
            email: "",
            phone: "",
            message: "",
            course:"",
            duration:""
      })
    }
  }

    return (
        <div className="contactDiv">
            <div className="contactWrapper">
                <div className="contactForm">
                    <span id="ques">Any Enquiry ?</span> <br />
                    <span id="msg">Message Us</span>

                    <Form className="Form" onSubmit={handleSubmit}>

                            
                            <Form.Group className="mb-3">
                                <Form.Control
                                type="text"
                                name="userName"
                                onChange={handleFields}
                                value={formFields.userName}
                                placeholder="Enter Name"
                                />
                            </Form.Group>

                            
                            <Form.Group className="mb-3">
                                <Form.Control
                                type="email"
                                name="email"
                                onChange={handleFields}
                                value={formFields.email}
                                placeholder="Enter Email"
                                />
                            </Form.Group>

                            
                            <Form.Group className="mb-3">
                                <Form.Control
                                type="number"
                                name="phone"
                                onChange={handleFields}
                                value={formFields.phone}
                                placeholder="Enter Phone Number"
                                />
                            </Form.Group>

                            
                            <Form.Group className="mb-3">
                                <Form.Select
                                name="course"
                                value={formFields.course || ""}
                                onChange={handleFields}
                                >
                                <option value="">Select Program</option>
                                <option value="Internship">Internship</option>
                                <option value="VLSI Design Course">VLSI Design Course</option>
                                </Form.Select>
                            </Form.Group>

                            
                            {formFields.course === "Internship" && (
                                <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    name="duration"
                                    onChange={handleFields}
                                    value={formFields.duration || ""}
                                    placeholder="Enter The Duration"
                                />
                                </Form.Group>
                            )}

                            
                            <Form.Group className="mb-3">
                                <Form.Control
                                as="textarea"
                                rows={3}
                                name="message"
                                onChange={handleFields}
                                value={formFields.message}
                                placeholder="Enter Message"
                                />
                            </Form.Group>

                            <Button type="submit" disabled={loading}>
                                {loading ? "Sending..." : "Submit"}
                            </Button>
                    </Form>


                    {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}
                    {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
                </div>

                <div className="contactDetails">
                    <h1>Contact Details</h1>
                <div className="paraDiv">
                    <p>Email: info@siliconvista.in</p>
                    <p>Phone: +91 63694 98025</p>
                    <p>Location: Chennai, India</p>
                </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
