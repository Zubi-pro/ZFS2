// components/Nav.jsx
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { NavLink as Link} from 'react-router-dom';
import '../styles/nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>


        </div>
        <div className="nav-logo">
          <img src="../Pics/logoNew.jpeg" alt="Logo" />
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/service" onClick={toggleMenu}>Services</Link>
          <Link to="/contact" onClick={toggleMenu}>Conatct</Link>
          <Link to="/privacy" onClick={toggleMenu}>Privacy</Link>


        </div>
      </nav>
      <hr style={{"borderTop" : "0.5px solid"}} />
    </>
  );
}

export default Nav;
