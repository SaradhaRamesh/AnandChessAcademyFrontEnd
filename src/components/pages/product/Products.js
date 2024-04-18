import React, { useState } from 'react';
import './Product.css';
import axios from 'axios'; // Import Axios

const Course = () => {
  const [schedule, setSchedule] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [level, setLevel] = useState('');
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleScheduleChange = (event) => {
    setSchedule(event.target.value);
  };

  const handleDeliveryMethodChange = (event) => {
    setDeliveryMethod(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const courseData = {
      name,
      mobileNumber,
      email,
      schedule,
      deliveryMethod,
      level
    };

    try {
      const response = await axios.post('http://localhost:8080/api/course', courseData); // Use courseData instead of formData
      
      if (response.status === 201) { // Check response status instead of response.ok
        alert('Course details submitted successfully!');
        // Reset form fields after successful submission
        setName('');
        setMobileNumber('');
        setEmail('');
        setSchedule('');
        setDeliveryMethod('');
        setLevel('');
      } else {
        alert('Failed to submit course details!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit course details!');
    }
  };

  return (
    <div className="course-container">
      <h1>Course Details</h1>
      <form onSubmit={handleSubmit}>
        <div className='course'>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </div>
  
        <div className='course'>
          <h5>Mobile Number</h5>
          <input
            type="text"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            placeholder="Enter your mobile number"
          />
        </div>
  
        <div className='course'>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
  
        <div className='course'>
          <h5>Schedule</h5>
          <select value={schedule} onChange={handleScheduleChange}>
            <option value="">Select Schedule</option>
            <option value="mon-tue">Monday & Tuesday</option>
            <option value="wed-thur">Wednesday & Thursday</option>
            <option value="fri-sat">Friday & Saturday</option>
          </select>
        </div>
        
        <div className='delivery-method'>
          <h5>Delivery Method</h5>
          <select value={deliveryMethod} onChange={handleDeliveryMethodChange}>
            <option value="">Select Delivery Method</option>
            <option value="online">Online Classes</option>
            <option value="offline">Offline Classes</option>
          </select>
        </div>
  
        <div className='level'>
          <h5>Level</h5>
          <select value={level} onChange={handleLevelChange}>
            <option value="">Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
  
        <button type="submit" className="btn btn-primary">Course</button>
      </form>
    </div>
  );
}  
export default Course;
