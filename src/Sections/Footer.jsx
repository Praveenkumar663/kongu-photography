import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/footer.css";

const Footer = () => (
    <footer className="site-footer">
        <div className="footer-main">
            <div className="footer-brand-block">
                <Link className="footer-brand" to="/">Aurelia <span>Photography</span></Link>
                <p>Thoughtful photography for the moments, people, and stories you want to hold onto.</p>
                <div className="footer-socials" aria-label="Social media">
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <i className="bi bi-instagram" aria-hidden="true" />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                        <i className="bi bi-facebook" aria-hidden="true" />
                    </a>
                    <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                        <i className="bi bi-whatsapp" aria-hidden="true" />
                    </a>
                </div>
            </div>

            <div className="footer-location">
                <p className="footer-label">Find us</p>
                <h2>Coimbatore &amp; Karur</h2>
                <p>Tamil Nadu, India</p>
                <p className="footer-destination">Available for destination celebrations worldwide.</p>
            </div>
        </div>

        <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Aurelia Photography. All rights reserved.</p>
            <Link to="/">Back to top <span aria-hidden="true">↑</span></Link>
        </div>
    </footer>
);

export default Footer;
