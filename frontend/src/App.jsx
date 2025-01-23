import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Login from './Components/login';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
