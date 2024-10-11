import React, { useState, useEffect } from 'react';
import axios from "axios";
import './css/EditHospital.css';
import burningHospital from './images/car-logo.png';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditHospital = () => {

  const navigate = useNavigate(); 
  const { id } = useParams();

  const [formData, setFormData] = useState({
    imageLink: '',
    name: '',
    location: '',
    rating: '',
    numberOfDeaths: '',
    description: '',
  });

  const clearedData = {
    imageLink: '',
    name: '',
    location: '',
    rating: '',
    numberOfDeaths: '',
    description: ''
  };

  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/hospitals/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching hospital data:', error);
      }
    };

    fetchHospitalData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can send the data to your server or perform any necessary actions
    console.log(formData);
    try {
      // Send an update request to the server
      axios.put(`http://localhost:4000/api/hospitals/${id}`, formData);
      console.log('Form submitted successfully:', formData);
      // Optionally, you might want to redirect the user or perform additional actions
      navigate("/");
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    // Clear the form after submission
    setFormData(clearedData);
  };

  return (
    <div className="whole">
      <Link to="/">
        <button type="button" className="modern-button">Back</button>
      </Link>
      <div className="logo">
        <img src={burningHospital} width='130px' alt="Hospital Logo" />
        <h1 className="logo">CAR-RATINGS</h1>
      </div>
      <hr></hr>
      <h1 className="label">Edit Car</h1>
      <div className="contain">
        <form onSubmit={handleSubmit} className="form">
          
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

export default EditHospital;
