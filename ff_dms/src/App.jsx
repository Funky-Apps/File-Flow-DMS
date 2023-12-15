import React from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-left">
            <img src="src\logo.png" alt="Logo" className="logo" />
          </div>
          <div className="navbar-right">
            <button className="nav-button">Button 1</button>
            <button className="nav-button">Button 2</button>
          </div>
        </nav>
      </header>
      {/* Other content of your homepage */}
    </div>
  );
}

export default App;

