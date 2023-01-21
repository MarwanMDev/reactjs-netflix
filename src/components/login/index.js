import React, { useState } from 'react';
import './login.css';
import LOGO from '../../assets/Netflix-logo-red-black-png.png';
import NETFLIXBG from '../../assets/netflix-bg.jpeg';
import SignUp from '../signIn';

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div
      className="login"
      style={{
        background: `url(${NETFLIXBG}) center no-repeat`,
      }}
    >
      <div className="login__background">
        <img src={LOGO} alt="loginbg" className="login_logo" />
        <button
          className="login__button"
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>

        <div className="login__gradient" />
      </div>

      <div className="login__body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart
              your membership.
            </h3>

            <div className="login__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="login__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
