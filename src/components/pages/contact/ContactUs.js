import React, { useState } from "react";
import "./contact.css";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios'; // Import Axios for making HTTP requests

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if required fields are empty
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      console.error('All fields are required');
      // You can also display an error message to the user
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8080/api/contact', formData);
      console.log(response.data); // Log response from server
      alert('successfully submitted')
    } catch (error) {
      console.error('Error:', error);
      // Handle error, show error message to user, etc.
    }
  };
  return (
    <div className="contactUs">
      <div className="box">
        {/* <!-- Form --> */}
        <div className="contact form">
          <h3>Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="formBox">
              <div className="row50">
                <div className="inputBox">
                  <span>First Name</span>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                </div>
                <div className="inputBox">
                  <span>Last Name</span>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                </div>
              </div>

              <div className="row50">
                <div className="inputBox">
                  <span>Email</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
                </div>
                <div className="inputBox">
                  <span>Mobile</span>
                  <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter mobile number" />
                </div>
              </div>

              <div className="row100">
                <div className="inputBox">
                  <span>Message</span>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." />
                </div>
              </div>

              <div className="row100">
                <div className="inputBox">
                  <input type="submit" value="Send"></input>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <!-- Contact Info --> */}
        <div className="contact info">
          <h3>Contact Info</h3>
          <div className="infoBox">
            <div>
              <span className="iconContainer"><LocationOnIcon className="icon" sx={{ fontSize: 16 }} /></span>
              <p>Society Street, Dindigul<br />Tamil Nadu</p>
            </div>
            <div>
              <span className="iconContainer"><EmailIcon className="icon" /></span>
              <a href="mailto:rameshsaratha79@gmail.com">rameshsaratha79@gmail.com</a>
            </div>
            <div>
              <span className="iconContainer"><PhoneIcon className="icon" /></span>
              <a href="tel:+919842305886">9842305886</a>
            </div>
          </div>
        </div>
        {/* Map */}
        <div className="contact map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.1723750197477!2d77.97091557252382!3d10.366692781068306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00aaf4f7b5d667%3A0x90dacb386f79fe53!2sAnand%20Chess%20Institute!5e0!3m2!1sen!2sin!4v1711839289039!5m2!1sen!2sin"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">  
          </iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
