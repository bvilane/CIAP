// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('is_admin') === 'true';

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('is_admin');
    window.location.href = '/'; // Redirect to homepage after logout
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {token ? (
        <>
          {isAdmin ? <Link to="/admin-dashboard">Admin Dashboard</Link> : <Link to="/dashboard">Dashboard</Link>}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link> {/* Make sure this link leads to a register component */}
        </>
      )}
    </nav>
  );
}

export default Navbar;
