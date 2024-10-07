import React, { useState } from 'react'
import './CSS/CMSWebsiteDevelopment.css'
import web_dev_img_1 from './Assets/web_dev_img_1.png'
import web_cms_img_2 from './Assets/web_cms_img_2.png'
import web_cms_img_3 from './Assets/web_cms_img_3.png'
import web_cms_img_4 from './Assets/web_cms_img_4.png'
import user_friendly_management from './Assets/user_friendly_management.png'
import custom_tailored_solutions from './Assets/custom_tailored_solutions.png'
import scalable_and_flexible from './Assets/scalable_and_flexible.png'
import robust_security_feature from './Assets/robust_security_feature.png'
import integration from './Assets/integration.png'
import ongoing_support_and_training from './Assets/ongoing_support_and_training.png'
import canva_logo from './Assets/canva_logo.png'
import hubspot_logo from './Assets/hubspot_logo.png'
import wix_logo from './Assets/wix_logo.png'
import shopify_logo from './Assets/shopify_logo.png'
import wordpress_logo from './Assets/wordpress_logo.png'
import webflow_logo from './Assets/webflow_logo.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'




const CMSWebsiteDevelopment = () => {



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
    <div className='web-cms'>
      <div className="web-cms-1">
        <div className="web-cms-left">
          <h2>CMS Website Development</h2>
          <p>Managing and updating your website shouldn’t be a hassle. At PCL Infotech, we specialize in CMS (Content Management System) website development, crafting sites that are not only powerful but also incredibly easy to manage.</p>
          <button onClick={openModal}>Build my CMS website </button>
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
        <div className="web-cms-right">
          <img src={web_dev_img_1} alt="" />
          <img src={web_cms_img_2} alt="" />
        </div>
      </div>
      <div className="web-cms-2">
        <div className="web-cms-2-left">
          <img src={web_cms_img_3} alt="" />
          <p>Whether you’re looking to build a simple blog, a corporate website, or a complex content platform, our CMS solutions are designed to be flexible, scalable, and tailored precisely to your business needs</p>
        </div>
        <div className="web-cms-2-right">
          <img src={web_cms_img_4} alt="" />
        </div>
      </div>
      <div className="web-cms-3">
        <div className="web-cms-title-1">
          <h2>Transform Your Online Business with PCL Infotech’ s CMS website Development </h2>
          <p>At PCL Infotech, we’re committed to helping you build an e-commerce platform that not only meets your current needs but also supports your future growth. Let us be your partner in creating a powerful, user-friendly online store that converts visitors into loyal customers and drives sustained business success.</p>
          <h2>Why Choose PCL Infotech for Your CMS website development Needs</h2>
        </div>
        <div className="web-cms-card-1">
          <div className="user-friendly-management">
            <img src={user_friendly_management} alt="" />
            <h3>User-Friendly Management</h3>
            <p>Our CMS websites empower you to take control of your content without needing
              extensive technical knowledge. Easily update text, images, and multimedia, and manage
              your site’s structure with an intuitive interface that simplifies content management.</p>
          </div>
          <div className="custom-tailored-solutions">
            <img src={custom_tailored_solutions} alt="" />
            <h3>Custom-Tailored Solutions</h3>
            <p>We don’t believe in one-size-fits-all. Our CMS solutions are customized to meet
              your specific requirements, whether you need a blog, a corporate site, or a large-scale
              content platform. We also offer WordPress development to ensure your site is perfectly
              aligned with your goals and workflows.</p>
          </div>
          <div className="scalable-and-flexible">
            <img src={scalable_and_flexible} alt="" />
            <h3>Scalable and Flexible Platforms</h3>
            <p>As your business grows, so should your website. Our CMS solutions are built with
              scalability in mind, allowing you to add new features, pages, and functionalities as your
              needs evolve without starting from scratch.</p>
          </div>
        </div>
        <div className="web-cms-card-2">
          <div className="robust-security-feature">
            <img src={robust_security_feature} alt="" />
            <h3>Robust Security Features</h3>
            <p>Security is a top priority in all our CMS projects. We
              implement strong security measures, including regular updates, secure logins, and
              backup solutions, to protect your website and its content from threats.</p>
          </div>
          <div className="integration">
            <img src={integration} alt="" />
            <h3>Integration with Third-Party Tools</h3>
            <p>Enhance your website’s functionality by
              integrating it with third-party tools and services, such as CRM systems, marketing
              automation platforms, and social media channels. Our CMS solutions are designed to
              work seamlessly with the tools you already use.</p>
          </div>
          <div className="ongoing-support-and-training">
            <img src={ongoing_support_and_training} alt="" />
            <h3>Consistent Branding</h3>
            <p>Your website is a key component of your brand’s online
              presence. We ensure consistency in branding across all pages, creating a cohesive and
              professional image that strengthens your brand’s identity.</p>
          </div>
        </div>
        <div className="web-cms-button">
          <button onClick={openModal}>CONTACT US</button>
        </div>
      </div>
      <div className="web-cms-4">
        <div className="web-cms-title-2">
          <h2>Technology Stack We Consider for Outsourcing Web Design </h2>
          <p>Our team of certified web developers is competent to work on different technologies and platforms that leverage our clients with the flexibility to opt from choices and get consultation accordingly.</p>
          <div className="web-cms-5">
            <div className="web-cms-logo-container-1">
              <img src={canva_logo} alt="" />
              <img src={hubspot_logo} alt="" />
              <img src={wix_logo} alt="" />
            </div>
            <div className="web-cms-logo-container-2">
              <img src={shopify_logo} alt="" />
              <img src={wordpress_logo} alt="" />
              <img src={webflow_logo} alt="" />
            </div>
          </div>
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

export default CMSWebsiteDevelopment