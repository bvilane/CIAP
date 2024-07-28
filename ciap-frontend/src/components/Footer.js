import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#0A68D4] text-white">
            <footer className="footer p-10 justify-items-center">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Internet Access</a>
                    <a className="link link-hover">Community Support</a>
                    <a className="link link-hover">Education Resources</a>
                    <a className="link link-hover">Online Safety</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About CIAP</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">News</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </div>
            </footer>
            <div className="text-center py-8">
                <p>Copyright © 2024 - All rights reserved by CIAP</p>
            </div>
        </div>
    );
};

export default Footer;
