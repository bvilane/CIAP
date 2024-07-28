import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this path is correct

const Header = () => {
    return (
        <div className="header"> {/* Use 'header' to match CSS */}
            <div className="logo">
                <Link to="/" className="navbar-brand">CIAP</Link> {/* Use 'navbar-brand' under 'logo' */}
            </div>
            <nav className="navigation"> {/* Use 'navigation' for nav links */}
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link">Register</Link>
            </nav>
        </div>
    );
};

export default Header;
