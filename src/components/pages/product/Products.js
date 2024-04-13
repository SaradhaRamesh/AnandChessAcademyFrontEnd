import React, { useState } from 'react';
import './Product.css'

const Course = () => {
  const [schedule, setSchedule] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [level, setLevel] = useState('');

  const handleScheduleChange = (event) => {
    setSchedule(event.target.value);
  };

  const handleDeliveryMethodChange = (event) => {
    setDeliveryMethod(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  return (
    <div className="course-container">
      <h1>Course Details</h1>
      <div className='course'>
        <h2>Schedule</h2>
        <p>Monthly (8 hours)</p>
        <select value={schedule} onChange={handleScheduleChange}>
          <option value="">Select Schedule</option>
          <option value="mon-tue">Monday & Tuesday</option>
          <option value="wed-thur">Wednesday & Thursday</option>
          <option value="fri-sat">Friday & Saturday</option>
        </select>
      </div>
      
      <div className='delivery-method'>
        <h2>Delivery Method</h2>
        <input type="radio" id="online" name="deliveryMethod" value="online" checked={deliveryMethod === 'online'} onChange={handleDeliveryMethodChange} />
        <label htmlFor="online">Online Classes</label>

        <input type="radio" id="offline" name="deliveryMethod" value="offline" checked={deliveryMethod === 'offline'} onChange={handleDeliveryMethodChange} />
        <label htmlFor="offline">Offline Classes</label>
      </div>

      <div className='level'>
        <h2>Level</h2>
        <select value={level} onChange={handleLevelChange}>
          <option value="">Select Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      
      <h2>Overview</h2>
      {/* Display other course details based on selected options */}
    </div>
  );
};

export default Course;
