import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../stores/userStore';
import './Login.css';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useUserStore();
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus username field on mount
    usernameInputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    if (!username.trim()) {
      setError('Please enter a username');
      setLoading(false);
      return;
    }

    try {
      const success = await login(username.trim(), password);

      if (success) {
        // Get the current user after successful login
        const { currentUser } = useUserStore.getState();

        if (currentUser) {
          // Navigate based on role
          if (currentUser.role === 'child') {
            navigate('/');
          } else if (currentUser.role === 'parent') {
            navigate('/select-child');
          }
        }
      } else {
        // Handle login failure
        if (!password && username.trim()) {
          // Might be a parent trying to login without password
          setError('Incorrect username or password. Parents need a password.');
        } else {
          setError('Incorrect username or password');
        }
        setLoading(false);
      }
    } catch (err) {
      setError('An unexpected error occurred');
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Education Platform</h1>
        <h2 className="login-subtitle">Login</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={usernameInputRef}
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your username"
              disabled={loading}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter password (optional for children)"
              disabled={loading}
              className="form-input"
            />
          </div>

          <p className="help-text">
            Note: Children enter username only. Parents need password.
          </p>

          {error && (
            <div className="error-message" role="alert">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};
