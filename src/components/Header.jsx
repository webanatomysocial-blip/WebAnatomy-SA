import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/header.css";
import logo from "../assets/images/main-logo.png";
import {
  BsTelephone,
  BsSearch,
  BsBookmark,
  BsArrowRight,
} from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // State for Transparent Header (White text, transparent BG)
  // Active when in the top sections (Carousel, TextFade, Scroll)
  const [isTransparent, setIsTransparent] = useState(false);

  // State for Services Hover
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const location = useLocation();

  // Scroll Direction & Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 90) {
        if (currentScrollY > lastScrollY) {
          setIsScrolledDown(true);
        } else if (currentScrollY < lastScrollY) {
          setIsScrolledDown(false);
        }
      } else {
        setIsScrolledDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Observer for Transparent Sections
  useEffect(() => {
    if (location.pathname !== "/") {
      setIsTransparent(false); // Default logic for other pages (White BG / Black Text)
      return;
    }

    const targetWrapper = document.getElementById("transparent-header-wrapper");
    if (!targetWrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If we are intersecting the wrapper (HomeCarosule -> HomeScroll)
        // Set transparent mode
        setIsTransparent(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" } // Overlaps header area
    );

    observer.observe(targetWrapper);
    return () => observer.disconnect();
  }, [location.pathname]);

  // Determine final class
  // 1. If Services Hovered AND Scroll == 0: Force Normal (White BG, Black Text) - essentially remove transparent class
  // 2. If Transparent Section active: Add transparent class
  // 3. Else Default (White BG, Black Text)

  // Actually the requirement: "when i hover on the services... header background should be white and text black... only work when scroll is 0"
  // So if Scroll=0 AND Hovered -> Remove Transparent Class (if present).

  const isAtTop = lastScrollY === 0;
  const shouldShowTransparent =
    isTransparent && !(isAtTop && isServicesHovered);

  return (
    <header
      className={`header-container ${isScrolledDown ? "hidden" : ""} ${
        shouldShowTransparent ? "header-transparent" : ""
      }`}
    >
      <div className="header-wrapper">
        <Link to="/" className="logo">
          <img src={logo} alt="WAC Logo" />
        </Link>
        <nav>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-link"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                Services
              </Link>
              <div
                className="mega-menu"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                <div className="mega-menu-content">
                  <div className="mega-column">
                    <h3>Building Strong Capabilities to Empower Your Brand</h3>
                    <Link to="/services" className="mega-link-footer">
                      Go to overview <BsArrowRight />
                    </Link>
                  </div>
                  <div className="mega-column">
                    <h4>
                      Branding <BsArrowRight className="mega-icon" />
                    </h4>
                    <ul>
                      <li>
                        <Link to="/services/brand-consulting">
                          Brand Consulting
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/logo-design">Logo Design</Link>
                      </li>
                      <li>
                        <Link to="/services/industrial-design">
                          Industrial / Product Design
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/graphic-design">
                          Graphic Design
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/visualisation">
                          2D / 3D Visualisation
                        </Link>
                      </li>
                    </ul>
                    <div style={{ marginTop: "30px" }}>
                      <h4>
                        Experience Design <BsArrowRight className="mega-icon" />
                      </h4>
                      <ul>
                        <li>
                          <Link to="/services/ui-ux">UI/UX Design</Link>
                        </li>
                        <li>
                          <Link to="/services/website-design">
                            Website Design
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/mobile-experience">
                            Mobile Experience
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/commerce-experience">
                            Commerce Experience
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mega-column">
                    <h4>
                      Technology <BsArrowRight className="mega-icon" />
                    </h4>
                    <ul>
                      <li>
                        <Link to="/services/ai-ml">AI & Machine Learning</Link>
                      </li>
                      <li>
                        <Link to="/services/devops">DevOps Consulting</Link>
                      </li>
                      <li>
                        <Link to="/services/data-analytics">
                          Data & Analytics
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/web-development">
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/mobile-development">
                          Mobile App Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ecommerce">E-commerce</Link>
                      </li>
                      <li>
                        <Link to="/services/qa-testing">
                          Quality Assurance & Testing
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/cloud">Cloud Services</Link>
                      </li>
                      <li>
                        <Link to="/services/cyber-security">
                          Cyber Security
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-column">
                    <h4>
                      Digital Marketing <BsArrowRight className="mega-icon" />
                    </h4>
                    <ul>
                      <li>
                        <Link to="/services/seo">
                          Search Engine Optimisation
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/social-media">
                          Social Media Management
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/performance-marketing">
                          Performance Marketing
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/content-marketing">
                          Content Marketing
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/automation">
                          Marketing Automation
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/analytics">Analytics</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/solutions" className="nav-link">
                Solutions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/industries" className="nav-link">
                Industries
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/works" className="nav-link">
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/careers" className="nav-link">
                Careers
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <Link to="/contact" className="contact-btn">
            Contact
          </Link>
          <button className="header-icon-btn">
            <BsTelephone />
          </button>
          <button className="header-icon-btn">
            <BsSearch />
          </button>
          <button className="header-icon-btn">
            <BsBookmark />
          </button>
          <div className="menu-toggle">
            <HiOutlineMenuAlt3 />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
