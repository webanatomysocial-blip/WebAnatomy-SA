import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CookieConsent.module.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // In a real app, this is where you'd initialize tracking/analytics scripts
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    // Ensure tracking scripts are disabled/not loaded
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.content}>
          <h3 className={styles.title}>We Value Your Privacy</h3>
          <p className={styles.text}>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies in accordance with the POPI Act. 
            Read our <Link to="/privacy" className={styles.link}>Privacy Policy</Link> for more details on the data we collect.
          </p>
        </div>
        <div className={styles.actions}>
          <button onClick={handleDecline} className={styles.declineBtn}>
            Decline
          </button>
          <button onClick={handleAccept} className={styles.acceptBtn}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
