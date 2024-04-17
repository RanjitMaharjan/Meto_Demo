import React, { useState } from 'react';
import './nav.css';
import NavLink from './navlink';
import logo from '../../Assets/logo.png';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (navTitle) => {
    setActiveNav(navTitle);
    setIsMenuOpen(false); // Close the mobile menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" /> <spam>MetaLogic</spam>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <NavLink
          title="Home"
          isActive={activeNav === 'Home'}
          onClick={() => handleNavClick('Home')}
        />
        <NavLink
          title="Services"
          isActive={activeNav === 'Services'}
          onClick={() => handleNavClick('Services')}
        />
        <NavLink
          title="Career"
          isActive={activeNav === 'Career'}
          onClick={() => handleNavClick('Career')}
        />
        <NavLink
          title="Blogs"
          isActive={activeNav === 'Blogs'}
          onClick={() => handleNavClick('Blogs')}
        />
        <NavLink
          title="About US"
          isActive={activeNav === 'About US'}
          onClick={() => handleNavClick('About US')}
        />
      </div>
      <div className="contact-info">
        <button>Get in Touch</button>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? 'Close Menu' : 'menu'}
      </button>
    </nav>
  );
};

export default Navbar;
