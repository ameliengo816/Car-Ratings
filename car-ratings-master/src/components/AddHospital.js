import React, { useState } from 'react';
import './css/AddHospital.css'
import axios from "axios";
import burningHospital from './images/car-logo.png';
import { Link, useNavigate } from 'react-router-dom';

const AddHospital = () => {

  const navigate = useNavigate(); 

  const clearedData = {
    imageLink: '',
    name: '',
    location: '',
    rating: '',
    numberOfDeaths: '',
    description: ''
  }; 

  const [formData, setFormData] = useState({
    imageLink: '',
    name: '',
    location: '',
    rating: '',
    numberOfDeaths: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can send the data to your server or perform any necessary actions
    console.log('Form submitted:', formData);
    try {
      // Send form data to your server, which will interact with MongoDB
      axios.post('http://localhost:4000/api/hospitals/', formData); // Replace with your server endpoint
      console.log('Form submitted successfully:', formData);
      setFormData(clearedData);
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setFormData(clearedData);
  };

  return (
    <div class="whole">
      <Link to="/">
                <button type="button" class="modern-button">Back</button>
            </Link>
        <div class="logo">
                <img src={burningHospital} width='130px'/>
                <h1 class="logo">CAR-RATINGS</h1>
            </div>
        <hr></hr>
        <h1 class="label">Add Car</h1>
    <div class="contain">
      <form onSubmit={handleSubmit} class="addForm">
        
          Image <br />
          <input
            type="text"
            name="imageLink"
            value={formData.imageLink}
            onChange={handleChange}
            required
          />
        
        <br />


          Name <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
  
        <br />
          Location <br />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        
        <br />

      
          Rating <br />
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          />
    
        <br />

     
          Year <br />
          <input
            type="text"
            name="numberOfDeaths"
            value={formData.numberOfDeaths}
            onChange={handleChange}
            required
          />
    
        <br />

    
          Description <br />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
     
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default AddHospital;
