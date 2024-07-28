import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-[#0A68D4] text-white px-16 py-4">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-3xl">CIAP</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 font-bold">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
