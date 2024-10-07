import React, {useState} from 'react'
import './CSS/Domain.css'
import hs_domain_img_2 from './Assets/hs_domain_img_2.png'
import domain_name_consultation from './Assets/domain_name_consultation.png'
import domain_extensions from './Assets/domain_extensions.png'
import domain_transfer_services from './Assets/domain_transfer_services.png'
import domain_privacy_protection from './Assets/domain_privacy_protection.png'
import domain_renewal_management from './Assets/domain_renewal_management.png'
import subdomains_and_customization from './Assets/subdomains_and_customization.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Domain = () => {



    
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
    <div className='hs-domain'>
      <div className="hs-domain-header">
        <div className="hs-domain-title-1">
          <h2>Domain Registration</h2>
          <p>Your domain name is the first step toward establishing a strong online identity. It’s more than just your website’s address—it’s the cornerstone of your brand's online presence. At PCL Infotech, we offer comprehensive domain registration services that help you secure a domain name that reflects your brand, resonates with your target audience, and aligns with your business goals.        </p>
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
        <div className="hs-domain-img-1">
          <img src={hs_domain_img_2} alt="" />
        </div>
      </div>
      <div className="hs-domain-card">
        <div className="hs-domain-subcard">
          <h2>Why Choose PCL Infotech for YourReel Creation Services for Social Media Marketing
            Needs </h2>
        </div>
        <div className="hs-domain-subcard-1">
          <div className="domain-name-consultation">
            <img src={domain_name_consultation} alt="" />
            <h3>Domain Name Consultation</h3>
            <p>We guide you through the process of selecting the best domain name, considering
              factors like brand identity, keyword relevance, and marketability.
            </p>
          </div>
          <div className="domain-extensions">
            <img src={domain_extensions} alt="" />
            <h3>Domain Extensions</h3>
            <p>Whether you&#39;re looking for a classic “.com” or specialized options like “.tech,”
              “.shop,” or “.org,” we assist you in securing the ideal extensions to enhance your online
              visibility.
            </p>
          </div>
          <div className="domain-transfer-services">
            <img src={domain_transfer_services} alt="" />
            <h3>Domain Transfer Services</h3>
            <p>If you already own a domain and want to transfer it, we handle the entire process to
              ensure a seamless transition with no downtime.
            </p>
          </div>
        </div>
        <div className="hs-domain-subcard-2">
          <div className="domain-privacy-protection">
            <img src={domain_privacy_protection} alt="" />
            <h3>Domain Privacy Protection</h3>
            <p>Protect your personal information from being publicly accessible in domain
              registries by adding privacy protection, keeping your contact details safe from spammers
              and unwanted solicitation.
            </p>
          </div>
          <div className="domain-renewal-management">
            <img src={domain_renewal_management} alt="" />
            <h3>Domain Renewal Management</h3>
            <p>Avoid the risk of losing your domain due to expiration. We handle domain
              renewals, ensuring your online presence is never interrupted.
            </p>
          </div>
          <div className="subdomains-and-customization">
            <img src={subdomains_and_customization} alt="" />
            <h3>Branding & Call-to-Actions</h3>
            <p>Need subdomains for different areas of your business? We assist in setting up and
              managing subdomains to give your website structure and flexibility.
            </p>
          </div>
        </div>
        <div className="hs-domain-button-2">
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

export default Domain
