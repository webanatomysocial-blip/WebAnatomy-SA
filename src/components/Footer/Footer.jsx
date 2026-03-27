import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../assets/images/main-logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { GoArrowUp } from "react-icons/go";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-wrapper"]}>
        {/* Logo */}
        <div className={styles["footer-logo"]}>
          <Link to="/">
            <img src={logo} alt="Web Anatomy" />
          </Link>
        </div>

        {/* Grid */}
        <div className={styles["footer-grid"]}>
          {/* Headquarters */}
          <div className={`${styles["footer-col"]} ${styles["footer-col-hq"]}`}>
            <h4 className={styles["footer-col-title"]}>Address</h4>
            <div className={styles["footer-address-list"]}>
                            <div 
                className={`${styles["footer-address"]} ${styles["footer-address-main"]}`}
              >
                <span className={styles["flag-icon"]}>
                  <img src="https://flagcdn.com/w20/in.png" alt="India" style={{ width: '20px', borderRadius: '2px', verticalAlign: 'middle' }} />
                </span> 
                Silicon Valley,Madhapur, <br/>Hyderabad, India
              </div>
              <div className={styles["footer-address"]}>
                <span className={styles["flag-icon"]}>
                  <img src="https://flagcdn.com/w20/za.png" alt="SA" style={{ width: '20px', borderRadius: '2px', verticalAlign: 'middle' }} />
                </span> 
                244 Brooks Street, <br /> Brooklyn, Pretoria
              </div>

            </div>
            <div className={styles["footer-social"]}>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className={styles["footer-col"]}>
            <h4 className={styles["footer-col-title"]}>Company</h4>
            <ul className={styles["footer-links"]}>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles["footer-col"]}>
            <h4 className={styles["footer-col-title"]}>Contact</h4>
            <ul className={styles["footer-links"]}>
              <li>Moumita</li>
              <li>
                <a href="tel:+270733356100">+27 073 335 6100</a>
              </li>
              <li>
                <a href="mailto:hello@businessanatomy.co.za">
                  hello@businessanatomy.co.za
                </a>
              </li>
              <li>
                <a href="mailto:moumita@thewebanatomy.com">
                  moumita@thewebanatomy.com
                </a>
              </li>
            </ul>
          </div>
          {/* Others */}
          <div className={styles["footer-col"]}>
            <h4 className={styles["footer-col-title"]}>Others</h4>
            <ul className={styles["footer-links"]}>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles["footer-bottom"]}>
          <span className={styles["footer-copy"]}>
            {currentYear} © All Rights Reserved, Business Anatomy Digital Services
            In Association with <strong> <a href="https://webanatomy.in">Web Anatomy</a></strong>
          </span>
          <div className={styles["footer-bottom-right"]}>
            <div className={styles["footer-bottom-links"]}>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
            <button
              className={styles["footer-scroll-top"]}
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <GoArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
