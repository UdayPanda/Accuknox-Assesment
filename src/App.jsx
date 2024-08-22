// App.js or index.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './controllers/Header';
import Home from './controllers/Home';
import Dashboard from './controllers/Dashboard/Dashboard';

function App() {
  const handleLogout = () => {
    // Implement logout functionality here
    console.log('Logged out');
  };

  const handleSearch = (searchTerm) => {
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <Router>
      <Header onLogout={handleLogout} onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
