
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook , faInstagram , faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">ZFS</h1>
          <p>
            
Reliable Freight Solutions
Trucking Excellence Guaranteed
Dispatching with Precision and Care
Your Partner in Logistics
Moving Your Business Forward
Safe, Efficient, and Reliable Transportation
Expert Dispatch Services You Can Count On
The Wheels That Keep Your Business Moving
</p>
          
          <div className="contact">
            <span>
              <a href="https://wa.me/19294311882" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                <span className="contact-info"> +1 929 431 1882</span>
              </a>
            </span>
            <span style={{ paddingLeft: "20px" }}>
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=Zenithfreightsolutions@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                <span className="contact-info"> Zenithfreightsolutions@gmail.com</span>
              </a>
            </span>
          </div>


          <div className="socials">
            <a href="https://www.facebook.com/profile.php?id=61557504134284&mibextid=ZbWKwL" target='_blank'><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
            {/* <a href="#"><FontAwesomeIcon icon={faTwitter} size="lg" /></a> */}
            <a href="https://www.instagram.com/zfs_dispatchllc?igsh=OGxwczFwY3Y3MGFr" target='_blank'><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
            {/* <a href="#"><FontAwesomeIcon icon={faYoutube} size="lg" /></a> */}
          </div>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact us</h2>
          <br />
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
            <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
            <button type="submit" className="btn btn-big">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; <a href="mailto:mohtisham138@gmail.com">mohtisham138@gmail.com</a> | Designed by <span className="developer" title="Contact Developer">Muhammad Muhtahsam</span>
        <div className="developer-tooltip">
          <p>Email: <a href="mailto:mohtisham138@gmail.com" style={{ color: '#FF5733' }}>mohtisham138@gmail.com</a></p>
          <p>Phone: <a href="tel:123-456-789" style={{ color: '#33FFC7' }}>+92 300 6183249</a></p>
        </div>
        <a href="https://github.com/Mohtisham-cs01" target="_blank" rel="noopener noreferrer">( Github )</a>
      </div>
    </footer>
  );
}

export default Footer;
