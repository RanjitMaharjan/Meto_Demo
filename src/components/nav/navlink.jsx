import React from 'react';

const NavLink = ({ title, isActive, onClick }) => {
  return (
    <div className={`nav-link ${isActive ? 'active' : ''}`} onClick={onClick}>
      {title}
    </div>
  );
};

export default NavLink;
