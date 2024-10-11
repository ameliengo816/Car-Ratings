import React from "react";
import { useState, useContext } from "react";
import './css/Register.css';
import { Link, useNavigate } from 'react-router-dom';
import burningHospital from './images/car-logo.png';
import axios from "axios";
import UserContext from "./context/UserContext";

const Register = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { setUserData } = useContext(UserContext);

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    async function handleSubmit(e) {
      e.preventDefault();
      setLoading(true);
      try {
        console.log(formData);
        const newUser = formData;
        await axios.post("http://localhost:4000/api/users/signup/", newUser);
        const loginRes = await axios.post("http://localhost:4000/api/users/login", formData);
        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        setLoading(false);
        navigate('/');
      } catch (err) {
        setLoading(false);
        err.response.data.msg && setError(err.response.data.msg);
        alert(err.response.data.msg);
      }
     
    };
    

    return (
    <div class = "background">
          <div class="outer">
            <div class="logo">
                <img src={burningHospital} alt="Burning Hospital" width='130px'/>
                <h1 class="logo">CAR-RATINGS</h1>
            </div>
          </div>
          <hr></hr>
          <h2 class="register">Register</h2>
        <div className="center">
        <div class="formcontainer">
          <form onSubmit={handleSubmit} className ="forms">
            <label class="forms-label">
              Email
              <input class="forms-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label class="forms-label">
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                class="forms-input"
              />
            </label>
            <br />
            <button type="submit" className="register-button">Register</button>
          </form>
      </div>
      </div>
    </div>
    )
  }

  export default Register;