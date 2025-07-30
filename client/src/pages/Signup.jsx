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
    <div className="signup-container">
      <div className="card shadow-lg">
        <div className="row g-0">
          {/* Left Side - Image (hidden on mobile) */}
          <div className="col-md-6 d-none d-md-block">
            <div className="h-100 d-flex align-items-center justify-content-center">
              <img
                src={logo}
                alt="Signup visual"
                className="img-fluid p-4"
                style={{ maxHeight: '80%', objectFit: 'contain' }}
              />
            </div>
          </div>
          
          {/* Right Side - Signup Form */}
          <div className="col-md-6 p-4 p-md-5">
            <div className="form-container">
              <div className="text-center mb-4">
                <h2 className="fw-bold">Create Your Account</h2>
                <p className="text-muted">Join as a customer or business</p>
              </div>

              {/* User Type Selector */}
              <div className="user-type-selector mb-4">
                <button
                  type="button"
                  className={`btn ${userType === 'customer' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setUserType('customer')}
                >
                  I'm a Customer
                </button>
                <button
                  type="button"
                  className={`btn ${userType === 'business' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setUserType('business')}
                >
                  I'm a Business
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Common Fields */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    {userType === 'customer' ? 'Full Name' : 'Representative Name'}
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder={userType === 'customer' ? 'John Doe' : 'Your name'}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaPhone />
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaLock />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaLock />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">{errors.confirmPassword}</div>
                    )}
                  </div>
                </div>

                {/* Business Specific Fields */}
                {userType === 'business' && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="businessName" className="form-label">Business Name</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaBuilding />
                        </span>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          className={`form-control ${errors.businessName ? 'is-invalid' : ''}`}
                          placeholder="Your business name"
                          value={formData.businessName}
                          onChange={handleChange}
                        />
                        {errors.businessName && (
                          <div className="invalid-feedback">{errors.businessName}</div>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="businessType" className="form-label">Business Type</label>
                      <select
                        id="businessType"
                        name="businessType"
                        className={`form-select ${errors.businessType ? 'is-invalid' : ''}`}
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
                        <div className="invalid-feedback">{errors.businessType}</div>
                      )}
                    </div>
                  </>
                )}

                <button
                  className="btn btn-primary w-100 mt-3"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Creating Account...
                    </>
                  ) : (
                    `Sign Up as ${userType === 'customer' ? 'Customer' : 'Business'}`
                  )}
                </button>

                <div className="text-center mt-3">
                  <p className="text-muted">
                    Already have an account?{' '}
                    <a href="/login" className="text-decoration-none fw-semibold">
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