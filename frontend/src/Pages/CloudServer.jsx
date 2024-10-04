import React from 'react'
import './CSS/CloudServer.css'
import hs_cld_img_2 from './Assets/hs_cld_img_2.png'
import scalability_1 from './Assets/scalability_1.png'
import reliability from './Assets/reliability.png'
import security from './Assets/security.png'
import cost_efficiency from './Assets/cost_efficiency.png'
import global_reach from './Assets/global_reach.png'
import easy_management from './Assets/easy_management.png'
import seamless_integration_2 from './Assets/seamless_integration_2.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const CloudServer = () => {


  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
};


  return (
    <div className='hs-cld'>
      <div className="hs-cld-header">
        <div className="hs-cld-title-1">
          <h2>Cloud Server Hosting</h2>
          <p>In today’s digital era, flexibility and scalability are key to running a successful business. At PCL Infotech, we offer cutting-edge cloud server solutions that allow you to host and manage your applications, websites, and data with ease. Our cloud servers are designed to scale with your business needs, providing a secure, reliable, and high-performance environment that adapts to changing demands.</p>
          <button>View Pricing</button>
        </div>
        <div className="hs-cld-img-1">
          <img src={hs_cld_img_2} alt="" />
        </div>
      </div>
      <div className="hs-cld-card">
        <div className="hs-cld-subcard">
          <h2>Our Cloud Server Hosting Services Include</h2>
        </div>
        <div className="hs-cld-subcard-1">
          <div className="scalability-1">
            <img src={scalability_1} alt="" />
            <h3>Scalability</h3>
            <p>Easily scale your server resources up or down based on your traffic and performance needs, ensuring optimal performance during peak times without overpaying for unused capacity.
            </p>
          </div>
          <div className="reliability">
            <img src={reliability} alt="" />
            <h3>Reliability</h3>
            <p> Our cloud servers are hosted in world-class data centers, ensuring maximum uptime and redundancy so your website or application is always available.
            </p>
          </div>
          <div className="security">
            <img src={security} alt="" />
            <h3>Security</h3>
            <p>We implement advanced security measures, including data encryption, firewalls, and regular backups, to protect your sensitive information and keep your business safe from cyber threats.
            </p>
          </div>
        </div>
        <div className="hs-cld-subcard-2">
          <div className="cost-efficiency">
            <img src={cost_efficiency} alt="" />
            <h3>Cost Efficiency</h3>
            <p>With flexible pricing models, you only pay for the resources you use, making cloud hosting a cost-effective solution compared to traditional on premise servers.
            </p>
          </div>
          <div className="global-reach">
            <img src={global_reach} alt="" />
            <h3>Global Reach</h3>
            <p>Our cloud servers can be deployed across multiple regions, giving your users fast access to your services from anywhere in the world, reducing latency and improving user experience.
            </p>
          </div>
          <div className="easy-management">
            <img src={easy_management} alt="" />
            <h3>Easy Management</h3>
            <p>Our intuitive control panels make it easy for you to manage your cloud server, configure settings, monitor performance, and scale resources—all with a few clicks.
            </p>
          </div>
        </div>
        <div className="hs-cld-subcard-3">
          <div className="seamless-integration-2">
            <img src={seamless_integration_2} alt="" />
            <h3>Seamless Integration</h3>
            <p>Whether you’re hosting a website, running an e-commerce platform, or deploying enterprise applications, our cloud servers integrate seamlessly with your existing infrastructure and tools.
            </p>
          </div>
        </div>
        <div className="hs-cld-button-2">
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
                <p>© 2024 PCL Infotech. All rights reserved. <Link to="/terms">Terms & Conditions</Link> · <Link to="/privacy">Privacy Policy</Link></p>
            </div>
        </div>
    </div>
  )
}

export default CloudServer
