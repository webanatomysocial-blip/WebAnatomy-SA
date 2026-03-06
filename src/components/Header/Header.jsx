import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/main-logo.png";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/works" },
  { label: "Blog", path: "/blog" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > 100) {
        setHidden(y > lastScrollY);
      } else {
        setHidden(false);
      }
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsTransparent(false);
      return;
    }
    const wrapper = document.getElementById("transparent-header-wrapper");
    if (!wrapper) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsTransparent(entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const showTransparent = isTransparent && !scrolled;

  return (
    <header
      className={`${styles['header-container']} ${hidden ? styles['header-hidden'] : ""} ${
        scrolled ? styles['header-scrolled'] : ""
      } ${showTransparent ? styles['header-transparent'] : ""}`}
    >
      <div className={styles['header-wrapper']}>
        {/* Logo + nav grouped together on the left */}
        <div className={styles['header-left']}>
          <Link to="/" className={styles['header-logo']}>
            <img src={logo} alt="Web Anatomy" />
          </Link>
          <nav className={styles['header-nav']}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${styles['header-nav-link']} ${
                  location.pathname === link.path ? styles.active : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA + mobile toggle on right */}
        <div className={styles['header-right']}>
          <Link to="/contact" className={styles['header-cta']}>
            Lets Collaborate <GoArrowUpRight className={styles['cta-arrow']} />
          </Link>
          <button
            className={styles['header-mobile-toggle']}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile slide-out */}
      <div className={`${styles['header-mobile-menu']} ${mobileOpen ? styles.open : ""}`}>
        <nav className={styles['mobile-nav']}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={styles['mobile-nav-link']}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={styles['mobile-cta']}
            onClick={() => setMobileOpen(false)}
          >
            Lets Collaborate <GoArrowUpRight />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
