import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCar, FaTools, FaShieldAlt, FaChartLine, FaPhoneAlt, FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import assets  from '../assets/image3.jpg'
import assets2 from '../assets/image2.jpg'
import assets3 from '../assets/image1.jpg'
import assestService1 from '../assets/PanelBeating.jpg'
import assestService2 from '../assets/MechanicRepairs.jpg'
import assestService3 from '../assets/TyreServices.jpg'
import assestService4 from '../assets/ScrapYard.jpg'
import assestService5 from '../assets/Accessories.jpg'

function Body() {
  const [activeTab, setActiveTab] = useState('customers');
  const navigate = useNavigate();

  // Unsplash image URLs
  const services = [
    { 
      name: "Mechanical Repairs", 
      icon: <FaTools size={28} />,
      description: "Expert engine, transmission, and brake repairs by certified mechanics",
      image:assestService2
    },
    { 
      name: "Panel Beating", 
      icon: <FaCar size={28} />,
      description: "Professional dent removal and bodywork restoration services",
      image: assestService1
    },
    { 
      name: "Tyre Services", 
      icon: <FaShieldAlt size={28} />,
      description: "Tire fitting, balancing, and repair for all vehicle types",
      image: assestService3
    },
    { 
      name: "Scrap Yard", 
      icon: <FaCar size={28} />,
      description: "Find quality used parts or sell your end-of-life vehicle",
      image:assestService4
    },
    { 
      name: "Accessories", 
      icon: <FaStar size={28} />,
      description: "Enhance your vehicle with premium audio and security systems",
      image: assestService5
    }
    
  ];

  const testimonials = [
    { 
      name: "Sarah Johnson",
      role: "Customer",
      quote: "Found a trustworthy mechanic in minutes and saved 30% on my brake repair!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    { 
      name: "Mike's Auto Shop",
      role: "Partner Workshop",
      quote: "Our customer base grew by 40% since joining Auto Care Link. The platform is fantastic.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    { 
      name: "David Wilson",
      role: "Customer",
      quote: "Real-time updates on my car's repair status gave me complete peace of mind.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section bg-dark text-white py-5 py-lg-6 position-relative mb-1">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                Connecting <span className="text-primary">Car Owners</span> with Trusted <span className="text-primary">Repair Shops</span>
              </h1>
              <p className="lead mb-4">
                Auto Care Link bridges the gap between vehicle owners and qualified auto service providers with transparency, convenience, and fair pricing.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button 
                  className="btn btn-primary btn-lg px-4 py-3"
                  onClick={() => navigate('/signup')}
                >
                  Get Started as Customer
                </button>
                <button 
                  className="btn btn-outline-light btn-lg px-4 py-3"
                  onClick={() => navigate('/signup')}
                >
                  Join as Workshop
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-container position-relative">
                <img 
                  src={assets} 
                  alt="Mechanic working on car" 
                  className="img-fluid rounded-3 shadow-lg"
                  loading="lazy"
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* How It Works */}
      <section className="py-6 bg-light mb-3">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">How Auto Care Link Works</h2>
            <p className="lead text-muted max-w-800 mx-auto">
              Our simple 4-step process makes auto repairs stress-free and transparent
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 d-inline-flex mb-4">
                    <span className="display-6 fw-bold">1</span>
                  </div>
                  <h4 className="mb-3">Describe Your Issue</h4>
                  <p className="text-muted">
                    Tell us what's wrong with your vehicle or what service you need through our easy form
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 d-inline-flex mb-4">
                    <span className="display-6 fw-bold">2</span>
                  </div>
                  <h4 className="mb-3">Get Matched</h4>
                  <p className="text-muted">
                    We connect you with qualified, vetted workshops in your area based on your needs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 d-inline-flex mb-4">
                    <span className="display-6 fw-bold">3</span>
                  </div>
                  <h4 className="mb-3">Compare Quotes</h4>
                  <p className="text-muted">
                    Receive transparent pricing from multiple shops and choose the best option
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 d-inline-flex mb-4">
                    <span className="display-6 fw-bold">4</span>
                  </div>
                  <h4 className="mb-3">Track Progress</h4>
                  <p className="text-muted">
                    Get real-time updates on your repair status through our app or notifications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-6 mt-4">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Services</h2>
            <p className="lead text-muted max-w-800 mx-auto">
              Comprehensive auto care solutions for all your vehicle needs
            </p>
          </div>
          
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all overflow-hidden">
                  <div className="ratio ratio-16x9">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="object-fit-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body p-4 text-center">
                    <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 d-inline-flex mb-4">
                      {service.icon}
                    </div>
                    <h4 className="mb-3">{service.name}</h4>
                    <p className="text-muted mb-0">
                      {service.description}
                    </p>
                    <button className="btn btn-link text-primary mt-3">
                      Learn more →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer/Workshop Tabs */}
      <section className="py-6 bg-light mb-3">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Benefits for Everyone</h2>
            <p className="lead text-muted max-w-800 mx-auto">
              Whether you're a car owner or repair shop, Auto Care Link delivers value
            </p>
          </div>
          
          <ul className="nav nav-tabs justify-content-center mb-5" id="benefitsTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'customers' ? 'active' : ''}`}
                onClick={() => setActiveTab('customers')}
              >
                For Customers
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'workshops' ? 'active' : ''}`}
                onClick={() => setActiveTab('workshops')}
              >
                For Workshops
              </button>
            </li>
          </ul>
          
          <div className="tab-content">
            <div className={`tab-pane fade ${activeTab === 'customers' ? 'show active' : ''}`}>
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <img 
                    src={assets2} 
                    alt="Happy customer" 
                    className="img-fluid rounded-3 shadow"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-6">
                  <h3 className="mb-4">Why Customers Love Auto Care Link</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3 flex-shrink-0">
                        <FaChartLine size={20} />
                      </div>
                      <div>
                        <h5 className="mb-1">Transparent Pricing</h5>
                        <p className="text-muted mb-0">Compare quotes from multiple shops to get the best value</p>
                      </div>
                    </li>
                    <li className="mb-3 d-flex">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3 flex-shrink-0">
                        <FaShieldAlt size={20} />
                      </div>
                      <div>
                        <h5 className="mb-1">Vetted Professionals</h5>
                        <p className="text-muted mb-0">All workshops are thoroughly screened and rated</p>
                      </div>
                    </li>
                    <li className="mb-3 d-flex">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3 flex-shrink-0">
                        <FaPhoneAlt size={20} />
                      </div>
                      <div>
                        <h5 className="mb-1">Real-Time Updates</h5>
                        <p className="text-muted mb-0">Track your service progress through our platform</p>
                      </div>
                    </li>
                    <li className="d-flex">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3 flex-shrink-0">
                        <FaStar size={20} />
                      </div>
                      <div>
                        <h5 className="mb-1">Satisfaction Guaranteed</h5>
                        <p className="text-muted mb-0">We mediate any issues to ensure your satisfaction</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`tab-pane fade ${activeTab === 'workshops' ? 'show active' : ''}`}>
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <img 
                    src={assets3} 
                    alt="Auto workshop" 
                    className="img-fluid rounded-3 shadow"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-6">
                  <h3 className="mb-4">How Workshops Benefit</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3 flex-shrink-0">
                        <FaChartLine size={20} />
                      </div>
                      <div>
                        <h5 className="mb-1">Increased Visibility</h5>
                        <p className="text-muted mb-0">Reach more customers in your service area</p>
                      </div>
                    </li>
                    <li className="mb-3 d-flex">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3 flex-shrink-0">
                        <FaTools size={20} />
                      </div>
                      <div>
                        <h5 className="mb-1">Efficient Management</h5>
                        <p className="text-muted mb-0">Digital job cards, scheduling, and inventory tools</p>
                      </div>
                    </li>
                    <li className="mb-3 d-flex">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3 flex-shrink-0">
                        <FaShieldAlt size={20} />
                      </div>
                      <div>
                        <h5 className="mb-1">Secure Payments</h5>
                        <p className="text-muted mb-0">Get paid promptly through our secure system</p>
                      </div>
                    </li>
                    <li className="d-flex">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3 flex-shrink-0">
                        <FaStar size={20} />
                      </div>
                      <div>
                        <h5 className="mb-1">Performance Insights</h5>
                        <p className="text-muted mb-0">Access analytics to grow your business</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-6 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Experience Better Auto Care?</h2>
              <p className="lead mb-5">
                Join thousands of satisfied customers and workshops using Auto Care Link today.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button 
                  className="btn btn-light btn-lg px-5 py-3"
                  onClick={() => navigate('/signup')}
                >
                  Sign Up Free
                </button>
                <button 
                  className="btn btn-outline-light btn-lg px-5 py-3"
                  onClick={() => navigate('/signup')}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;