import React, { useState, useEffect } from 'react';
import './CourseAdmin.css'
import axios from 'axios'; // Import Axios

const CourseDetails = () => {
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/course');
        setCourses(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <div className="courseTable">
      <h1>Course Details</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Schedule</th>
            <th>Delivery Method</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.mobileNumber}</td>
              <td>{course.email}</td>
              <td>{course.schedule}</td>
              <td>{course.deliveryMethod}</td>
              <td>{course.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseDetails;
