import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import '../Login.css';
import logo from '../assets/Ellipse 3.png'
import toast from 'react-hot-toast';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    // Here you would typically call your authentication API
    console.log('Login attempt with:', { email, password, rememberMe });
    

    
    toast.success("Logged successfully");
    // On successful login:
    navigate('/dashboard'); // Redirect to the layout page


    setTimeout(() => {
      toast.success(
          responseData.Message ||
          responseData.message ||
          'Login successful',
          {
              duration: 2000,
              position: 'top-center',

          }
      );
  }, 100);
  };

  return (
    <div className="d-flex flex-row align-items-center justify-content-center bg-light mt-5 mb-5 h-100 w-100 color">
      <div className="card shadow-lg ">
        <div className="row g-0">
          {/* Left Side - Image (hidden on mobile) */}
          <div className="col-md-6 d-none d-md-block bg-light">
            <div className="h-100 d-flex align-items-center justify-content-center">
              <img
                src={logo}
                alt="Login visual"
                className="img-fluid p-4"
                style={{ maxHeight: '80%', objectFit: 'contain' }}
              />
            </div>
          </div>
          
          {/* Right Side - Login Form */}
          <div className='col-md-6 p-4 p-md-5 color '>
          <div className="bg-light p-4 inner">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Welcome Back</h2>
              <p className="text-muted">Login to your account</p>
            </div>

            {error && (
              <div className="alert alert-danger alert-dismissible fade show">
                {error}
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setError('')}
                ></button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="d-flex justify-content-between mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="form-check-input"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <a href="/forgot-password" className="text-decoration-none">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button className="control btn btn-primary w-100" type="submit" disabled={isLoading}>
                        {isLoading ? (<div> <span className="spinner"></span> LOGGING IN...</div> ) : 'LOGIN'}
                    </button>

              {/* Sign Up Link */}
              <div className="text-center mt-3">
                <p className="text-muted">
                  Don't have an account?{' '}
                  <a href="/signup" className="text-decoration-none fw-semibold">
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;