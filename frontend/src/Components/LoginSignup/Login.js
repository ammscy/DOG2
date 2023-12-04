import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css'; // Import your CSS file

import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRoute = () => '/home'; // Redirect to account page after login (change as needed)

  const login = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/login', {
        email: email,
        password: password,
      });

      if (response.data.message === 'Login successful') {
        // Redirect to the account page after successful login
        navigate(handleRoute());
      } else {
        // Handle login error (e.g., incorrect password or email does not exist)
        alert('Login failed. Please check your email and password.');
      }
    } catch (error) {
      console.error('Login failed');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <form>
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            placeholder="Email"
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            placeholder="Password"
          />
        </div>

        <div className="submit-container">
          <button onClick={login} className="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
