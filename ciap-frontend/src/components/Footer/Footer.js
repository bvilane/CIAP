import './Footer.css'; 

const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div>
                    <span className="footer-title">Services</span>
                    <button className="link">Internet Access</button>
                    <button className="link">Community Support</button>
                    <button className="link">Education Resources</button>
                    <button className="link">Online Safety</button>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <button className="link">About CIAP</button>
                    <button className="link">Contact Us</button>
                    <button className="link">Careers</button>
                    <button className="link">News</button>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <button className="link">Terms of Service</button>
                    <button className="link">Privacy Policy</button>
                    <button className="link">Cookie Policy</button>
                </div>
            </footer>
            <div className="text-center">
                <p>Copyright © 2024 - All rights reserved by CIAP</p>
            </div>
        </div>
    );
};

export default Footer;
