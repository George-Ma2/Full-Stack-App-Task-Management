import React from 'react';

const LogIn = () => {
  const handleLogIn = (event) => {
    event.preventDefault();
    // Handle log-in logic here
  };

  return (
    <form onSubmit={handleLogIn}>
      <h2>Log In</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Log In</button>
      <p>Don't have an account? <a href="/signin">Sign In</a></p>
    </form>
  );
};

export default LogIn;
