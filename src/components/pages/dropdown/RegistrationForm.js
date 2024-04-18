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
    tournament:'',
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
    aicfId: '',
    entryFee: '',
    finalAmount: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  
    // Validation rules
    if (!value) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post('http://localhost:8080/api/register', formData);
      console.log('User registered successfully!');
      resetForm();
      alert("Successfully Registered");
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  const validateForm = () => {
    const requiredFields = Object.keys(formData);
    const newErrors = {};
    let isValid = true;

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const resetForm = () => {
    setFormData({
      tournament:'',
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
      aicfId: '',
      entryFee: '',
      finalAmount: ''
    });
    setErrors({});
  };
  return (
    <div className="containerR">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Tournament Registration</h3>
        </div>

        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
              
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
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="tournament">Tournament</label>
                <input
                  type="text"
                  className="form-control"
                  id="tournament"
                  name="tournament"
                  value={formData.tournament}
                  onChange={handleChange}
                  required
                />
                {errors.tournament && <div className="error">{errors.tournament}</div>}
              </div>
            </div>
            
            {/* Email, FIDE ID, Rating */}
            <div className="form-row">
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
                {errors.fideId && <div className="error">{errors.fideId}</div>}
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
                {errors.rating && <div className="error">{errors.rating}</div>}
              </div>
              <div className="form-group col-md-4 radiobutton-group">
                <label>Gender</label><br />
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
                {errors.gender && <div className="error">{errors.gender}</div>}
              </div>
            </div>

            {/* Gender, Date of Birth, Parent Name */}
            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Date of Birth (DD)</label>
                <input
                  type="text"
                  className="form-control"
                  id="dobDate"
                  name="dobDate"
                  value={formData.dob}
                  onChange={handleChange}
                />
                {errors.dobDate && <div className="error">{errors.dobDate}</div>}
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
                {errors.parentName && <div className="error">{errors.parentName}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="name">Institute</label>
                <input
                  type="text"
                  className="form-control"
                  id="institue"
                  name="institute"
                  value={formData.institute}
                  onChange={handleChange}
                  required
                />
                {errors.institute && <div className="error">{errors.institute}</div>}
              </div>
            </div>

            {/* Mobile Number, Alternate Mobile Number, Address Line 1, Address Line 2, State */}
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
                {errors.mobileNumber && <div className="error">{errors.mobileNumber}</div>}
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="alternateMobileNumber">Alternate Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="alternateMobileNumber"
                  name="alternateMobileNumber"
                  value={formData.alternateMobileNumber}
                  onChange={handleChange}
                />
                {errors.alternateMobileNumber && <div className="error">{errors.alternateMobileNumber}</div>}
              </div>

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
                {errors.addressLine1 && <div className="error">{errors.addressLine1}</div>}
              </div>

            </div>

            {/* Mobile Number, Alternate Mobile Number, Address Line 1, Address Line 2, State */}
            <div className="form-row">

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
                {errors.addressLine2 && <div className="error">{errors.addressLine2}</div>}
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
                {errors.state && <div className="error">{errors.state}</div>}
              </div>
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
                {errors.district && <div className="error">{errors.district}</div>}
              </div>

            </div>

            {/* District, Pincode, AICF ID */}
            <div className="form-row">

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
                {errors.pincode && <div className="error">{errors.pincode}</div>}
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="aicfId">AICF ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="aicfId"
                  name="aicfId"
                  value={formData.aicfId}
                  onChange={handleChange}
                />
                {errors.aicfId && <div className="error">{errors.aicfId}</div>}
              </div>
            </div>

            {/* Entry Fee, Final Amount */}
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="entryFee">Entry Fee</label>
                <input
                  type="text"
                  className="form-control"
                  id="entryFee"
                  name="entryFee"
                  value={formData.entryFee}
                  onChange={handleChange}
                />
                {errors.entryFee && <div className="error">{errors.entryFee}</div>}
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="finalAmount">Final Amount</label>
                <input
                  type="text"
                  className="form-control"
                  id="finalAmount"
                  name="finalAmount"
                  value={formData.finalAmount}
                  onChange={handleChange}
                />
                {errors.finalAmount && <div className="error">{errors.finalAmount}</div>}
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RegistrationForm;
