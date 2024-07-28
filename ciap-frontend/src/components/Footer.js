import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-[#0A68D4] text-white">
            <footer className="footer p-10 justify-items-center">
                <div>
                    <span className="footer-title">Services</span>
                    <button className="link link-hover">Internet Access</button>
                    <button className="link link-hover">Community Support</button>
                    <button className="link link-hover">Education Resources</button>
                    <button className="link link-hover">Online Safety</button>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <button className="link link-hover">About CIAP</button>
                    <button className="link link-hover">Contact Us</button>
                    <button className="link link-hover">Careers</button>
                    <button className="link link-hover">News</button>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <button className="link link-hover">Terms of Service</button>
                    <button className="link link-hover">Privacy Policy</button>
                    <button className="link link-hover">Cookie Policy</button>
                </div>
            </footer>
            <div className="text-center py-8">
                <p>Copyright © 2024 - All rights reserved by CIAP</p>
            </div>
        </div>
    );
};

export default Footer;
