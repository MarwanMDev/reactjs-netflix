import React from 'react';
import './navbar.css';
import LOGO from '../../assets/Netflix-logo-red-black-png.png';
import DEFAULTUSER from '../../assets/default-user.png';

const Navbar = () => {
  return (
    <div className="navbar navbar__black">
      <div className="navbar__contents">
        <img src={LOGO} alt="logo" className="navbar__logo" />
        <img
          src={DEFAULTUSER}
          alt="logo"
          className="navbar__avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
