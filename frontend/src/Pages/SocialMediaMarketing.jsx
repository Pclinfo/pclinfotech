import React, { useState } from 'react'
import './CSS/SocialMediaMarketing.css'
import dtg_smm_img_2 from './Assets/dtg_smm_img_2.png'
import dtg_smm_img_3 from './Assets/dtg_smm_img_3.png'
import dtg_sem_img_4 from './Assets/dtg_sem_img_4.png'
import strategic_content_creation from './Assets/strategic_content_creation.png'
import targeted_advertising from './Assets/targeted_advertising.png'
import comprehensive_platform_management from './Assets/comprehensive_platform_management.png'
import audience_engagement from './Assets/audience_engagement.png'
import analytics_and_reporting from './Assets/analytics_and_reporting.png'
import crisis_management from './Assets/crisis_management.png'
import influencer_collaboration from './Assets/influencer_collaboration.png'
import dtg_smm_img_5 from './Assets/dtg_smm_img_5.png'
import dtg_smm_img_6 from './Assets/dtg_smm_img_6.png'
import concept_development from './Assets/concept_development.png'
import scriptwriting_storyboarding from './Assets/scriptwriting_storyboarding.png'
import professional_filming from './Assets/professional_filming.png'
import creative_editing from './Assets/creative_editing.png'
import music_sound_design from './Assets/music_sound_design.png'
import branding_actions from './Assets/branding_actions.png'
import platform_optimization from './Assets/platform_optimization.png'
import eye_catching_graphics from './Assets/eye_catching_graphics.png'
import message_clarity from './Assets/message_clarity.png'
import brand_integration from './Assets/brand_integration.png'
import print_and_digital_formats from './Assets/print_and_digital_formats.png'
import professional_quality from './Assets/professional_quality.png'
import whatapp_logo from './Assets/whatapp_logo.png'
import instagram_logo from './Assets/instagram_logo.png'
import x_logo from './Assets/x_logo.png'
import linkedIn_logo from './Assets/linkedIn_logo.png'
import canva_logo from './Assets/canva_logo.png'
import facebook_logo from './Assets/facebook_logo.png'
import picarts_logo from './Assets/picarts_logo.png'
import pinterest_logo from './Assets/pinterest_logo.png'
import ds_logo from './Assets/ds_logo.png'
import capcut_logo from './Assets/capcut_logo.png'
import filmora_logo from './Assets/filmora_logo.png'
import photoshop_logo from './Assets/photoshop_logo.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'



const SocialMediaMarketing = () => {


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
    <div className='dtg-smm-1'>
      <div className="dtg-smm-title-1">
        <h2>Social Media Marketing (SMM)
        </h2>
      </div>
      <div className="dtg-smm-img-1">
        <img src={dtg_smm_img_2} alt="" />
        <p>In today’s digital landscape, social media is where your customers are—and where your brand needs to be. At PCL Infotech, our Social Media Marketing  services are designed to help you engage your audience, build a strong brand presence, and drive targeted traffic to your website.</p>
        <img src={dtg_smm_img_3} alt="" />
      </div>
      <div className="dtg-smm-title-2">
        <button onClick={openModal}>Build my  Social Media Marketing (SMM)
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
      <div className="dtg-smm-title-3">
        <p> We manage every aspect of your social media strategy, from content creation and targeted advertising to community management, ensuring that your brand shines across platforms like Facebook, Instagram, Twitter, LinkedIn, and more
        </p>
      </div>
      <div className="dtg-smm-sub-title-1">
        <h2>Transform Your Online Business with PCL Infotech’ s  Social Media Marketing (SMM)
        </h2>
        <p>At PCL Infotech, we’re committed to helping you build an e-commerce platform that not only meets your current needs but also supports your future growth. Let us be your partner in creating a powerful, user-friendly online store that converts visitors into loyal customers and drives sustained business success.</p>
      </div>
      <div className="dtg-smm-img-4">
        <img src={dtg_sem_img_4} alt="" />
        <h2>Why Choose PCL Infotech for Your Social Media Marketing (SMM) Services Needs</h2>
      </div>
      <div className="dtg-smm-2">
        <div className="dtg-smm-card-1">
          <div className="strategic-content-creation">
            <img src={strategic_content_creation} alt="" />
            <h3>Strategic Content Creation</h3>
            <p>We craft engaging, relevant, and visually appealing content that resonates with your audience. By aligning content with your brand’s voice and values, we create posts that not only capture attention but also encourage interaction and shareability.
            </p>
          </div>
          <div className="targeted-advertising">
            <img src={targeted_advertising} alt="" />
            <h3>Targeted Advertising</h3>
            <p>Our SMM experts develop targeted ad campaigns that reach the right audience at the right time. Whether you’re aiming to increase brand awareness, drive website traffic, or generate leads, we create ads that deliver measurable results and a strong return on investment.</p>
          </div>
          <div className="comprehensive-platform-management">
            <img src={comprehensive_platform_management} alt="" />
            <h3>Comprehensive Platform Management</h3>
            <p>We manage your social media presence across all major platforms, ensuring consistent and cohesive branding. From daily posting to responding to comments and messages, we handle the details so you can focus on running your business.
            </p>
          </div>
        </div>
        <div className="dtg-smm-card-2">
          <div className="audience-engagement">
            <img src={audience_engagement} alt="" />
            <h3>Audience Engagement</h3>
            <p>Building a loyal following requires more than just posting content. We actively engage with your audience, responding to comments, answering questions, and fostering a community around your brand. This personalized approach helps build trust and long-term customer loyalty.</p>
          </div>
          <div className="analytics-and-reporting">
            <img src={analytics_and_reporting} alt="" />
            <h3>Analytics and Reporting</h3>
            <p>We provide in-depth analytics and regular reports to keep you informed about the performance of your social media campaigns. By tracking key metrics like engagement rates, follower growth, and conversion rates, we continuously optimize your strategy to achieve better results.</p>
          </div>
          <div className="crisis-management">
            <img src={crisis_management} alt="" />
            <h3>Crisis Management and Reputation Monitoring</h3>
            <p>In the fast-paced world of social media, reputational risks can arise quickly. Our team monitors your social media channels to address potential issues before they escalate, protecting your brand’s image and maintaining positive public perception.
            </p>
          </div>
        </div>
        <div className="dtg-smm-card-3">
          <div className="influencer-collaboration">
            <img src={influencer_collaboration} alt="" />
            <h3>Influencer Collaboration</h3>
            <p>Leverage the power of influencer marketing to expand your reach. We identify and collaborate with influencers who align with your brand, helping you tap into new audiences and gain credibility through trusted voices.
            </p>
          </div>
        </div>
        <div className="dtg-smm-button-1">
          <button>CONTACT US</button>
        </div>
      </div>
      <div className="dtg-smm-title-6">
        <h2>Elevate Your Brand with PCL Infotech’s Social Media Marketing (SMM)
          Services
        </h2>
        <p>Social media is more than just a platform for communication it’s a powerful tool for growth. At PCL Infotech, we help you harness the full potential of social media to build a strong, engaged community around your brand. Let us help you turn followers into loyal customers and transform your social media presence into a key driver of your business success.
        </p>
      </div>
      <div className="dtg-smm-main-title-6">
        <h2>Reel Creation Services for Social Media Marketing</h2>
      </div>
      <div className="dtg-smm-img-5">
        <img src={dtg_smm_img_5} alt="" />
        <p>At PCL Infotech, we don’t just create reels; we craft compelling visual stories that captivate your audience and boost your brand’s presence. Our expertly designed reels are tailored to your unique style, ensuring they stand out in the crowded social media landscape.</p>
        <img src={dtg_smm_img_6} alt="" />
      </div>
      <div className="dtg-smm-main-title-7">
        <button>Build my Reels creation
        </button>
        <p> We manage every aspect of your social media strategy, from content creation and targeted advertising to community management, ensuring that your brand shines across platforms like Facebook, Instagram, Twitter, LinkedIn, and more
        </p>
      </div>
      <div className="dtg-smm-3">
        <div className="dtg-smm-subcard">
          <h2>Why Choose PCL Infotech for YourReel Creation Services for Social Media Marketing
            Needs </h2>
        </div>
        <div className="dtg-smm-subcard-1">
          <div className="concept-development">
            <img src={concept_development} alt="" />
            <h3>Concept Development</h3>
            <p>We start by understanding your brand's voice and objectives to craft a reel concept that aligns with your goals and resonates with your target audience
            </p>
          </div>
          <div className="scriptwriting-storyboarding">
            <img src={scriptwriting_storyboarding} alt="" />
            <h3>Scriptwriting & Storyboarding </h3>
            <p>Our team writes compelling scripts and creates detailed storyboards to ensure that your message is clear, engaging, and visually appealing.
            </p>
          </div>
          <div className="professional-filming">
            <img src={professional_filming} alt="" />
            <h3>Professional Filming</h3>
            <p>We use high-quality equipment and techniques to capture your content, ensuring that every shot is crisp and professional.
            </p>
          </div>
        </div>
        <div className="dtg-smm-subcard-2">
          <div className="creative-editing">
            <img src={creative_editing} alt="" />
            <h3>Creative Editing</h3>
            <p>Our skilled editors bring your reel to life with dynamic cuts, effects, and transitions, making sure your reel is not only engaging but also optimized for social media algorithms.
            </p>
          </div>
          <div className="music-sound-design">
            <img src={music_sound_design} alt="" />
            <h3>Music & Sound Design</h3>
            <p>We select the perfect soundtrack and sound effects to enhance your reel's impact and keep viewers hooked.
            </p>
          </div>
          <div className="branding-actions">
            <img src={branding_actions} alt="" />
            <h3>Branding & Call-to-Actions</h3>
            <p>We integrate your brand’s elements and include effective calls-to-action to drive viewer interaction and conversions.
            </p>
          </div>
        </div>
        <div className="dtg-smm-subcard-3">
          <div className="platform-optimization">
            <img src={platform_optimization} alt="" />
            <h3>Platform Optimization</h3>
            <p>Each reel is tailored to meet the specific requirements and best practices of the platform it's intended for, ensuring maximum visibility and engagement
            </p>
          </div>
        </div>
        <div className="dtg-smm-button-2">
          <button onClick={openModal}>CONTACT US</button>
        </div>
      </div>
      <div className="dtg-smm-main-title-8">
        <h2>Poster design </h2>
        <p>Posters are a powerful tool for promotions, events, and branding. Our custom poster designs are eye-catching, engaging, and tailored to your specific needs. Whether you’re promoting an event, launching a new product, or simply looking to make a statement, we create poster designs that grab attention and convey your message effectively.
        </p>
      </div>
      <div className="dtg-smm-main-title-9">
        <button>Build my Poster Design
        </button>
      </div>
      <div className="dtg-smm-ctn-title">
        <h2>Why Choose PCL Infotech for YourReel Creation Services for Social Media Marketing
          Needs </h2>
      </div>
      <div className="dtg-smm-4">
        <div className="dtg-smm-sub-card">
          <h2>Why Choose PCL Infotech for Poster Design Needs </h2>
        </div>
        <div className="dtg-smm-sub-card-1">
          <div className="eye-catching-graphics">
            <img src={eye_catching_graphics} alt="" />
            <h3>Eye-Catching Graphics</h3>
            <p>Our designs are crafted to be visually striking and engaging, utilizing bold graphics and creative layouts to capture attention. As expert poster makers, we ensure that your visual assets stand out.
            </p>
          </div>
          <div className="message-clarity">
            <img src={message_clarity} alt="" />
            <h3>Message Clarity </h3>
            <p>We ensure that your advertisement poster design communicates effectively, with a focus on clear, compelling copy and strategic placement of information.
            </p>
          </div>
          <div className="brand-integration">
            <img src={brand_integration} alt="" />
            <h3>Brand Integration</h3>
            <p> We incorporate your brand’s visual identity into the poster creation, ensuring consistency with your overall branding and messaging.
            </p>
          </div>
        </div>
        <div className="dtg-smm-sub-card-2">
          <div className="print-and-digital-formats">
            <img src={print_and_digital_formats} alt="" />
            <h3>Print and Digital Formats</h3>
            <p>We provide poster designs in various formats and sizes suitable for both print and digital distribution, ensuring flexibility in how you use them.
            </p>
          </div>
          <div className="professional-quality">
            <img src={professional_quality} alt="" />
            <h3>Professional Quality</h3>
            <p>Our poster creation services are designed to be high-quality and impactful, making sure they stand out in both physical and digital spaces. From vibrant event announcements to professional product promotions, our poster makers craft designs to achieve your objectives and leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
      <div className="dtg-smm-3">
        <div className="dtg-smm-title-7">
          <h2>Elevate Your Brand with PCL Infotech’s Reel Creation Services for Social Media Marketing</h2>
          <p>Social media is more than just a platform for communication it’s a powerful tool for growth. At PCL Infotech, we help you harness the full potential of social media to build a strong, engaged community around your brand. Let us help you turn followers into loyal customers and transform your social media presence into a key driver of your business success.
          </p>
          <div className="dtg-smm-4">
            <div className="dtg-smm-logo-container-1">
              <img src={whatapp_logo} alt="" />
              <img src={instagram_logo} alt="" />
              <img src={x_logo} alt="" />
              <img src={linkedIn_logo} alt="" />
            </div>
            <div className="dtg-smm-logo-container-2">
              <img src={canva_logo} alt="" />
              <img src={facebook_logo} alt="" />
              <img src={picarts_logo} alt="" />
              <img src={pinterest_logo} alt="" />
            </div>
            <div className="dtg-smm-logo-container-3">
              <img src={ds_logo} alt="" />
              <img src={capcut_logo} alt="" />
              <img src={filmora_logo} alt="" />
              <img src={photoshop_logo} alt="" />
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

export default SocialMediaMarketing
