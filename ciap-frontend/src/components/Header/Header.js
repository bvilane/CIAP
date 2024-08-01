import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Ensure this path is correct

const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in
    const isAdmin = localStorage.getItem('is_admin') === 'true'; // Check if the user is admin

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('is_admin');
        navigate('/');
    };

    return (
        <div className="header">
            <div className="logo">
                <Link to="/" className="navbar-brand">CIAP</Link>
            </div>
            <nav className="navigation">
                <Link to="/" className="nav-link">Home</Link>
                {isLoggedIn && isAdmin && <Link to="/admin-dashboard" className="nav-link">Admin Dashboard</Link>}
                {isLoggedIn && !isAdmin && <Link to="/dashboard" className="nav-link">Dashboard</Link>}
                {isLoggedIn && <button className="logout-button" onClick={handleLogout}>Logout</button>}
                {!isLoggedIn && <Link to="/login" className="nav-link">Login</Link>}
                {!isLoggedIn && <Link to="/register" className="nav-link">Register</Link>}
            </nav>
        </div>
    );
};

export default Header;
