import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Logout.css';



const Logout = props => {
    const [token, setToken] = useState();

    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (token) {
            localStorage.removeItem("auth-token");
            setToken(localStorage.getItem("auth-token"));
        }
    }, []);

    return (    
      <div>
        <h3>You have been succesfully logged out.</h3>
        <Link to='/'>
        <h3>Click here to return to home</h3>
        </Link>
      </div>
    )
}

export default Logout; 