import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HomePage = () => (
  <div>
    <header className="App-header">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={require('./images/logoFF.png')} alt="" className="logoH" />
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/login">
            <button className="nav-button-one">Login</button>
          </Link>
          <Link to="/register">
            <button className="nav-button-two">Register</button>
          </Link>
        </div>
      </nav>
    </header>
    <p className="additional-text">Securely collaborate on content anywhere, anytime with FileFlow!!</p>
    <img src={require('./images/image01.png')} alt="" className="additional-image" />
  </div>
);

export default HomePage;
