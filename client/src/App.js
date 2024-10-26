import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Authentication from './components/Authentication';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';
import TaskManager from './components/TaskManager';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/check'); 
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error checking authentication status:', error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/login" element={<LogIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route 
            path="/tasks" 
            element={<ProtectedRoute element={<TaskManager />} isAuthenticated={isAuthenticated} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
