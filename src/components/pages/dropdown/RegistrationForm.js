import React, { useState } from 'react';
import './Registration.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import statesData from '../state.json';
import districtsData from './district.json';
import axios from 'axios'; // Import axios for HTTP requests
import data from './Data.json';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    fideId: '',
    rating: '',
    gender: '',
    dobDate: '',
    parentName: '',
    institute: '',
    mobileNumber: '',
    alternateMobileNumber: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    district: '',
    pincode: '',
    aicfno: '',
    product: '',
    famount: '15000'
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
    try {
      await axios.post('http://localhost:8080/api/register', formData);
      console.log('User registered successfully!');
      setFormData({
        email: '',
        fideId: '',
        rating: '',
        gender: '',
        dobDate: '',
        parentName: '',
        institute: '',
        mobileNumber: '',
        alternateMobileNumber: '',
        addressLine1: '',
        addressLine2: '',
        state: '',
        district: '',
        pincode: '',
        aicfno: '',
        product: '',
        famount: ''
      });
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <div className="containerR">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Tournament Registration</h3>
        </div>

        <div className="panel-body">
          <form onSubmit={handleSubmit}>

            {/* Email, FIDE ID, Rating */}
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="fideId">FIDE ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="fideId"
                  name="fideId"
                  value={formData.fideId}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="rating">Rating</label>
                <input
                  type="text"
                  className="form-control"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Gender, Date of Birth, Parent Name */}
            <div className="form-row">
  <div className="form-group col-md-4 radiobutton-group">
    <label>Gender</label><br/>
    <input
      className='radiobutton'
      type="radio"
      id="male"
      name="gender"
      value="Male"
      checked={formData.gender === 'Male'}
      onChange={handleChange}
    />
    <label htmlFor="male">Male</label>
    <input
      className='radiobutton'
      type="radio"
      id="female"
      name="gender"
      value="Female"
      checked={formData.gender === 'Female'}
      onChange={handleChange}
    />
    <label htmlFor="female">Female</label>
  </div>

  <div className="form-group col-md-4">
    <label>Date of Birth (DD)</label>
    <input
      type="text"
      className="form-control"
      id="dobDate"
      name="dobDate"
      value={formData.dobDate}
      onChange={handleChange}
    />
  </div>

  <div className="form-group col-md-4">
    <label htmlFor="parentName">Parent Name</label>
    <input
      type="text"
      className="form-control"
      id="parentName"
      name="parentName"
      value={formData.parentName}
      onChange={handleChange}
    />
  </div>
</div>


            {/* Address Line 1, Address Line 2, State */}
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="addressLine1">Address Line 1</label>
                <input
                  type="text"
                  className="form-control"
                  id="addressLine1"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="addressLine2">Address Line 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="addressLine2"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="state">State</label>
                <select
                  className="form-control"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  {statesData.map(state => (
                    <option key={state.value} value={state.value}>{state.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* District, Pincode, AICF ID */}
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="district">District</label>
                <select
                  className="form-control"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                >
                  {formData.state && districtsData[formData.state] ? (
                    districtsData[formData.state].map((district, index) => (
                      <option key={index} value={district}>{district}</option>
                    ))
                  ) : (
                    <option value="">Select District</option>
                  )}
                </select>
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="aicfno">AICF ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="aicfno"
                  name="aicfno"
                  // disabled
                  value={formData.aicfno}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Product, Final Amount */}
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="product">Product</label>
                <input
                  type="text"
                  className="form-control"
                  id="product"
                  name="product"
                  // disabled
                  value={formData.product}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="famount">Final Amount</label>
                <input
                  type="text"
                  className="form-control"
                  id="famount"
                  disabled
                  name="famount"
                  value={formData.famount}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
