import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to CIAP</h1>
        <p>Access your dashboard by logging in or registering.</p>
      </header>
      <div className="navigation">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </div>
    </div>
  );
}

export default HomePage;
