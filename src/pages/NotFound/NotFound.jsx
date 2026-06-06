import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className={styles.glitchWrapper}>
          <motion.h1 
            className={styles.title}
            initial={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
          >
            404
          </motion.h1>
        </div>
        
        <motion.h2 
          className="sub-head-text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p 
          className={`para-text-white ${styles.subtitle}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </motion.p>

        <motion.div 
          className={styles.buttonContainer}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <Link to="/" className="white-bg-btn" style={{ textDecoration: 'none' }}>
            Back to Home
            <FiArrowRight className="arrow-icon" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
