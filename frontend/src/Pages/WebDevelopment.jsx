import React from 'react'
import './CSS/WebDevelopment.css'
import logo from './Assets/logo.png'
import web_dev_img_1 from './Assets/web_dev_img_1.png'
import web_dev_img_2 from './Assets/web_dev_img_2.png'
import web_dev_img_3 from './Assets/web_dev_img_3.png'
import web_dev_img_4 from './Assets/web_dev_img_4.png'
import tailored_to_your_business_needs from './Assets/tailored_to_your_business_needs.png'
import cutting_edge_technology from './Assets/cutting_edge_technology.png'
import responsive_and_mobile_optimized from './Assets/responsive_and_mobile_optimized.png'
import ongoing_support_and_maintenance from './Assets/ongoing_support_and_maintenance.png'
import data_security_and_compliance from './Assets/data_security_and_compliance.png'
import scalable_solutions_for_growth from './Assets/scalable_solutions_for_growth.png'
import html_logo from './Assets/html_logo.png'
import css_logo from './Assets/css_logo.png'
import javascript_logo from './Assets/javascript_logo.png'
import react_logo from './Assets/react_logo.png'
import angular_logo from './Assets/angular_logo.png'
import next_logo from './Assets/next_logo.png'
import express_logo from './Assets/express_logo.png'
import nodejs_logo from './Assets/nodejs_logo.png'
import mongo_logo from './Assets/mongo_logo.png'
import php_logo from './Assets/php_logo.png'
import mysql_logo from './Assets/mysql_logo.png'
import postsql_logo from './Assets/postsql_logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'




const WebDevelopment = () => {

  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
  };

  return (
    <div className='web-development'>
      <div className="web-development-1">
        <div className="web-development-left">
          <h2>Web Development Services</h2>
          <p>At PCL Infotech, we craft high-performance, secure, and scalable websites tailored to your
            unique business objectives. Our web development services go beyond aesthetics; we focus on
            creating user-friendly, responsive, and feature-rich websites that deliver an exceptional user
            experience. Leveraging the latest technologies and industry best practices, we ensure that your
            website development meets today’s demands and is equipped to scale as your business grows.</p>
          <button>Build my Web Presence</button>
        </div>
        <div className="web-development-right">
          <img src={web_dev_img_1} alt="" />
          <img src={web_dev_img_2} alt="" />
        </div>
      </div>
      <div className="web-development-2">
        <div className="web-dev-2-left">
          <img src={web_dev_img_3} alt="" />
          <p>Our expertise includes custom e-commerce platforms, content management software (CMS),
            and more. We integrate advanced features such as SEO optimization, fast load times, and mobile
            responsiveness to ensure your site ranks well and performs seamlessly across all devices.
            Additionally, our robust security measures protect your data and provide peace of mind.</p>
        </div>
        <div className="web-dev-2-right">
          <img src={web_dev_img_4} alt="" />
        </div>
      </div>
      <div className="web-development-3">
        <div className="web-dev-title-1">
          <h2>Why Our Web Development Services Stand Out</h2>
          <p>Whether you’re launching a new site or revamping an existing one, our team of website
            developers works closely with you to understand your vision and translate it into a powerful
            online presence that drives engagement, conversion, and business growth.</p>
        </div>
        <div className="web-dev-card-1">
          <div className="tailored-to-your-business-needs">
            <img src={tailored_to_your_business_needs} alt="" />
            <h3>Tailored to Your Business Needs</h3>
            <p>We don’t believe in one-size-fits-all. Each website we develop is fully customized to reflect
              your brand identity, meet your specific business objectives, and provide a unique experience for
              your users.</p>
          </div>
          <div className="cutting-edge-technology">
            <img src={cutting_edge_technology} alt="" />
            <h3>Cutting-Edge Technology</h3>
            <p>We leverage the latest web technologies and frameworks, including Java full-stack
              developer expertise, to build sites that are fast, secure, and future-proof. Our commitment to
              staying ahead of the technology curve means your website will always be at the forefront of
              innovation.</p>
          </div>
          <div className="responsive-and-mobile-optimized">
            <img src={responsive_and_mobile_optimized} alt="" />
            <h3>Responsive and Mobile-Optimized</h3>
            <p>With the majority of users accessing websites via mobile devices, we ensure your site is
              fully responsive and performs flawlessly on all screen sizes, providing a seamless experience for
              every visitor.</p>
          </div>
        </div>
        <div className="web-dev-card-2">
          <div className="ongoing-support-and-maintenance">
            <img src={ongoing_support_and_maintenance} alt="" />
            <h3>Ongoing Support and Maintenance</h3>
            <p>Our commitment to your success doesn’t end at launch. We provide continuous support and
              maintenance services to ensure your website stays up-to-date, secure, and operates at optimal
              performance.</p>
          </div>
          <div className="data-security-and-compliance">
            <img src={data_security_and_compliance} alt="" />
            <h3>Data Security and Compliance</h3>
            <p>We implement industry-leading security practices to protect your website and user data
              from threats. Additionally, we ensure your site complies with relevant regulations, such as
              GDPR, to safeguard your business and your customers.</p>
          </div>
          <div className="scalable-solution-for-growth">
            <img src={scalable_solutions_for_growth} alt="" />
            <h3>Scalable Solutions for Growth</h3>
            <p>As your business expands, your website will need to adapt. Our scalable solutions ensure
              your site can grow with your business, adding new features and functionalities as required
              without compromising performance.</p>
          </div>
        </div>
        <div className="web-dev-button">
          <button href="tel:+your_phone_number" className="icon phone">CONTACT US</button>
        </div>
      </div>
      <div className="web-development-4">
        <div className="web-dev-title-2">
          <h2>Technology Stack We Consider for Outsourcing Web Development</h2>
          <p>Our team of certified web developers is competent to work on different technologies and platforms that leverage our clients with the flexibility to opt from choices and get consultation accordingly.</p>
          <div className="web-development-5">
            <div className="web-dev-logo-container-1">
              <img src={html_logo} alt="" />
              <img src={css_logo} alt="" />
              <img src={javascript_logo} alt="" />
              <img src={react_logo} alt="" />
            </div>
            <div className="web-dev-logo-container-2">
              <img src={angular_logo} alt="" />
              <img src={next_logo} alt="" />
              <img src={express_logo} alt="" />
              <img src={nodejs_logo} alt="" />
            </div>
            <div className="web-dev-logo-container-3">
              <img src={mongo_logo} alt="" />
              <img src={php_logo} alt="" />
              <img src={mysql_logo} alt="" />
              <img src={postsql_logo} alt="" />
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
                <li><Link to="/">Home</Link></li>
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

export default WebDevelopment
