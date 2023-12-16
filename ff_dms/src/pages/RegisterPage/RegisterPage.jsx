import React from 'react';
import './registerPage.css'; // Create this CSS file for styling

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="left-section">
        {/* Left Section with an image */}
        <img
          src={require('./images/register.png')}
          alt="Left Section"
          className="left-image"
        />
      </div>
      <div className="right-section">
        {/* Right Section */}
        <div className="logo">
          <img src={require('./images/logoFF.png')} alt="Logo" />
          <p>Welcome! Create an account,</p>
        </div>
        <form className="register-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Mobile Number" />
          <select>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button className="register-button">Register</button>
        </form>
        <div className="social-login">
          <img
            src={require('./images/google.png')}
            alt="Sign up with Google"
          />
          <p>
            Already have an account? <a href="./login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
