import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Add this line to import the CSS file

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
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
