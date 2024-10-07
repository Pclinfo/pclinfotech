import React, { useState } from 'react'
import './CSS/Internship.css'
import tp_insp_img_1 from './Assets/tp_insp_img_1.png'
import tp_insp_img_2 from './Assets/tp_insp_img_2.png'
import stack_develop from './Assets/stack_develop.png'
import ui_ux_desinger_1 from './Assets/ui_ux_desinger_1.png'
import hr_intership from './Assets/hr_intership.png'
import data from './Assets/data.png'
import digital_market from './Assets/digital_market.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'




const Internship = () => {



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
    <div className='tp-insp'>
      <div className="tp-insp-img-1">
        <img src={tp_insp_img_1} alt="" />
      </div>
      <div className="tp-insp-ctn-title-1">
        <h2>Internships</h2>
      </div>
      <div className="tp-insp-ctn-1">
        <div className="tp-insp-img-2">
          <img src={tp_insp_img_2} alt="" />
        </div>
        <div className="tp-insp-title-1">
          <h4>Kick-start your career with our comprehensive internship programs. At PCL Infotech, we offer real-world experience and valuable learning opportunities in a supportive and innovative environment. opportunity that allows students or recent graduates to gain practical experience and exposure in their chosen field or industry. Internships typically last from a few weeks to several months and can be part-time or full-time, depending on the organization and the intern’s availability. They provide hands-on learning opportunities, enabling individuals to apply theoretical knowledge in a real-world work environment.</h4>
          <h3>Hands-On Learning </h3>
          <p>Gain practical experience by working on live projects that challenge and develop your skills </p>
          <h3>Mentorship</h3>
          <p>Receive guidance and feedback from experienced professionals who are dedicated to your growth</p>
          <h3>Skill Development</h3>
          <p>Build a strong foundation in your field with exposure to the latest technologies and industry practices</p>
          <h3>Career Preparation</h3>
          <p>Build a strong foundation in your field with exposure to the latest technologies and industry practices</p>
        </div>
      </div>
      <div className="tp-insp-ctn-title-2">
        <h2>Our Offerings</h2>
        <p>One of the industry's leading Project Based Career Programs offered by PCL INFOTECH that promises Placement Guidance on completing the course.</p>
      </div>
      <div className="tp-insp-card">
        <div className="tp-insp-subcard-1">
          <div className="stack-develop">
            <img src={stack_develop} alt="" />
            <button onClick={openModal}>View Course  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            </button>
            <h3>FULL STACK DEVELOPER</h3>
            <p>
            </p>
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
          <div className="ui-ux-desinger-1">
            <img src={ui_ux_desinger_1} alt="" />
            <button onClick={openModal}>View Course   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            </button>
            <h3>UI UX DESIGNER</h3>
            <p>
            </p>
          </div>
          <div className="hr-intership">
            <img src={hr_intership} alt="" />
            <button onClick={openModal}>View Course   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            </button>
            <h3>HR INTERNSHIP</h3>
            <p>
            </p>
          </div>
        </div>
        <div className="tp-insp-subcard-2">
          <div className="data">
            <img src={data} alt="" />
            <button onClick={openModal}>View Course<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            </button>
            <h3>DATA ANALYST</h3>
            <p>
            </p>
          </div>
          <div className="digital-market">
            <img src={digital_market} alt="" />
            <button onClick={openModal}>View Course<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            </button>
            <h3>DIGITAL MARKETTING</h3>
            <p>
            </p>
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

export default Internship
