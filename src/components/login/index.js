import React from 'react';
import './login.css';
import LOGO from '../../assets/Netflix-logo-red-black-png.png';
import NETFLIXBG from '../../assets/netflix-bg.jpeg';

const Login = () => {
  return (
    <div
      className="login"
      style={{
        background: `url(${NETFLIXBG}) center no-repeat`,
      }}
    >
      <div className="login__background">
        <img src={LOGO} alt="loginbg" className="login_logo" />
        <button className="login__button">Sign In</button>

        <div className="login__gradient" />
      </div>

      <div className="login__body">
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Waatch anywhere. Cancel at anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="login__input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button className="login__getStarted">
                GET STARTED
              </button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
};

export default Login;
