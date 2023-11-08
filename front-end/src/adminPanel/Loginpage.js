import React, { useEffect, useState  } from "react";
import { withRouter } from 'react-router-dom';
import { Link, Route } from "react-router-dom";
import "./styleadmin.css"
import Logo from '../Photos/Logo.png';

const Loginpage = ({ history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();

      if (username === 'admin' && password === 'admin') {
        history.push('/admin');
      } else {
        alert('Invalid username or password');
      }
    };
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
          <form className="login-form" onSubmit={handleLogin}>
            <div className="textbox">
              <input type="email" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="textbox">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">LOGIN</button>
            <a href="https://website.com">
              Don't have an account? <a className="Sign">SignUP</a>
            </a>
          </form>
        </div>
      </div>
    );
  };

export default Loginpage;

