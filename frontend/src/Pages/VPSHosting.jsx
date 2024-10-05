import React from 'react'
import './CSS/VPSHosting.css'
import hs_vps_img_2 from './Assets/hs_vps_img_2.png'
import dedicated_resources from './Assets/dedicated_resources.png'
import scalability from './Assets/scalability.png'
import full_control from './Assets/full_control.png'
import enhanced_security from './Assets/enhanced_security.png'
import optimal_performance from './Assets/optimal_performance.png'
import custom_configuration from './Assets/custom_configuration.png'
import flexible_operating_systems from './Assets/flexible_operating_systems.png'
import managed_unmanaged from './Assets/managed_unmanaged.png'
import support from './Assets/support.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'



const VPSHosting = () => {

  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
};



  return (
    <div className='hs-vps'>
      <div className="hs-vps-header">
        <div className="hs-vps-title-1">
          <h2>VPS Hosting</h2>
          <p>For businesses that demand more power, flexibility, and control over their hosting environment, Virtual Private Server (VPS) hosting is the perfect solution. At PCL Infotech, our VPS hosting services offer a scalable, secure, and highly customizable hosting environment tailored to meet your unique needs.          </p>
          <button>View Pricing</button>
        </div>
        <div className="hs-domain-img-1">
          <img src={hs_vps_img_2} alt="" />
        </div>
      </div>
      <div className="hs-vps-card">
        <div className="hs-vps-subcard">
          <h2>Our VPS Hosting Services Include</h2>
        </div>
        <div className="hs-vps-subcard-1">
          <div className="dedicated-resources">
            <img src={dedicated_resources} alt="" />
            <h3>Dedicated Resources</h3>
            <p>Unlike shared hosting, VPS hosting provides you with your own
              allocated resources such as CPU, RAM, and storage. This ensures that your website’s
              performance is not affected by other users.
            </p>
          </div>
          <div className="scalability">
            <img src={scalability} alt="" />
            <h3>Scalability</h3>
            <p>As your business grows, your hosting requirements may change. Our VPS
              hosting solutions are designed to scale with your needs, providing more resources
              whenever you need them without any downtime or disruptions.
            </p>
          </div>
          <div className="full-control">
            <img src={full_control} alt="" />
            <h3>Full Control</h3>
            <p>With root access, you gain complete control over your server, allowing
              you to install custom software, configure your server environment, and manage all
              aspects of your hosting setup.
            </p>
          </div>
        </div>
        <div className="hs-vps-subcard-2">
          <div className="enhanced-security">
            <img src={enhanced_security} alt="" />
            <h3>Enhanced Security</h3>
            <p>VPS hosting offers a more secure environment compared to shared
              hosting, as your virtual server is isolated from other users. We also implement advanced
              security measures such as firewalls, DDoS protection, and regular monitoring to keep
              your server safe.
            </p>
          </div>
          <div className="optimal-performance">
            <img src={optimal_performance} alt="" />
            <h3>Optimal Performance</h3>
            <p>Our VPS servers are optimized for speed and reliability, ensuring that your high-traffic website or resource-intensive application runs smoothly, even during peak times
            </p>
          </div>
          <div className="custom-configuration">
            <img src={custom_configuration} alt="" />
            <h3>Custom Configuration</h3>
            <p>Our VPS servers are optimized for speed and reliability,
              ensuring that your high-traffic website or resource-intensive application runs smoothly,
              even during peak times.
            </p>
          </div>
        </div>
        <div className="hs-vps-subcard-3">
          <div className="flexible-operating-systems">
            <img src={flexible_operating_systems} alt="" />
            <h3>Flexible Operating Systems</h3>
            <p>Choose from a range of operating systems (Linux, Windows) that best suit your needs.
            </p>
          </div>
          <div className="managed-unmanaged">
            <img src={managed_unmanaged} alt="" />
            <h3>Managed or Unmanaged VPS</h3>
            <p>Whether you need a fully managed solution or prefer to handle server administration yourself, we offer both managed and unmanaged VPS hosting options.
            </p>
          </div>
          <div className="support">
            <img src={support} alt="" />
            <h3>24/7 Support</h3>
            <p>Need subdomains for different areas of your business? We assist in setting up and managing subdomains to give your website structure and flexibility.
            </p>
          </div>
        </div>
        <div className="hs-vps-button-2">
          <button>CONTACT US</button>
        </div>
      </div>
      <div className='footer'>
            <div className="footer-container">
                <div className="footer-logo-section">
                    <div className="footer-logo">
                        <Link to="/" onClick={() => handleMenuItemClick("Home")}>
                            <img src={logo} alt="Logo" />
                        </Link>
                        <p>IT Solution</p>
                    </div>
                    <p>INFOTECH PRIVATE LIMITED</p>
                    <p></p>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/people/PCL-Infotech-Pvt-Ltd/61565409011377/">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/pclinfotech/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://x.com/i/flow/login?redirect_after_login=%2Fpcl_infotech">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>About Us</h4>
                        <ul>
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/contact-info">Contact Us</Link></li>
                            <li><Link to="/job-portal">Careers</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Our Services</h4>
                        <ul>
                            <li><Link to="/web-development">Web Development</Link></li>
                            <li><Link to="/web-design">Web Design</Link></li>
                            <li><Link to="/search-engine-optimization-seo">Marketing</Link></li>
                            <li><Link to="/software-products">Software Products</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Other Services</h4>
                        <ul>
                            <li><Link to="/domain-registration">Domain Registration</Link></li>
                            <li><Link to="/vps-hosting">VPS hosting</Link></li>
                            <li><Link to="/data-analytics">Management Consultant</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><i className="fas fa-envelope"></i> info@pclinfotech.com</li>
                            <li><i className="fas fa-phone"></i> +91 72000 - 74253</li>
                            <li><i className="fas fa-map-marker-alt"></i> No.2/ 156, 1st Floor, Poonamalle-Avadi Road,<br />
                            Senneerkuppam, Chennai-56</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 PCL Infotech. All rights reserved. <Link to="/terms-and-conditions">Terms & Conditions</Link> · <Link to="/privacy-policy">Privacy Policy</Link></p>
            </div>
        </div>
    </div>
  )
}

export default VPSHosting
