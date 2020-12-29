import React from "react";
import { Link } from "react-router-dom";
import "./ResetPassword.css";

function ResetPassword() {
  return (
    <div className="password-reset">
      <div className="password-reset__img">
        <img
          src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="password-reset"
        />
      </div>
      <div className="password-reset__content">
        <div className="form">
          <h2>Trouble Logging In?</h2>
          <form action>
            <div className="check-policy">
              <label>
                Enter your email, phone, or username and we'll send you a link
                to get back into your account.
              </label>
            </div>
            <div className="input-form">
              <input type="text" name placeholder="Email, Phone, or Username" />
            </div>
            <div className="input-form">
              <input type="submit" value="Send Login Link" />
            </div>
            <div className="option">
              <div className="input-form">
                <p>
                  <Link to="/login">Back To Login</Link>
                </p>
              </div>
              <div>
              <p style={{color: '#607d8b'}}>OR</p>
              </div>
              
              <div className="input-form">
                <p>
                  <Link to="/register">Create New Account</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
