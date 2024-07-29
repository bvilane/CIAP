import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Ensure this path is correct

const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('is_admin');
        navigate('/');
    };

    return (
        <div className="header"> {/* Use 'header' to match CSS */}
            <div className="logo">
                <Link to="/" className="navbar-brand">CIAP</Link> {/* Use 'navbar-brand' under 'logo' */}
            </div>
            <nav className="navigation"> {/* Use 'navigation' for nav links */}
                <Link to="/" className="nav-link">Home</Link>
                {isLoggedIn && <button className="nav-link" onClick={handleLogout}>Logout</button>}
                {!isLoggedIn && <Link to="/login" className="nav-link">Login</Link>}
                {!isLoggedIn && <Link to="/register" className="nav-link">Register</Link>}
            </nav>
        </div>
    );
};

export default Header;
