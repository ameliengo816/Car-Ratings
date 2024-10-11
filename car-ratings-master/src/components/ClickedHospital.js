import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './css/Hospital.css';

const ClickedHospital = () => {
    
    const link = '/edit-hospital';
    const { id } = useParams();
    const navigate = useNavigate();

    const [hospital, setHospitals] = useState([{
        id:'',
        imageLink: '',
        name: '',
        location: '',
        rating: '',
        numberOfDeaths: '',
        description: '',
      }]);

      const [token, setToken] = useState();
      useEffect(() => {
        setToken(localStorage.getItem("auth-token"));
      }, []);
    

    useEffect(() => {
        const fetchHospitalData = async () => {
          try {
            const response = await axios.get(`http://localhost:4000/api/hospitals/${id}`);
            
            // fetch(`http://localhost:4000/api/hospitals${id}`).then((response) => response.json()).then((data) => setHospitals(data));
            setHospitals(response.data);
          } catch (error) {
            console.error('Error fetching hospital data:', error);
          }
        };
    
        fetchHospitalData();
      }, [id]);

    const deleteHospital = (e) => {
        axios.delete(`http://localhost:4000/api/hospitals/${id}`)
            .then(response => {
                console.log('Delete successful:', response.data);
            })
            .catch(error => {
                console.error('Error deleting:', error);
            });
        navigate('/');
    };

    
    if (!token) {
        return (
            <div>
              <div key={hospital.id} className="hospital-item">
                <img
                    src={hospital.imageLink}
                    className="hospital-img"
                    style={{ width: '450px', height: '450px' }} // Adjust the values as needed
                />
                <div className="clicked-hospital-info">
                    <h2>{hospital.name}</h2>
                    <h3>{hospital.location}</h3>
                    <h3>Rating: {hospital.rating}</h3>
                    <h3>Year: {hospital.numberOfDeaths}</h3>
                    <h3>{hospital.description}</h3>
                </div>

            </div>
        </div>

        )
    }
    else {
    return (  
        <div>
            <div class="buttons">
                <Link to={`${link}/${id}`}>
                    <button type="button" class="modify-buttons">Edit</button>
                </Link>
                <button onClick={deleteHospital} type="button" class="modify-buttons">Delete</button>
              </div>
              <div key={hospital.id} className="hospital-item">
                <img
                    src={hospital.imageLink}
                    className="hospital-img"
                    style={{ width: '450px', height: '450px' }} // Adjust the values as needed
                />
                <div className="clicked-hospital-info">
                    <h2>{hospital.name}</h2>
                    <h3>{hospital.location}</h3>
                    <h3>Rating: {hospital.rating}</h3>
                    <h3>Year: {hospital.numberOfDeaths}</h3>
                    <h3>{hospital.description}</h3>
                </div>

            </div>
        </div>
        )
    }
}

export default ClickedHospital; 