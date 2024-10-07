import React, { useState } from 'react'
import './CSS/WordpressHosting.css'
import hs_wp_img_2 from './Assets/hs_wp_img_2.png'
import optimized_speed from './Assets/optimized_speed.png'
import top_tier_security from './Assets/top_tier_security.png'
import reliable_uptime from './Assets/reliable_uptime.png'
import automatic_backups_updates from './Assets/automatic_backups_updates.png'
import seamless_scalability from './Assets/seamless_scalability.png'
import wordPress_installation from './Assets/wordPress_installation.png'
import custom_wordPress_solutions from './Assets/custom_wordPress_solutions.png'
import developer_friendly_tools from './Assets/developer_friendly_tools.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const WordpressHosting = () => {




  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
      setIsSubmitted(true);
      closeModal();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
  };



  return (
    <div className='hs-wph'>
      <div className="hs-wph-header">
        <div className="hs-wph-title-1">
          <h2>WordPress Hosting Hosting</h2>
          <p>WordPress powers over 40% of the web, and having a reliable hosting solution tailored to its unique demands is essential for optimal performance. At PCL Infotech, we specialize in WordPress hosting that ensures your website is fast, secure, and always online.          </p>
          <button onClick={openModal}>View Pricing</button>
        </div>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal-content">
          <div className="web-contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <label>Phone Number</label>
                <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Write your message.." value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit">Send Message</button>
              {isSubmitted && <p>Thank you! Your form has been submitted.</p>}
            </form>
          </div>
        </Modal>
        <div className="hs-wph-img-1">
          <img src={hs_wp_img_2} alt="" />
        </div>
      </div>
      <div className="hs-wph-card">
        <div className="hs-wph-subcard">
          <h2>Our Wordpress Hosting Services Include</h2>
        </div>
        <div className="hs-wph-subcard-1">
          <div className="optimized-speed">
            <img src={optimized_speed} alt="" />
            <h3>Optimized for Speed</h3>
            <p>Our WordPress hosting is specifically designed to deliver fast load times, ensuring a seamless user experience and reducing bounce rates. We use advanced caching, SSD storage, and content delivery networks (CDNs) to keep your site lightning fast.
            </p>
          </div>
          <div className="top-tier-security">
            <img src={top_tier_security} alt="" />
            <h3>Top-Tier Security</h3>
            <p>WordPress is a popular target for hackers, but our hosting services include built-in security features such as firewalls, malware scanning, regular updates, and SSL integration to protect your site from threats.
            </p>
          </div>
          <div className="reliable-uptime">
            <img src={reliable_uptime} alt="" />
            <h3>Reliable Uptime</h3>
            <p>Downtime can damage your reputation and hurt your SEO rankings. We ensure maximum uptime through robust infrastructure, monitoring, and support.
            </p>
          </div>
        </div>
        <div className="hs-wph-subcard-2">
          <div className="automatic-backups-updates">
            <img src={automatic_backups_updates} alt="" />
            <h3>Automatic Backups and Updates</h3>
            <p>Never worry about losing your data. We provide regular backups and automatic WordPress updates to keep your site secure and up-to-date with the latest features and improvements.
            </p>
          </div>
          <div className="seamless-scalability">
            <img src={seamless_scalability} alt="" />
            <h3>Seamless Scalability</h3>
            <p>Whether you're starting with a small blog or running a large e-commerce platform, our WordPress hosting is built to scale with your traffic and content growth.
            </p>
          </div>
          <div className="wordPress-installation">
            <img src={wordPress_installation} alt="" />
            <h3>One-Click WordPress Installation</h3>
            <p>Get your WordPress site up and running quickly with our simple, one-click installation
            </p>
          </div>
        </div>
        <div className="hs-wph-subcard-3">
          <div className="custom-wordPress-solutions">
            <img src={custom_wordPress_solutions} alt="" />
            <h3>Custom WordPress Solutions</h3>
            <p>From e-commerce sites to membership portals, we offer specialized hosting solutions tailored to your WordPress site’s specific needs.
            </p>
          </div>
          <div className="developer-friendly-tools">
            <img src={developer_friendly_tools} alt="" />
            <h3>Seamless Scalability</h3>
            <p>Whether you're starting with a small blog or running a large e-commerce platform, our WordPress hosting is built to scale with your traffic and content growth.
            </p>
          </div>
        </div>
        <div className="hs-wph-button-2">
          <button onClick={openModal}>CONTACT US</button>
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

export default WordpressHosting
