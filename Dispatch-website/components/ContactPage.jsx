import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../styles/contactPage.css"

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <a href="https://wa.me/19294311882" target="_blank" rel="noopener noreferrer" className="contact-item whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} size="3x" />
          <span className="contact-info"> +1 929 431 1882</span>
        </a>
        <div className="contact-details">
          
          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=Zenithfreightsolutions@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <span className="contact-info" style={{
              "textDecoration" : "none",
              "color" : "#747474"
            }}> Zenithfreightsolutions@gmail.com</span>
          </a>


          <div className="socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-item">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-item">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-item">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
