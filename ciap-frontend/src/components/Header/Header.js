import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this path is correct

const Header = () => {
    const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('is_admin');
        window.location.href = '/';
    };

    return (
        <div className="header"> {/* Use 'header' to match CSS */}
            <div className="logo">
                <Link to="/" className="navbar-brand">CIAP</Link> {/* Use 'navbar-brand' under 'logo' */}
            </div>
            <nav className="navigation"> {/* Use 'navigation' for nav links */}
                <Link to="/" className="nav-link">Home</Link>
                {isLoggedIn && <Link to="/dashboard" className="nav-link">Dashboard</Link>}
                {!isLoggedIn && <Link to="/login" className="nav-link">Login</Link>}
                {!isLoggedIn && <Link to="/register" className="nav-link">Register</Link>}
                {isLoggedIn && <button onClick={handleLogout} className="nav-link">Logout</button>}
            </nav>
        </div>
    );
};

export default Header;
