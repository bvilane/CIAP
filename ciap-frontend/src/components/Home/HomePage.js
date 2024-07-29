import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import logo from '../../images/AfriFi Logo.svg'; 

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
      <img src={logo} alt="AfriFi Logo" className="logo" />
        <h1>Welcome to your CIAP</h1>
        <p>Access your dashboard by logging in or registering.</p>
      </header>
      <div className="navigation">
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/register" className="nav-button">Register</Link>
      </div>
    </div>
  );
}

export default HomePage;
