import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <img 
                src="/logo.png" 
                alt="Auto Care Link Logo" 
                className="img-fluid me-2"
                style={{ height: '40px' }}
              />
              <h4 className="mb-0 text-gradient">Auto Care Link</h4>
            </div>
            <p className="mb-4">
              Connecting car owners with trusted repair shops through transparency, convenience, and fair pricing.
            </p>
            <div className="d-flex gap-3 social-icons">
              <a href="#" className="text-white"><FaFacebook size={20} /></a>
              <a href="#" className="text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-white"><FaLinkedin size={20} /></a>
              <a href="#" className="text-white"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 col-lg-2 mb-4 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-white-50 hover-white">Home</a></li>
              <li className="mb-2"><a href="/about" className="text-white-50 hover-white">About Us</a></li>
              <li className="mb-2"><a href="/services" className="text-white-50 hover-white">Services</a></li>
              <li className="mb-2"><a href="/how-it-works" className="text-white-50 hover-white">How It Works</a></li>
              <li className="mb-2"><a href="/testimonials" className="text-white-50 hover-white">Testimonials</a></li>
              <li><a href="/contact" className="text-white-50 hover-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-4 col-lg-2 mb-4 mb-md-0">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/services/mechanical" className="text-white-50 hover-white">Mechanical Repairs</a></li>
              <li className="mb-2"><a href="/services/panel-beating" className="text-white-50 hover-white">Panel Beating</a></li>
              <li className="mb-2"><a href="/services/tyres" className="text-white-50 hover-white">Tyre Services</a></li>
              <li className="mb-2"><a href="/services/scrap-yard" className="text-white-50 hover-white">Scrap Yard</a></li>
              <li className="mb-2"><a href="/services/accessories" className="text-white-50 hover-white">Accessories</a></li>
              <li><a href="/services/roadside" className="text-white-50 hover-white">Roadside Assistance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-4">
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex">
                <MdLocationOn size={20} className="me-3 mt-1 text-primary" />
                <span className="text-white-50">123 Auto Care St, Johannesburg, 2000</span>
              </li>
              <li className="mb-3 d-flex">
                <MdPhone size={20} className="me-3 mt-1 text-primary" />
                <span className="text-white-50">+27 12 345 6789</span>
              </li>
              <li className="d-flex">
                <MdEmail size={20} className="me-3 mt-1 text-primary" />
                <span className="text-white-50">info@autocarelink.co.za</span>
              </li>
            </ul>

            <div className="mt-4 newsletter">
              <h6 className="mb-2">Subscribe to Newsletter</h6>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control bg-dark border-secondary" 
                  placeholder="Your email" 
                  aria-label="Your email"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0 text-white-50 small">
              &copy; {new Date().getFullYear()} Auto Care Link. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-inline mb-0 small">
              <li className="list-inline-item"><a href="/privacy" className="text-white-50 hover-white">Privacy Policy</a></li>
              <li className="list-inline-item mx-2">•</li>
              <li className="list-inline-item"><a href="/terms" className="text-white-50 hover-white">Terms of Service</a></li>
              <li className="list-inline-item mx-2">•</li>
              <li className="list-inline-item"><a href="/cookies" className="text-white-50 hover-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* CSS for hover effects */}
      <style jsx>{`
        .hover-white:hover {
          color: white !important;
          text-decoration: none;
        }
        .social-icons a {
          transition: all 0.3s ease;
          opacity: 0.7;
        }
        .social-icons a:hover {
          opacity: 1;
          transform: translateY(-2px);
        }
        .text-gradient {
          background: linear-gradient(90deg, #0d6efd, #00b4ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .newsletter .form-control:focus {
          background-color: #1a1a1a;
          border-color: #0d6efd;
          color: white;
        }
      `}</style>
    </footer>
  );
};

export default Footer;