import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ auth, setAuth }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('is_admin');
        setAuth({ token: null, isAdmin: false }); // Update auth state
        navigate('/login'); // Redirect to login after logout
    };

    return (
        <div className="header">
            <div className="logo">
                <Link to="/" className="navbar-brand">CIAP</Link>
            </div>
            <nav className="navigation">
                <Link to="/" className="nav-link">Home</Link>
                {auth.token && (auth.isAdmin ? <Link to="/admin-dashboard" className="nav-link">Admin Dashboard</Link> : <Link to="/dashboard" className="nav-link">Dashboard</Link>)}
                {auth.token ? <button onClick={handleLogout} className="nav-link">Logout</button> : <Link to="/login" className="nav-link">Login</Link>}
                {!auth.token && <Link to="/register" className="nav-link">Register</Link>}
            </nav>
        </div>
    );
};

export default Header;
