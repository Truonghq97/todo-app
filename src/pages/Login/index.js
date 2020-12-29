import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import { Alert } from "antd";
import { message } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginFail, loginSuccess } from "../../features/userSlice";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector((state) => state.user.error);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };
    if (userData.username === "admin" && userData.password === "admin") {
      localStorage.setItem(
        "token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.Q19wsDw9V7rHpaBr4ZpU0l336M_3KkuX-Sbvcw7vxyU"
      );
      dispatch(loginSuccess({ userData }));
      openMessage();
    } else {
      dispatch(
        loginFail({
          errorMessage: "Username or password incorrect",
        })
      );
    }
  };
  const key = "updatable";
  const openMessage = () => {
    message.loading({ content: "Loading...", key });
    document.getElementById("root").classList.add("active");
    setTimeout(() => {
      message.success({ content: "login successful!", key, duration: 2 });
      document.getElementById("root").classList.remove("active");
      history.push("/");
    }, 3000);
  };

  return (
    <div className="login">
      <div className="login-image">
        <img
          src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="Login"
        />
      </div>
      <div className="login-content">
        <div className="form">
          <h2>Login</h2>
          <form>
            <div className="input-form">
              <span>Username</span>
              <input
                type="text"
                name
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-form">
              <span>Password</span>
              <input
                type="password"
                name
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error !== null && <Alert message={error} type="error" showIcon />}

            <div className="remember-me">
              <label>
                <input type="checkbox" name /> Remember me
              </label>
            </div>
            <div className="input-form">
              <input type="submit" value="Login" onClick={handleSubmitLogin} />
            </div>
            <div className="input-form">
              <p>
                <Link to="/reset-password">Forgot password?</Link>
              </p>
            </div>
            <div className="input-form">
              <p>
                Don't have an account?
                <Link to="/register"> Register</Link>
              </p>
            </div>
          </form>
          <h3>Login in with</h3>
          <ul className="icon-login">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaGoogle />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
