import React from 'react'
import './CSS/EmailTemplates.css'
import web_dev_img_1 from './Assets/web_dev_img_1.png'
import web_mail_img_2 from './Assets/web_mail_img_2.png'
import web_mail_img_3 from './Assets/web_mail_img_3.png'
import web_mail_img_4 from './Assets/web_mail_img_4.png'
import brand_consistency from './Assets/brand_consistency.png'
import responsive_design from './Assets/responsive_design.png'
import high_engagement from './Assets/high_engagement.png'
import customizable_and_flexible from './Assets/customizable_and_flexible.png'
import tested_for_compatibility from './Assets/tested_for_compatibility.png'
import ongoing from './Assets/ongoing.png'
import zendesk_logo from './Assets/zendesk_logo.png'
import hubspot_logo from './Assets/hubspot_logo.png'
import stripo_logo from './Assets/stripo_logo.png'
import brevo_logo from './Assets/brevo_logo.png'
import constant_logo from './Assets/constant_logo.png'
import mailchimp_logo from './Assets/mailchimp_logo.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const EmailTemplates = () => {

  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
  };



  return (
    <div className='web-mail'>
      <div className="web-mail-1">
        <div className="web-mail-left">
          <h2>E-mail Templates  development </h2>
          <p>Email marketing is a powerful tool for reaching and engaging your audience, and the right email design can make all the difference. At PCL Infotech, we specialize in creating professional, responsive email templates that are designed to captivate your recipients and drive results.
          </p>
          <button>Build my E- mail  Template  Development</button>
        </div>
        <div className="web-mail-right">
          <img src={web_dev_img_1} alt="" />
          <img src={web_mail_img_2} alt="" />
        </div>
      </div>
      <div className="web-mail-2">
        <div className="web-mail-2-left">
          <img src={web_mail_img_3} alt="" />
          <p> Our templates are not only visually appealing but also optimized to perform flawlessly across all devices and email clients, ensuring your message is delivered effectively every time.</p>
        </div>
        <div className="web-mail-2-right">
          <img src={web_mail_img_4} alt="" />
        </div>
      </div>
      <div className="web-mail-3">
        <div className="web-mail-title-1">
          <h2>Transform Your Online Business with PCL Infotech’s E mail Templates  Development </h2>
          <p>At PCL Infotech, we’re committed to helping you build an e-commerce platform that not only meets your current needs but also supports your future growth. Let us be your partner in creating a powerful, user-friendly online store that converts visitors into loyal customers and drives sustained business success.</p>
          <h2>Why Choose PCL Infotech for Your Email Templates Needs</h2>
        </div>
        <div className="web-mail-card-1">
          <div className="brand-consistency">
            <img src={brand_consistency} alt="" />
            <h3>Brand Consistency</h3>
            <p>We design email templates that align perfectly with your brand’s messaging and
              visual identity. Every element, from colors to fonts, is carefully selected to ensure your
              emails reflect your brand’s personality and values.</p>
          </div>
          <div className="responsive-design">
            <img src={responsive_design} alt="" />
            <h3>Responsive Design</h3>
            <p>With more users checking emails on mobile devices, your email marketing templates
              must look great on every screen. Our templates are fully responsive, adapting
              seamlessly to different devices and email clients for a consistent experience.</p>
          </div>
          <div className="high-engagement">
            <img src={high_engagement} alt="" />
            <h3>High Engagement</h3>
            <p>We create email template designs with engagement in mind, incorporating clear
              calls to action, eye-catching visuals, and easy-to-read layouts. Our designs are crafted to
              boost open rates, click-throughs, and conversions.</p>
          </div>
        </div>
        <div className="web-mail-card-2">
          <div className="customizable-and-flexible">
            <img src={customizable_and_flexible} alt="" />
            <h3>Customizable and Flexible</h3>
            <p>Our email design templates are easy to customize, allowing you to tailor each
              campaign to specific audiences or objectives. Whether you need a promotional email, a
              newsletter, or an announcement, our templates offer the flexibility to adapt to any
              purpose.</p>
          </div>
          <div className="tested-for-compatibility">
            <img src={tested_for_compatibility} alt="" />
            <h3>Tested for Compatibility</h3>
            <p>We rigorously test our email templates across various email clients and platforms to
              ensure they perform well everywhere. This includes testing for compatibility with major
              email services like Gmail, Outlook, and Apple Mail.</p>
          </div>
          <div className="ongoing">
            <img src={ongoing} alt="" />
            <h3>Ongoing Support</h3>
            <p>We don’t just deliver a template and walk away. We provide ongoing support to
              ensure your email marketing templates run smoothly, offering advice on best practices,
              optimization tips, and updates as needed.</p>
          </div>
        </div>
        <div className="web-mail-button">
          <button>CONTACT US</button>
        </div>
      </div>
      <div className="web-mail-4">
        <div className="web-mail-title-2">
          <h2>Elevate Your Brand with PCL Infotech’s e -Commerce web development Services
          </h2>
          <p>At PCL Infotech, we believe that great design is about more than just looks—it’s about creating a meaningful connection with your audience. Let us help you build a website that not only stands out from the competition but also drives engagement and growth. Partner with us to transform your digital presence and leave a lasting impression on every visitor.</p>
          <div className="web-mail-5">
            <div className="web-mail-logo-container-1">
              <img src={zendesk_logo} alt="" />
              <img src={hubspot_logo} alt="" />
              <img src={stripo_logo} alt="" />
            </div>
            <div className="web-mail-logo-container-2">
              <img src={brevo_logo} alt="" />
              <img src={constant_logo} alt="" />
              <img src={mailchimp_logo} alt="" />
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

export default EmailTemplates
