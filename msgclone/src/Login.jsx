import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const nav = useNavigate();

  const handleLogin = () => {
    // Authentication logic for the Login component
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === 'vasu' && password.trim() === 'vasu@123') {
      nav('/Chat');
      alert(`Welcome, ${username}!`);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleSignUp = () => {
    nav('/sign');
  };

  return (
    <div className="page-container">
      <div className="con">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="input-box">
              <input type="text" id="username" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input type="password" id="password" required />
              <label>Password</label>
            </div>
            <button type="button" className="btn" onClick={handleLogin}>
              Login
            </button>
          </form>
          <div className="signup-link">
            <Link to="/sign">Sign Up</Link>
          </div>
        </div>
        {Array.from({ length: 50 }, (_, i) => (
          <span key={i} style={{ '--i': i }}></span>
        ))}
      </div>
    </div>
  );
};

export default Login;
