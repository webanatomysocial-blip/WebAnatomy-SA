import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Failed to send message.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles["wa-contact-form-wrap"]}>
      <form className={styles["wa-contact-form"]} onSubmit={handleSubmit}>
        <div className={styles["wa-form-row"]}>
          <div className={styles["wa-form-field"]}>
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter first name"
              required
            />
          </div>
          <div className={styles["wa-form-field"]}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className={styles["wa-form-row"]}>
          <div className={styles["wa-form-field"]}>
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              required
            />
          </div>
          <div className={styles["wa-form-field"]}>
            <label>Phone Number*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your number"
              required
            />
          </div>
        </div>

        <div className={styles["wa-form-field"]}>
          <label>Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Enter your company name"
          />
        </div>

        <div className={styles["wa-form-field"]}>
          <label>Tell Us More</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Brief about your project"
          />
        </div>

        <div className={styles["wa-form-consent"]}>
          <input type="checkbox" id="wa-policy" required />
          <label htmlFor="wa-policy">
            I have read the <a href="/privacy-policy">privacy policy</a> and
            consent to the processing of my data
          </label>
        </div>

        {status.message && (
          <div className={`${styles["wa-form-status"]} ${styles[status.type]}`}>
            {status.message}
          </div>
        )}

        <button
          type="submit"
          className={styles["wa-contact-submit"]}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Enquiry"}{" "}
          <GoArrowRight className={styles["arrow-icon"]} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
