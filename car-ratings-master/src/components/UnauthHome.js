import React, { useContext } from "react";
import HospitalList from "./HospitalList";
import { useState, useEffect } from "react";
import axios from "axios";
import './css/UnauthHome.css';
import './css/AuthHome.css';
import { Link, useNavigate } from "react-router-dom";
import burningHospital from './images/car-logo.png';
import UserDisplay from "./UserDisplay";

const UnauthHome = props => {

  const [hospitals, setHospitals] = useState([]);
  const [token, setToken] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("auth-token"));
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/hospitals/'); // Replace with your server endpoint
        setHospitals(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    navigate('/logout');
  };


    if (!token) {
      return (
        <div class="unauthUser">
        <div class="buttons">
            <Link to="/register">
                <button type="button" class="modern-button">Register</button>
            </Link>
            <Link to="/login">
                <button type="button" class="modern-button">Log In</button>
            </Link>
        </div>
        <div class="outer">
        <div class="logo logoouter">
            <img src={burningHospital} width='130px'/>
            <h1 class="logo">CAR-RATINGS</h1>
        </div>
        </div>
        <h3 class="tagline">Find the best cars!</h3>
        <hr></hr>
        <div className="listcontainer">
        <HospitalList hospitals={hospitals} />
  </div>
  </div>
           
    )
    }
    else {
      return (
        <div class="unauthUser">
            <div class="topbar">
            <UserDisplay />
          
              <button type="button" class="modern-button" onClick={handleLogout}>Log Out</button>
           
            </div>
            <div class="homeouter">
            <div class="logo">
                <img src={burningHospital} width='130px'/>
            <h1 class="logo">CAR-RATINGS</h1>
            </div>
            </div>
            <h3 class="tagline">Find the best cars!</h3>
            <Link to="/add-hospital">
            <button type="button" class="addHospital modern-button">Add Car</button>
            </Link>
            <hr></hr>
            <div class="listcontainer">
            <HospitalList hospitals={hospitals} />
      </div>
      </div>
        
      )
  }

}

export default UnauthHome; 