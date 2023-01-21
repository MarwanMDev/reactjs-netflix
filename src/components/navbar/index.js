import React, { useEffect, useState } from 'react';
import './navbar.css';
import LOGO from '../../assets/Netflix-logo-red-black-png.png';
import DEFAULTUSER from '../../assets/default-user.png';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const navbarTransition = () => {
    if (window.scrollY > 100) setShow(true);
    else setShow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', navbarTransition);
    return () =>
      window.removeEventListener('scroll', navbarTransition);
  }, []);

  return (
    <div className={`navbar ${show && 'navbar__black'}`}>
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
