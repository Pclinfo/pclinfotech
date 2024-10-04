import React from 'react'
import './CSS/PaymentGatewayIntegration.css'
import web_dev_img_1 from './Assets/web_dev_img_1.png'
import web_pay_img_2 from './Assets/web_pay_img_2.png'
import web_pay_img_3 from './Assets/web_pay_img_3.png'
import web_pay_img_4 from './Assets/web_pay_img_4.png'
import comprehensive_payment_solutions from './Assets/comprehensive_payment_solutions.png'
import security_first from './Assets/security_first.png'
import seamless_user_experience from './Assets/seamless_user_experience.png'
import support_for_recurring_payments from './Assets/support_for_recurring_payments.png'
import global_payment_options from './Assets/global_payment_options.png'
import compliance_and_best_practices from './Assets/compliance_and_best_practices.png'
import ongoing_support_and_optimization from './Assets/ongoing_support_and_optimization.png'
import razorpay_logo from './Assets/razorpay_logo.png'
import paytm_logo from './Assets/paytm_logo.png'
import rupay_logo from './Assets/rupay_logo.png'
import visa_logo from './Assets/visa_logo.png'
import paypal_logo from './Assets/paypal_logo.png'
import phonepe_logo from './Assets/phonepe_logo.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'



const PaymentGatewayIntegration = () => {


  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
};


  return (
    <div className='web-pay'>
      <div className="web-pay-1">
        <div className="web-pay-left">
          <h2>Payment Gateway Integration
          </h2>
          <p>In today’s digital economy, secure and reliable payment processing is crucial for the success of any online business. At PCL Infotech, we specialize in integrating trusted payment gateways into your website, ensuring that your customers can complete transactions seamlessly and safely. Our integration solutions are designed to enhance user experience</p>
          <button>Build my Payment Gateway Integration</button>
        </div>
        <div className="web-pay-right">
          <img src={web_dev_img_1} alt="" />
          <img src={web_pay_img_2} alt="" />
        </div>
      </div>
      <div className="web-pay-2">
        <div className="web-pay-2-left">
          <img src={web_pay_img_3} alt="" />
          <p>By offering quick and efficient payment options while maintaining the highest standards of security. By focusing on seamless implementation and robust protection measures, we not only streamline your payment processes but also build customer confidence and trust in your brand.</p>
        </div>
        <div className="web-pay-2-right">
          <img src={web_pay_img_4} alt="" />
        </div>
      </div>
      <div className="web-pay-3">
        <div className="web-pay-title-1">
          <h2>Transform Your Online Business with PCL Infotech’ s Payment Gateway Integration</h2>
          <p>At PCL Infotech, we’re committed to helping you build an e-commerce platform that not only meets your current needs but also supports your future growth. Let us be your partner in creating a powerful, user-friendly online store that converts visitors into loyal customers and drives sustained business success.</p>
          <h2>Why Choose PCL Infotech for Your Payment Gateway Integration Needs </h2>
        </div>
        <div className="web-pay-card-1">
          <div className="comprehensive-payment-solutions">
            <img src={comprehensive_payment_solutions} alt="" />
            <h3>Comprehensive Payment Solutions</h3>
            <p>We support a wide range of payment gateways,
              including PayPal, Stripe, authorize.Net, and regional payment providers, ensuring that
              your website can process transactions no matter where your customers are located.</p>
          </div>
          <div className="security-first">
            <img src={security_first} alt="" />
            <h3>Security First</h3>
            <p>Protecting your customers’ financial information is our top priority.
              We implement advanced security measures, including SSL encryption, PCI
              compliance, and fraud detection, to ensure that every transaction is secure and your
              customers’ data is protected.</p>
          </div>
          <div className="seamless-user-experience">
            <img src={seamless_user_experience} alt="" />
            <h3>Seamless User Experience</h3>
            <p>We focus on creating a smooth and user-friendly payment gateway process that
              minimizes friction and reduces cart abandonment. From one-click payments to multi-
              currency support, we tailor the payment experience to meet your customers’ needs.</p>
          </div>
        </div>
        <div className="web-pay-card-2">
          <div className="support-for-recurring-payments">
            <img src={support_for_recurring_payments} alt="" />
            <h3>Support for Recurring Payments</h3>
            <p>For subscription-based businesses, we integrate solutions that handle recurring
              payments efficiently, ensuring that billing cycles are automated, and customers receive
              timely notifications.</p>
          </div>
          <div className="global-payment-options">
            <img src={global_payment_options} alt="" />
            <h3>Global Payment Options</h3>
            <p>If your business operates internationally, we can integrate payment gateways that
              support multiple currencies and local payment methods, making it easy for customers
              around the world to do business with you.</p>
          </div>
          <div className="compliance-and-best-practices">
            <img src={compliance_and_best_practices} alt="" />
            <h3>Compliance and Best Practices</h3>
            <p>We ensure that all payment gateway integrations comply with the latest industry
              standards and regulations, helping you avoid legal issues and maintain a trusted
              relationship with your customers.</p>
          </div>
        </div>
        <div className="web-pay-card-3">
          <div className="ongoing-support-and-optimization">
            <img src={ongoing_support_and_optimization} alt="" />
            <h3>Ongoing Support and Optimization</h3>
            <p>After integration, we provide ongoing support to monitor and optimize your
              payment gateway system, ensuring it continues to meet your needs as your business
              grows and evolves.</p>
          </div>
        </div>
        <div className="web-pay-button">
          <button>CONTACT US</button>
        </div>
      </div>
      <div className="web-pay-4">
        <div className="web-pay-title-2">
          <h2>Elevate Your Brand with PCL Infotech’s Payment Gateway  development Services
          </h2>
          <p>At PCL Infotech, we believe that great design is about more than just looks—it’s about creating a meaningful connection with your audience. Let us help you build a website that not only stands out from the competition but also drives engagement and growth. Partner with us to transform your digital presence and leave a lasting impression on every visitor.</p>
          <div className="web-pay-5">
            <div className="web-pay-logo-container-1">
              <img src={razorpay_logo} alt="" />
              <img src={paytm_logo} alt="" />
              <img src={rupay_logo} alt="" />
            </div>
            <div className="web-pay-logo-container-2">
              <img src={visa_logo} alt="" />
              <img src={paypal_logo} alt="" />
              <img src={phonepe_logo} alt="" />
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
                <p>© 2024 PCL Infotech. All rights reserved. <Link to="/terms">Terms & Conditions</Link> · <Link to="/privacy">Privacy Policy</Link></p>
            </div>
        </div>
    </div>
  )
}

export default PaymentGatewayIntegration