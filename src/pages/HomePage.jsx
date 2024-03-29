// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// This is the home page component
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Bus Booking App</h1>
      <p>Book your bus tickets easily with our app.</p>
      <Link to="/search">Search Buses</Link>
    </div>
  );
};

export default HomePage;