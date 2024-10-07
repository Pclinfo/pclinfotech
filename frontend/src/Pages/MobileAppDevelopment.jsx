import React, {useState} from 'react'
import './CSS/MobileAppDevelopment.css'
import web_dev_img_1 from './Assets/web_dev_img_1.png'
import web_app_img_2 from './Assets/web_app_img_2.png'
import web_app_img_3 from './Assets/web_app_img_3.png'
import web_app_img_4 from './Assets/web_app_img_4.png'
import custom_solutions_tailored from './Assets/custom_solutions_tailored.png'
import cross_platform_expertise from './Assets/cross_platform_expertise.png'
import user_centric_design from './Assets/user_centric_design.png'
import agile_development_process from './Assets/agile_development_process.png'
import seamless_integration from './Assets/seamless_integration.png'
import scalable_architecture from './Assets/scalable_architecture.png'
import end_to_end_development from './Assets/end_to_end_development.png'
import post_launch from './Assets/post_launch.png'
import flutter_logo from './Assets/flutter_logo.png'
import react_logo from './Assets/react_logo.png'
import android_logo from './Assets/android_logo.png'
import xcode_logo from './Assets/xcode_logo.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'



const MobileAppDevelopment = () => {




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
    <div className='web-app'>
      <div className="web-app-1">
        <div className="web-app-left">
          <h2>Mobile App Development
          </h2>
          <p>In today’s mobile-first world, having a robust and intuitive mobile app is essential for staying ahead of the competition. At PCL Infotech, we specialize in mobile app development that transforms your innovative ideas into powerful tools for engaging your audience and driving business success. </p>
          <button onClick={openModal}>Build my Mobile Development</button>
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
        <div className="web-app-right">
          <img src={web_dev_img_1} alt="" />
          <img src={web_app_img_2} alt="" />
        </div>
      </div>
      <div className="web-app-2">
        <div className="web-app-2-left">
          <img src={web_app_img_3} alt="" />
          <p>Whether you need a custom app for iOS, Android, or both, our expert development team ensures that your app is not only fully functional but also user-friendly, aesthetically pleasing, and strategically aligned with your business goals.</p>
        </div>
        <div className="web-app-2-right">
          <img src={web_app_img_4} alt="" />
        </div>
      </div>
      <div className="web-app-3">
        <div className="web-app-title-1">
          <h2>Transform Your Online Business with PCL Infotech’s Mobile App Development</h2>
          <p>At PCL Infotech, we’re committed to helping you build an e-commerce platform that not only meets your current needs but also supports your future growth. Let us be your partner in creating a powerful, user-friendly online store that converts visitors into loyal customers and drives sustained business success.</p>
          <h2>Why Choose PCL Infotech for Your E-commerce Needs</h2>
        </div>
        <div className="web-app-card-1">
          <div className="custom-solutions-tailored">
            <img src={custom_solutions_tailored} alt="" />
            <h3>Custom Solutions Tailored to Your Needs</h3>
            <p>We understand that every business is unique, which is why we offer custom app
              development solutions that cater specifically to your requirements. Whether you need a
              simple utility app or a complex enterprise solution, we build apps that are designed to
              solve your challenges and achieve your objectives.</p>
          </div>
          <div className="cross-platform-expertise">
            <img src={cross_platform_expertise} alt="" />
            <h3>Cross-Platform Expertise</h3>
            <p>Our development team excels in crafting applications for both iOS and Android
              systems. We ensure that your app delivers a consistent and seamless user experience
              across devices, maximizing your reach and impact in the market.</p>
          </div>
          <div className="user-centric-design">
            <img src={user_centric_design} alt="" />
            <h3>User-Centric Design</h3>
            <p>A great app isn’t just about functionality; it’s about the experience. We prioritize
              user-centric design, ensuring that your app is intuitive, easy to navigate, and visually
              appealing. Our design approach focuses on creating an engaging and satisfying user
              journey, encouraging users to return and interact with your app regularly.</p>
          </div>
        </div>
        <div className="web-app-card-2">
          <div className="agile-development-process">
            <img src={agile_development_process} alt="" />
            <h3>Agile Development Process</h3>
            <p>We employ an agile development methodology, allowing us to adapt to changes
              quickly and efficiently. This approach ensures that your app is developed on time, with
              regular updates and feedback loops to refine features and address any issues that arise
              during development.</p>
          </div>
          <div className="seamless-integration">
            <img src={seamless_integration} alt="" />
            <h3>Seamless Integration</h3>
            <p>Whether your app needs to integrate with existing systems, third-party services,
              or other apps, we handle the technical complexities to ensure smooth and secure
              integration. Our solutions are built to work seamlessly within your current digital
              ecosystem.</p>
          </div>
          <div className="scalable-architecture">
            <img src={scalable_architecture} alt="" />
            <h3>Scalable Architecture</h3>
            <p>As your business grows, your app needs to scale with it. We design and develop
              apps with scalability in mind, ensuring that they can handle increased user loads, new
              features, and expanding data without compromising performance.</p>
          </div>
        </div>
        <div className="web-app-card-3">
          <div className="end-to-end-development">
            <img src={end_to_end_development} alt="" />
            <h3>End-to-End Development</h3>
            <p>From initial concept and wireframing to development, testing, and deployment,
              we manage the entire mobile application development lifecycle. Our all-encompassing
              strategy guarantees that each element of your app is carefully designed, implemented,
              and refined for optimal performance</p>
          </div>
          <div className="post-launch">
            <img src={post_launch} alt="" />
            <h3>Post-Launch Support and Maintenance</h3>
            <p>Our commitment to your app doesn’t end at launch. We provide ongoing
              support and maintenance services to ensure your app remains up-to-date, secure, and
              optimized. Whether you need feature updates, bug fixes, or performance
              enhancements, we’re here to help your app continue to succeed.</p>
          </div>
        </div>
        <div className="web-app-button">
          <button onClick={openModal}>CONTACT US</button>
        </div>
      </div>
      <div className="web-app-4">
        <div className="web-ecom-title-2">
          <h2>Elevate Your Brand with PCL Infotech’s e -Commerce web development Services
          </h2>
          <p>At PCL Infotech, we believe that great design is about more than just looks—it’s about creating a meaningful connection with your audience. Let us help you build a website that not only stands out from the competition but also drives engagement and growth. Partner with us to transform your digital presence and leave a lasting impression on every visitor.</p>
          <div className="web-app-5">
            <div className="web-ecom-logo-container-1">
              <img src={flutter_logo} alt="" />
              <img src={react_logo} alt="" />
              <img src={android_logo} alt="" />
              <img src={xcode_logo} alt="" />
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

export default MobileAppDevelopment
