import React, { useState } from 'react'
import './CSS/ProductsDesign.css'
import dtg_pd_img_2 from './Assets/dtg_pd_img_2.png'
import dtg_pd_img_3 from './Assets/dtg_pd_img_3.png'
import dtg_sem_img_4 from './Assets/dtg_sem_img_4.png'
import concept from './Assets/concept.png'
import user_centered_design from './Assets/user_centered_design.png'
import high_engagement from './Assets/high_engagement.png'
import wireframing_prototyping from './Assets/wireframing_prototyping.png'
import iterative_design_testing from './Assets/iterative_design_testing.png'
import tailored_solutions from './Assets/tailored_solutions.png'
import focus_on_usability from './Assets/focus_on_usability.png'
import collaborative_process from './Assets/collaborative_process.png'
import expert_team from './Assets/expert_team.png'
import figma_logo from './Assets/figma_logo.png'
import canva_logo from './Assets/canva_logo.png'
import balsamiq_logo from './Assets/balsamiq_logo.png'
import xd_logo from './Assets/xd_logo.png'
import ai_logo from './Assets/ai_logo.png'
import photoshop_logo from './Assets/photoshop_logo.png'
import sketch_logo from './Assets/sketch_logo.png'
import zeplin_logo from './Assets/zeplin_logo.png'
import fusion_logo from './Assets/fusion_logo.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'




const ProductsDesign = () => {




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
    <div className='dtg-pd-1'>
      <div className="dtg-pd-title-1">
        <h2>Product Design Services – Transforming Ideas into Functional IT Solutions        </h2>
      </div>
      <div className="dtg-pd-img-1">
        <img src={dtg_pd_img_2} alt="" />
        <p>At PCL Infotech, we offer comprehensive product design services that turn your ideas into fully functional, user-centered digital products. From concept to completion, we work closely with you to design IT solutions that not only meet your business objectives but also deliver an exceptional user experience.</p>
        <img src={dtg_pd_img_3} alt="" />
      </div>
      <div className="dtg-pd-title-2">
        <button onClick={openModal}>Build my Product design services
        </button>
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
      <div className="dtg-pd-sub-title-1">
        <h2>Transform Your Online Business with PCL Infotech’ sProduct Design Services – Transforming Ideas into Functional IT Solutions</h2>
        <p>At PCL Infotech, we’re committed to helping you build an e-commerce platform that not only meets your current needs but also supports your future growth. Let us be your partner in creating a powerful, user-friendly online store that converts visitors into loyal customers and drives sustained business success.</p>
      </div>
      <div className="dtg-pd-img-4">
        <img src={dtg_sem_img_4} alt="" />
        <h2>Our Product Design Services Include</h2>
      </div>
      <div className="dtg-pd-2">
        <div className="dtg-pd-card-1">
          <div className="concept">
            <img src={concept} alt="" />
            <h3>Concept Development</h3>
            <p>We collaborate with you to transform your vision into a well-defined concept. Through research, brainstorming, and strategic planning, we create a blueprint that aligns with your business goals and market needs.</p>
          </div>
          <div className="user-centered-design">
            <img src={user_centered_design} alt="" />
            <h3>User-Centered Design</h3>
            <p>Our design process prioritizes user experience. We conduct in-depth user research to understand your audience and create intuitive, easy-to-use products that enhance engagement and satisfaction.</p>
          </div>
          <div className="wireframing-prototyping">
            <img src={wireframing_prototyping} alt="" />
            <h3>Wireframing & Prototyping</h3>
            <p>We develop wireframes and interactive prototypes that provide a clear visual representation of the product layout, features, and functionality. This allows for early-stage feedback and ensures the design is refined before development begins</p>
          </div>
        </div>
        <div className="dtg-pd-card-2">
          <div className="ui-design">
            <img src={high_engagement} alt="" />
            <h3>UI/UX Design</h3>
            <p>Our team of designers specializes in creating visually stunning and highly functional user interfaces. We focus on delivering seamless user experiences that improve usability, accessibility, and overall product appeal</p>
          </div>
          <div className="iterative-design-testing">
            <img src={iterative_design_testing} alt="" />
            <h3>Iterative Design & Testing</h3>
            <p>We believe in continuous improvement. Through iterative design, we test and refine the product at every stage, ensuring it meets the highest standards of quality and user satisfaction</p>
          </div>
        </div>
        <div className="dtg-pd-button-1">
          <button onClick={openModal}>CONTACT US</button>
        </div>
      </div>
      <div className="dtg-pd-3">
        <div className="dtg-pd-subcard">
          <h2>Why Choose Our Product Design Services?</h2>
        </div>
        <div className="dtg-pd-subcard-1">
          <div className="tailored-solutions">
            <img src={tailored_solutions} alt="" />
            <h3>Tailored Solutions</h3>
            <p>We create bespoke designs that are unique to your business needs and align with your brand identity.
            </p>
          </div>
          <div className="focus-on-usability">
            <img src={focus_on_usability} alt="" />
            <h3>Focus on Usability</h3>
            <p>We prioritize user experience to ensure your product is intuitive, easy to navigate, and delivers maximum value.
            </p>
          </div>
          <div className="collaborative-process">
            <img src={collaborative_process} alt="" />
            <h3>Collaborative Process</h3>
            <p>We work closely with you throughout the design process, ensuring your feedback is integrated at every stage.
            </p>
          </div>
        </div>
        <div className="dtg-pd-subcard-2">
          <div className="expert-team">
            <img src={expert_team} alt="" />
            <h3>Platform Expertise</h3>
            <p>We understand the nuances of each platform and tailor strategies that align with best practices for Facebook, Instagram, Twitter, and LinkedIn.
            </p>
          </div>
        </div>
        <div className="dtg-pd-button-2">
          <button onClick={openModal}>CONTACT US</button>
        </div>
      </div>
      <div className="dtg-pd-3">
        <div className="dtg-brd-title-7">
          <h2>Elevate Your Brand with PCL Infotech’s Product Design Services – Transforming Ideas into Functional IT Solutions   Services          </h2>
          <p>At PCL Infotech, we believe that great design is about more than just looks—it’s about creating a meaningful connection with your audience. Let us help you build a website that not only stands out from the competition but also drives engagement and growth. Partner with us to transform your digital presence and leave a lasting impression on every visitor.
          </p>
          <div className="dtg-pd-4">
            <div className="dtg-pd-logo-container-1">
              <img src={figma_logo} alt="" />
              <img src={canva_logo} alt="" />
              <img src={balsamiq_logo} alt="" />
            </div>
            <div className="dtg-pd-logo-container-2">
              <img src={xd_logo} alt="" />
              <img src={ai_logo} alt="" />
              <img src={photoshop_logo} alt="" />
            </div>
            <div className="dtg-pd-logo-container-3">
              <img src={sketch_logo} alt="" />
              <img src={zeplin_logo} alt="" />
              <img src={fusion_logo} alt="" />
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

export default ProductsDesign
