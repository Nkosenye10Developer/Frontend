import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaBuilding, FaPhone, FaEye, FaEyeSlash } from 'react-icons/fa';
import '../Signup.css';
import logo from '../assets/Ellipse 3.png';
import toast from 'react-hot-toast';

function Signup() {
  const [userType, setUserType] = useState('customer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    businessName: '',
    businessType: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    
    if (userType === 'business') {
      if (!formData.businessName) newErrors.businessName = 'Business name is required';
      if (!formData.businessType) newErrors.businessType = 'Business type is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`${userType === 'customer' ? 'Customer' : 'Business'} account created successfully!`);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-layout">
          {/* Left Side - Image (hidden on mobile) */}
          <div className="signup-image-container">
            <img
              src={logo}
              alt="Signup visual"
              className="signup-image"
            />
          </div>
          
          {/* Right Side - Signup Form */}
          <div className="signup-form-container">
            <div className="signup-form">
              <div className="signup-header">
                <h2>Create Your Account</h2>
                <p>Join as a customer or business</p>
              </div>

              {/* User Type Selector */}
              <div className="user-type-selector">
                <button
                  type="button"
                  className={`user-type-btn ${userType === 'customer' ? 'primary' : 'secondary'}`}
                  onClick={() => setUserType('customer')}
                >
                  I'm a Customer
                </button>
                <button
                  type="button"
                  className={`user-type-btn ${userType === 'business' ? 'primary' : 'secondary'}`}
                  onClick={() => setUserType('business')}
                >
                  I'm a Business
                </button>
              </div>

              <form onSubmit={handleSubmit} className="signup-form-fields">
                {/* Common Fields */}
                <div className="form-group">
                  <label htmlFor="name">
                    {userType === 'customer' ? 'Full Name' : 'Representative Name'}
                  </label>
                  <div className="input-group">
                    <span className="input-icon">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-input ${errors.name ? 'invalid' : ''}`}
                      placeholder={userType === 'customer' ? 'John Doe' : 'Your name'}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-group">
                    <span className="input-icon">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${errors.email ? 'invalid' : ''}`}
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="input-group">
                    <span className="input-icon">
                      <FaPhone />
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-input ${errors.phone ? 'invalid' : ''}`}
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                    <span className="input-icon">
                      <FaLock />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className={`form-input ${errors.password ? 'invalid' : ''}`}
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      className="password-toggle"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.password && <div className="error-message">{errors.password}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-group">
                    <span className="input-icon">
                      <FaLock />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      className={`form-input ${errors.confirmPassword ? 'invalid' : ''}`}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                      <div className="error-message">{errors.confirmPassword}</div>
                    )}
                  </div>
                </div>

                {/* Business Specific Fields */}
                {userType === 'business' && (
                  <>
                    <div className="form-group">
                      <label htmlFor="businessName">Business Name</label>
                      <div className="input-group">
                        <span className="input-icon">
                          <FaBuilding />
                        </span>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          className={`form-input ${errors.businessName ? 'invalid' : ''}`}
                          placeholder="Your business name"
                          value={formData.businessName}
                          onChange={handleChange}
                        />
                        {errors.businessName && (
                          <div className="error-message">{errors.businessName}</div>
                        )}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="businessType">Business Type</label>
                      <select
                        id="businessType"
                        name="businessType"
                        className={`form-select ${errors.businessType ? 'invalid' : ''}`}
                        value={formData.businessType}
                        onChange={handleChange}
                      >
                        <option value="">Select business type</option>
                        <option value="mechanic">Auto Mechanic</option>
                        <option value="dealership">Car Dealership</option>
                        <option value="parts">Auto Parts Store</option>
                        <option value="towing">Towing Service</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.businessType && (
                        <div className="error-message">{errors.businessType}</div>
                      )}
                    </div>
                  </>
                )}

                <button
                  className="submit-btn"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner" role="status" aria-hidden="true"></span>
                      Creating Account...
                    </>
                  ) : (
                    `Sign Up as ${userType === 'customer' ? 'Customer' : 'Business'}`
                  )}
                </button>

                <div className="login-link">
                  <p>
                    Already have an account?{' '}
                    <a href="/login">
                      Log in
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

export default Signup;
