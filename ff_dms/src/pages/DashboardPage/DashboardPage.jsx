// DashboardPage.js
import React from 'react';
import './dashboardStyles.css';

const DashboardPage = () => {
  // You may have a variable for the user's name retrieved from somewhere
  const userName = "John Doe"; // Replace this with the actual user's name

  return (
    <div className="dashboard-container">
      {/* Header section */}
      <header className="dashboard-header">
        <div className="logo">
          {/* Your small logo */}
          <img src={require("./images/logoFF.png")} alt="Logo" />
        </div>
        <div className="user-info">
          {/* Welcome message and user icon */}
          <p>Welcome, {userName}!</p>
          {/* User icon */}
          <img src={require("./images/userIcon.png")} alt="User Icon" />
        </div>
      </header>

      {/* Rest of the dashboard content */}
      <div className="dashboard-content">
        {/* Other components and content */}
        {/* ... */}
        <h1>Main Dashboard Content Goes Here</h1>
      </div>
    </div>
  );
};

export default DashboardPage;
