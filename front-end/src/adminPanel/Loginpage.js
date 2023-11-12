import React, { useEffect, useState } from "react";
import "./styleadmin.css";
import Logo from '../Photos/Logo.png';
import { Link } from 'react-router-dom';


const Loginpage = () => {
  const [admins, setAdmins] = useState([]);
  const [email, setemail] = useState([]);
  const [username, setusername] = useState([]);
  const [password, setpassword] = useState([]);
  
  const Logincheckin = (event) => {
    event.preventDefault();
    for (let i = 0; i < admins.length; i++) {
      if (admins[i].username === username) {
        if (admins[i].email === email && admins[i].password === password) {
         
          console.log('Login successful');
          return;
        } else {
          console.log('Email or password is incorrect');
          return;
        }
      }
    }
  }
    console.log('Username not found');

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await fetch("/api/admins");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setAdmins(json.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchAdmins();
  }, []);



  return (
    <div className="login">
    <div className="top">
      <div className="avatar">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
    <div className="bottom">
      <h2>Login</h2>
      <h3>Login to continue</h3>
      <form className="login-form" onSubmit={Logincheckin}>
        <div className="textbox">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="textbox">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div className="textbox">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <Link to="/admin" className="Login-button" >Login</Link>
        <a className="Sign" href="https://website.com">
          Don't have an account? <a className="Sign">SignUP</a>
        </a>
      </form>
    </div>
  </div>
);
};

export default Loginpage;

