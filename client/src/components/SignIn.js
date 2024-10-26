import React from 'react';

const SignIn = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <form onSubmit={handleSignIn}>
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
      <p>Already have an account? <a href="/login">Log In</a></p>
    </form>
  );
};

export default SignIn;
