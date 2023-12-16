import React from "react";
import "./logingPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="left-section">
        {/* Left Section with an image */}
        <img
          src="left-image-url.jpg"
          alt="Left Section"
          className="left-image"
        />
      </div>
      <div className="right-section">
        {/* Right Section with small logo and login form */}
        <div className="logo">
          <img
            src={require("./images/logoFF.png")}
            alt="Logo"
          />
          <p>Nice to see you again!</p>
        </div>
        <form className="login-form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p className="forgot-password">Forgot password?</p>
          <button className="login-button">Login</button>
        </form>
        <div className="social-login">
          <img src="google-image-url.jpg" alt="Sign in with Google" />
          <p>
            Don't have an account? <a href="./register">Register</a>
          </p>
          {/* Adjust href to the correct path for registration */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
