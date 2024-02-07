// SignUpForm.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUpForm = () => {
  const nav = useNavigate();

  const handleSignUp = () => {
    // Add your sign-up logic here
    // For simplicity, just navigate to the chat page
    nav('/chat');
  };

  return (
    <div className="page-container">
    <div className="con">
      <div className="login-box">
        <h2>Sign Up</h2>
        <form>
          <div className="input-box">
            <input type="text" id="name" required />
            <label>Name</label>
          </div>
          <div className="input-box">
            <input type="email" id="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" id="password" required />
            <label>Password</label>
          </div>
          <button type="button" className="btn" onClick={handleSignUp}>
            Sign Up
          </button>
         
        </form>
      </div>
      {Array.from({ length: 50 }, (_, i) => (
        <span key={i} style={{ '--i': i }}></span>
      ))}
    </div>
    </div>
  );
};

export default SignUpForm;
