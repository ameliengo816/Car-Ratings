import './css/UserDisplay.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';




const UserDisplay = props => {
    const [user, setUser] = useState({ email: '', id: ''});

    useEffect(() => {
        const fetchUserData = async () => {
        const token = localStorage.getItem("auth-token");
        console.log(token);
          try {
            const response = await axios.get("http://localhost:4000/api/users", {
                headers: { "x-auth-token": token },
              });
            setUser({
              email: response.data.email,
              id: response.data.id,
            });
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };

        fetchUserData();
      }, []);


    return (    
        <div class="userdisplay">
           <img src="https://i.pinimg.com/originals/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg" class="pic" height="50" width='50px'/>
           <h4 class="username">{user.email}</h4>
        </div>
    )
}

export default UserDisplay; 