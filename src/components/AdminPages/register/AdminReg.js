import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Adminreg.css';
const Adminreg = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/register'); // Update API endpoint
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="registrationDataTable">
      <h1>Registered Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Tournament</th>
            <th>FIDE ID</th>
            <th>Rating</th>
            <th>Gender</th>
            {/* <th>Date of Birth</th> */}
            {/*<th>Parent Name</th>*/}
            {/* <th>Institute</th> */}
            <th>Mobile Number</th>
            {/* <th>Alternate Mobile Number</th> */}
            <th>Address Line 1</th>
            {/* <th>Address Line 2</th> */}
            <th>State</th>
            <th>District</th>
            {/* <th>Pincode</th> */}
            <th>AICF ID</th>
            {/* <th>Entry Fee</th> */}
            {/* <th>Final Amount</th> */}
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.tournament}</td>
              <td>{user.email}</td>
              <td>{user.fideId}</td>
              <td>{user.rating}</td>
              <td>{user.gender}</td>
              {/* <td>{`${user.dob.date}/${user.dob.month}/${user.dob.year}`}</td> */}
              {/* <td>{user.parentName}</td> */}
              {/* <td>{user.institute}</td> */}
              <td>{user.mobileNumber}</td>
              {/* <td>{user.alternateMobileNumber}</td> */}
              <td>{user.addressLine1}</td>
              {/* <td>{user.addressLine2}</td> */}
              <td>{user.state}</td> 
              <td>{user.district}</td>
              {/* <td>{user.pincode}</td> */}
              <td>{user.aicfId}</td>
              {/* <td>{user.entryFee}</td> */}
              {/* <td>{user.finalAmount}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Adminreg;
