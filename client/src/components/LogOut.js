import React from 'react';

const LogOut = ({ setIsAuthenticated }) => {
  const handleLogOut = async () => {
    try {
      const response = await fetch('https://full-stack-app-task-management.onrender.com/auth/logout', {
        method: 'POST'
      });

      if (response.ok) {
        setIsAuthenticated(false); // Update the authentication state
        alert('Logout successful!');
      } else {
        const errorMessage = await response.text();
        alert(errorMessage); // Display any error message from the server
      }
    } catch (error) {
      console.error('Logout error:', error);
      alert('An unexpected error occurred during logout.');
    }
  };

  return (
    <button onClick={handleLogOut}>
      Log Out
    </button>
  );
};

export default LogOut;
