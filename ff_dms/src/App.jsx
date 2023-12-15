import React from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-left">
            <img src={require('./images/logoFF.png')} alt="" className="logo" />
          </div>
          <div className="navbar-right">
            <button className="nav-button-one">Login</button>
            <button className="nav-button-two">Register</button>
          </div>
        </nav>
      </header>
      {/* Other content of your homepage */}

      <div>
      <p className="additional-text">Securely collaborate on content 
anywhere, anytime with FileFlow!!</p>
        <img src={require('./images/image01.png')} alt="" className="additional-image" />
      </div>
    </div>
  );
}

export default App;

