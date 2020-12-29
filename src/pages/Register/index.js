import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <div className="register-image">
        <img
          src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="rigister"
        />
      </div>
      <div className="register-content">
        <div className="form">
          <h2>Register</h2>
          <form action>
            <div className="input-form">
              <span>Username</span>
              <input type="text" name />
            </div>
            <div className="input-form">
              <span>Password</span>
              <input type="password" name />
            </div>
            <div className="input-form">
              <span>Re-enter password</span>
              <input type="password" name />
            </div>
            <div className="check-policy">
              <label>
                <input type="checkbox" name /> By clicking Sign Up, you agree to
                our Terms, Data Policy and Cookie Policy. You may receive SMS
                notifications from us and can opt out at any time
              </label>
            </div>
            <div className="input-form">
              <input type="submit" value="Register" />
            </div>
            <div className="input-form">
              <p>
                Already have an account?
                <Link to="/login"> Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
