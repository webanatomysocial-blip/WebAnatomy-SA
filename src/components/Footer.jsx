import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';
import { BsArrowRight } from 'react-icons/bs';
import { FaLinkedinIn, FaYoutube, FaInstagram, FaFacebookF, FaGlobe, FaBehance, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                
                {/* Top Section */}
                <div className="footer-cta">
                    <div className="footer-cta-text">
                        <h2>Get started now!</h2>
                        <p>It takes less than a minute of your time.</p>
                    </div>
                    <Link to="/contact" className="footer-quote-btn">
                        Request a quote <BsArrowRight />
                    </Link>
                </div>

                {/* Links Grid */}
                <div className="footer-links-grid">
                    
                    {/* Column 1: Company */}
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/industries">Industries</Link></li>
                            <li><Link to="/works">Works</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services/branding">Branding</Link></li>
                            <li><Link to="/services/experience">Experience Design</Link></li>
                            <li><Link to="/services/technology">Technology</Link></li>
                            <li><Link to="/services/marketing">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Other */}
                    <div className="footer-column">
                        <h4>Other</h4>
                        <ul>
                            <li><Link to="/partnership">Partnership</Link></li>
                            <li><Link to="/awards">Awards and Recognitions</Link></li>
                            <li><Link to="/insights">Insights</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/resource-augmentation">Resource Augmentation</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                            <li><Link to="/clients">Our Clients</Link></li>
                            <li><Link to="/feedback">Submit Feedback to Our CEO</Link></li>
                            <li><Link to="/brochure">Download Brochure</Link></li>
                            <li><Link to="/sitemap">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div className="footer-column-connect">
                        <h4>Connect</h4>
                        <ul>
                            <li className="contact-row">
                                <span className="contact-label">General Enquiry</span>
                                <span className="contact-val">: +91 480 2733 111</span>
                            </li>
                            <li className="contact-row">
                                <span className="contact-label">Sales Enquiry</span>
                                <span className="contact-val">: +91 480 2733 555</span>
                            </li>
                            <li className="contact-row">
                                <span className="contact-label">Email</span>
                                <span className="contact-val">: info@webanatomy.com</span>
                            </li>
                            <li className="contact-row">
                                <span className="contact-label">HR Enquiry</span>
                                <span className="contact-val">: +91 480 2733 999</span>
                            </li>
                            <li className="contact-row">
                                <span className="contact-label">Whatsapp (Sales)</span>
                                <span className="contact-val">: +91 8606 483 399</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div>WAC © {currentYear} All rights reserved</div>
                    
                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <span>|</span>
                        <Link to="/terms">Terms & Conditions</Link>
                    </div>

                    <div className="social-icons">
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaYoutube /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaGlobe /></a>
                        <a href="#"><FaBehance /></a>
                        <a href="#"><FaXTwitter /></a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
