import React from 'react';
import './signup.css';

const SignUp = () => {
  return (
    <div className="signup">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>

        <h4>
          <span className="signup__gray">New to netflix?</span>{' '}
          <span className="signup__link">Sign Up now</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
