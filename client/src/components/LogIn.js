import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignInRedirect = () => {
    navigate('/signin');
  };

  const handleLogIn = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('https://full-stack-app-task-management.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        navigate('/tasks');
      } else {
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleLogIn}>
      <h2>Log In</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button type="submit">Log In</button>
      <p>
        Don't have an account? 
        <button type="button" onClick={handleSignInRedirect}>
          Sign In
        </button>
      </p>

    </form>
  );
};

export default LogIn;
