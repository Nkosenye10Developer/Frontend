import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from '/logo.png';
import '../Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Add scroll effect listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const handleBookService = () => {
    // Check if user is logged in (you would replace this with your actual auth check)
    const isLoggedIn = localStorage.getItem('authToken');
    if (!isLoggedIn) {
      toast('Please login to book a service', { 
        icon: '🔒',
        position: 'top-right'
      });
      navigate('/login');
      return;
    }
    navigate('/book-service');
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${isScrolled ? 'bg-dark shadow-lg' : 'bg-dark'} fixed-top py-2 py-lg-1 transition-all`}>
      <div className="container">
        {/* Brand Logo & Name */}
        <div className="d-flex align-items-center">
          <NavLink 
            className="navbar-brand d-flex align-items-center me-4" 
            to="/"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img 
              src={logo} 
              alt="Auto Care Link Logo" 
              className="img-fluid me-2" 
              style={{ height: '40px', width: 'auto' }}
            />
            <span className="fs-4 fw-bold text-gradient">Auto Care Link</span>
          </NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNavbar" 
          aria-controls="mainNavbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* Center-aligned Navigation Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1 mx-lg-2">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 position-relative ${isActive ? 'active' : ''}`
                } 
                to="/"
              >
                Home
                <span className="nav-underline"></span>
              </NavLink>
            </li>
            <li className="nav-item mx-1 mx-lg-2">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 position-relative ${isActive ? 'active' : ''}`
                } 
                to="/about"
              >
                About
                <span className="nav-underline"></span>
              </NavLink>
            </li>
            <li className="nav-item dropdown mx-1 mx-lg-2">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 dropdown-toggle ${isActive ? 'active' : ''}`
                } 
                to="/features" 
                id="featuresDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Features
                <span className="nav-underline"></span>
              </NavLink>
              <ul className="dropdown-menu shadow" aria-labelledby="featuresDropdown">
                <li><NavLink className="dropdown-item" to="/features/customers">For Customers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/features/workshops">For Workshops</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item" to="/features/all">All Features</NavLink></li>
              </ul>
            </li>
            
            <li className="nav-item mx-1 mx-lg-2">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 position-relative ${isActive ? 'active' : ''}`
                } 
                to="/contact"
              >
                Contact
                <span className="nav-underline"></span>
              </NavLink>
            </li>
          </ul>

          {/* Right-aligned CTA Buttons */}
          <div className="d-flex align-items-center ms-lg-3 gap-2">
            <Link 
              to="/login" 
              className="btn btn-outline-light me-2 px-3 px-lg-4 py-2 fw-medium"
            >
              Login
            </Link>
            <button
              onClick={handleBookService}
              className="btn btn-primary px-3 px-lg-4 py-2 fw-medium position-relative overflow-hidden book-service-btn"
            >
              <span className="position-relative z-index-1">Book Service</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;