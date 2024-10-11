import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UnauthHome from './components/UnauthHome';
import Login from './components/Login';
import Register from './components/Register';
import AddHospital from './components/AddHospital';
import EditHospital from './components/EditHospital';
import HospitalView from './components/HospitalView';
import HospitalList from './components/HospitalList';
import ErrorPage from './components/ErrorPage';
import axios from 'axios';
import UserContext from './components/context/UserContext';
import Logout from './components/Logout';

function App() {
  
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
        //console.log("huh");
      }
      const tokenResponse = await axios.post(
        "http://localhost:4000/api/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token} }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:4000/api/users", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
        //console.log(userData);
        //console.log("hello");
      }
    };
    checkLoggedIn();
  }, []);

//hello
  return (
    <UserContext.Provider value={{userData, setUserData}}>
    <Router>
      <div>
        <Routes>
          {/* Route for the home page when not authenticated */}
          <Route exact path='/' element={<UnauthHome />} />

          {/* Route for the login page */}
          <Route path='/login' element={<Login />} />
  
          {/* Route for the registration page */}
          <Route path='register' element={<Register />} />
  
          {/* Route for adding a hospital */}
          <Route path='add-hospital' element={<AddHospital />} />
  
          {/* Route for editing a hospital by ID */}
          <Route path='edit-hospital/:id' element={<EditHospital />} />
  
          {/* Route for viewing a hospital by ID */}
          <Route path='show-hospital/:id' element={<HospitalView />} />

          {/* Route for viewing a hospital by ID */}
          <Route path='/logout' element={<Logout />} />

          <Route path='*' element={<ErrorPage />} />

        </Routes>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
