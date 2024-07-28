import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to CIAP</h1>
      <p>Access your dashboard by logging in or registering.</p>
      <Link to="/login">Login</Link>
      {/* You can add a link to a Register page if you have a separate registration component */}
    </div>
  );
}

export default HomePage;
