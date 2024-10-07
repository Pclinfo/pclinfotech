import React, { useState } from 'react'
import './CSS/Branding.css'
import dtg_brd_img_2 from './Assets/dtg_brd_img_2.png'
import dtg_brd_img_3 from './Assets/dtg_brd_img_3.png'
import dtg_sem_img_4 from './Assets/dtg_sem_img_4.png'
import brand_strategy_development from './Assets/brand_strategy_development.png'
import visual_identity_creation from './Assets/visual_identity_creation.png'
import brand_messaging from './Assets/brand_messaging.png'
import consistency_across_platforms from './Assets/consistency_across_platforms.png'
import brand_positioning from './Assets/brand_positioning.png'
import brand_guidelines from './Assets/brand_guidelines.png'
import dtg_brd_img_4 from './Assets/dtg_brd_img_4.png'
import dtg_brd_img_5 from './Assets/dtg_brd_img_5.png'
import custom_design_concepts from './Assets/custom_design_concepts.png'
import brand_alignment from './Assets/brand_alignment.png'
import versatility from './Assets/versatility.png'
import feedback_and_revisions from './Assets/feedback_and_revisions.png'
import high_quality_deliverables from './Assets/high_quality_deliverables.png'
import canva_logo from './Assets/canva_logo.png'
import coreldraw_logo from './Assets/coreldraw_logo.png'
import inkscape_logo from './Assets/inkscape_logo.png'
import photoshop_logo from './Assets/photoshop_logo.png'
import ai_logo from './Assets/ai_logo.png'
import adobe_express_logo from './Assets/adobe_express_logo.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'




const Branding = () => {




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
    <div className='dtg-brd-1'>
      <div className="dtg-brd-title-1">
        <h2>Branding</h2>
      </div>
      <div className="dtg-brd-img-1">
        <img src={dtg_brd_img_2} alt="" />
        <p>Your brand is more than just a logo; it’s the entire narrative and experience you offer to your audience. At PCL Infotech, we provide comprehensive branding services designed to help you create a strong, cohesive brand identity that resonates with your target market</p>
        <img src={dtg_brd_img_3} alt="" />
      </div>
      <div className="dtg-brd-title-2">
        <button onClick={openModal}>Build my branding
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
      <div className="dtg-brd-sub-title-1">
        <h2>Transform Your Online Business with PCL Infotech’ s Branding</h2>
        <p>At PCL Infotech, we’re committed to helping you build an e-commerce platform that not only meets your current needs but also supports your future growth. Let us be your partner in creating a powerful, user-friendly online store that converts visitors into loyal customers and drives sustained business success.</p>
      </div>
      <div className="dtg-brd-img-4">
        <img src={dtg_sem_img_4} alt="" />
        <h2>Why Choose PCL Infotech for YourBranding  Needs </h2>
      </div>
      <div className="dtg-brd-2">
        <div className="dtg-brd-card-1">
          <div className="brand-strategy-development">
            <img src={brand_strategy_development} alt="" />
            <h3>Brand Strategy Development</h3>
            <p>We work with you to define your brand’s mission, vision, and values, creating a strategic framework that guides all branding efforts.
            </p>
          </div>
          <div className="visual-identity-creation">
            <img src={visual_identity_creation} alt="" />
            <h3>Visual Identity Creation</h3>
            <p>From colour palettes and typography to imagery and design elements, we ensure that every visual aspect of your brand is thoughtfully designed to reflect your business’s personality.
            </p>
          </div>
          <div className="brand-messaging">
            <img src={brand_messaging} alt="" />
            <h3>Brand Messaging</h3>
            <p>We craft compelling brand messages and narratives that effectively communicate your brand’s story and value propositions to your audience.
            </p>
          </div>
        </div>
        <div className="dtg-brd-card-2">
          <div className="consistency-across-platforms">
            <img src={consistency_across_platforms} alt="" />
            <h3>Consistency Across Platforms</h3>
            <p>We ensure that your branding is consistent across all touchpoints, including your website, social media, marketing materials, and customer interactions.
            </p>
          </div>
          <div className="brand-positioning">
            <img src={brand_positioning} alt="" />
            <h3>Brand Positioning</h3>
            <p>We help you differentiate your brand from competitors by identifying your unique selling points and positioning your brand strategically in the market.</p>
          </div>
          <div className="brand-guidelines">
            <img src={brand_guidelines} alt="" />
            <h3>Brand Guidelines</h3>
            <p>We create comprehensive brand guidelines that serve as a reference for maintaining consistency in all branding and marketing efforts.
            </p>
          </div>
        </div>
        <div className="dtg-brd-button-1">
          <button onClick={openModal}>CONTACT US</button>
        </div>
      </div>
      <div className="dtg-brd-main-title-6">
        <h2>Logo Designs</h2>
      </div>
      <div className="dtg-brd-img-5">
        <img src={dtg_brd_img_4} alt="" />
        <p>Logo is the visual cornerstone of your brand identity. At PCL Infotech, our logo design services are focused on creating logos that are not only visually appealing but also deeply aligned with your brand’s essence</p>
        <img src={dtg_brd_img_5} alt="" />
      </div>
      <div className="dtg-brd-main-title-7">
        <button onClick={openModal}>Build my Logo Design
        </button>
        <p>A well-designed logo is the cornerstone of your brand’s identity. Our creative team designs logos that are unique, memorable, and aligned with your brand’s values and messaging. Whether you’re starting from scratch or looking to refresh your existing logo, we deliver designs that capture the essence of your brand and leave a lasting impression
        </p>
      </div>
      <div className="dtg-brd-3">
        <div className="dtg-brd-subcard">
          <h2>Why Choose PCL Infotech for Your Logo Designs
          </h2>
        </div>
        <div className="dtg-brd-subcard-1">
          <div className="custom-design-concepts">
            <img src={custom_design_concepts} alt="" />
            <h3>Custom Design Concepts</h3>
            <p>We develop multiple logo concepts tailored to your brand’s values and objectives, ensuring a design that truly represents your business
            </p>
          </div>
          <div className="brand-alignment">
            <img src={brand_alignment} alt="" />
            <h3>Brand Alignment</h3>
            <p>We incorporate your brand’s personality, mission, and target audience into the logo design, ensuring that it resonates with your market
            </p>
          </div>
          <div className="versatility">
            <img src={versatility} alt="" />
            <h3>Versatility</h3>
            <p>Our logos are designed to be versatile and scalable, maintaining their impact and legibility across various applications, from business cards to billboards.
            </p>
          </div>
        </div>
        <div className="dtg-brd-subcard-2">
          <div className="feedback-and-revisions">
            <img src={feedback_and_revisions} alt="" />
            <h3>Feedback and Revisions</h3>
            <p>We value your input throughout the design process, offering revisions to ensure that the final logo perfectly captures your vision.
            </p>
          </div>
          <div className="high-quality-deliverables">
            <img src={high_quality_deliverables} alt="" />
            <h3>High-Quality Deliverables</h3>
            <p>We provide high-resolution logo files in various formats suitable for both digital and print use, along with a style guide outlining logo usage guidelines.
            </p>
          </div>
        </div>
        <div className="dtg-brd-button-2">
          <button onClick={openModal}>CONTACT US</button>
        </div>
      </div>
      <div className="dtg-brd-3">
        <div className="dtg-brd-title-7">
          <h2>Elevate Your Brand with PCL Infotech’s  Logo Designs Services</h2>
          <p>At PCL Infotech, we believe that great design is about more than just looks—it’s about creating a meaningful connection with your audience. Let us help you build a website that not only stands out from the competition but also drives engagement and growth. Partner with us to transform your digital presence and leave a lasting impression on every visitor.
          </p>
          <div className="dtg-brd-4">
            <div className="dtg-brd-logo-container-1">
              <img src={canva_logo} alt="" />
              <img src={coreldraw_logo} alt="" />
              <img src={inkscape_logo} alt="" />
            </div>
            <div className="dtg-brd-logo-container-2">
              <img src={photoshop_logo} alt="" />
              <img src={ai_logo} alt="" />
              <img src={adobe_express_logo} alt="" />
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

export default Branding