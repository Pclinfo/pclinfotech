import React from 'react'
import './CSS/ECommerceWebsiteDevelopment.css'
import web_dev_img_1 from './Assets/web_dev_img_1.png'
import web_ecom_img_2 from './Assets/web_ecom_img_2.png'
import web_ecom_img_3 from './Assets/web_ecom_img_3.png'
import web_ecom_img_4 from './Assets/web_ecom_img_4.png'
import custom_Ecommerce_solutions from './Assets/custom_Ecommerce_solutions.png'
import user_friendly_shopping_experience from './Assets/user_friendly_shopping_experience.png'
import advanced_payment_integration from './Assets/advanced_payment_integration.png'
import comprehensive_inventory_management from './Assets/comprehensive_inventory_management.png'
import mobile_optimized_design from './Assets/mobile_optimized_design.png'
import seo_and_marketing_tools from './Assets/seo_and_marketing_tools.png'
import scalable_and_flexible_platforms from './Assets/scalable_and_flexible_platforms.png'
import seamless_third_party_integrations from './Assets/seamless_third_party_integrations.png'
import robust_security_features from './Assets/robust_security_features.png'
import ongoing_support from './Assets/ongoing_support.png'
import shopify_logo from './Assets/shopify_logo.png'
import mailchimp_logo from './Assets/mailchimp_logo.png'
import canva_logo from './Assets/canva_logo.png'
import woo_logo from './Assets/woo_logo.png'
import magento_logo from './Assets/magento_logo.png'
import google_analytics_logo from './Assets/google_analytics_logo.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'



const ECommerceWebsiteDevelopment = () => {

  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
  };



  return (
    <div className='web-ecom'>
      <div className="web-ecom-1">
        <div className="web-ecom-left">
          <h2>E-commerce Website Development
          </h2>
          <p>In the fiercely competitive online marketplace, your e-commerce platform can make or break your success. At PCL Infotech, we specialize in creating powerful, scalable e-commerce websites.</p>
          <button>Build my  E-Commerce Website</button>
        </div>
        <div className="web-ecom-right">
          <img src={web_dev_img_1} alt="" />
          <img src={web_ecom_img_2} alt="" />
        </div>
      </div>
      <div className="web-ecom-2">
        <div className="web-ecom-2-left">
          <img src={web_ecom_img_3} alt="" />
          <p>That are designed to drive sales, enhance customer satisfaction, and build brand loyalty. Our comprehensive solutions cover every aspect of your online store, ensuring that your platform not only looks great but also functions seamlessly.</p>
        </div>
        <div className="web-ecom-2-right">
          <img src={web_ecom_img_4} alt="" />
        </div>
      </div>
      <div className="web-ecom-3">
        <div className="web-ecom-title-1">
          <h2>Transform Your Online Business with PCL Infotech’s E-commerce Solutions
          </h2>
          <p>At PCL Infotech, we’re committed to helping you build an e-commerce platform that not only meets your current needs but also supports your future growth. Let us be your partner in creating a powerful, user-friendly online store that converts visitors into loyal customers and drives sustained business success.</p>
        </div>
        <h2>Why Choose PCL Infotech for Your E-commerce Needs</h2>
        <div className="web-ecom-card-1">
          <div className="custom-Ecommerce-solutions">
            <img src={custom_Ecommerce_solutions} alt="" />
            <h3>Custom E-commerce Solutions</h3>
            <p>We understand that every business has unique requirements. That’s why we offer
              fully customized e-commerce solutions tailored to your specific business model, target
              audience, and sales objectives. Whether you’re selling physical products, digital
              downloads, or services, we create a platform that meets your exact needs when
              developing an e-commerce website.</p>
          </div>
          <div className="user-friendly-shopping-experience">
            <img src={user_friendly_shopping_experience} alt="" />
            <h3>User-Friendly Shopping Experience</h3>
            <p>We focus on delivering an intuitive and engaging shopping experience that keeps
              customers coming back. From easy-to-navigate product categories to streamlined
              checkout processes, every aspect of your site is designed to maximize conversions and
              minimize cart abandonment.</p>
          </div>
          <div className="advanced-payment-integration">
            <img src={advanced_payment_integration} alt="" />
            <h3>Advanced Payment Integration</h3>
            <p>Security and user convenience are crucial for success in e-commerce We integrate
              secure, reliable payment gateways that support multiple payment methods, ensuring a
              smooth transaction process for your customers while protecting sensitive data with
              robust encryption.</p>
          </div>
        </div>
        <div className="web-ecom-card-2">
          <div className="comprehensive-inventory-management">
            <img src={comprehensive_inventory_management} alt="" />
            <h3>Comprehensive Inventory Management</h3>
            <p>Efficient inventory management is crucial for the smooth operation of your online
              store. Our solutions include powerful inventory management tools that allow you to
              track stock levels, manage orders, and automate reordering, helping you stay organized
              and avoid stockouts.</p>
          </div>
          <div className="mobile-optimized-design">
            <img src={mobile_optimized_design} alt="" />
            <h3>Mobile-Optimized Design</h3>
            <p>With a significant portion of e-commerce transactions now occurring on mobile
              devices, we ensure your e-commerce site is fully responsive and optimized for mobile
              users. This ensures a smooth shopping experience on any device, whether it&#39;s a desktop
              or a smartphone.</p>
          </div>
          <div className="seo-and-marketing-tools">
            <img src={seo_and_marketing_tools} alt="" />
            <h3>SEO and Marketing Tools</h3>
            <p>Visibility is key to success in E-commerce. We build SEO-friendly websites that rank
              well in search engines, driving organic traffic to your store. Additionally, we integrate
              essential marketing tools, such as email marketing, social media sharing, and product
              reviews, to help you attract and retain customers.</p>
          </div>
        </div>
        <div className="web-ecom-card-3">
          <div className="scalable-and-flexible-platforms">
            <img src={scalable_and_flexible_platforms} alt="" />
            <h3>Scalable and Flexible Platforms</h3>
            <p>As your business grows, your e-commerce platform needs to adapt. Our solutions
              are designed with scalability in mind, allowing you to easily add new products, features,
              and functionalities without compromising performance.</p>
          </div>
          <div className="seamless-third-party-integrations">
            <img src={seamless_third_party_integrations} alt="" />
            <h3>Seamless Third-Party Integrations</h3>
            <p>We offer seamless integration with third-party tools and services, such as CRM
              systems, ERP software, and shipping providers, ensuring that your e-commerce platform
              works harmoniously with the rest of your business operations.</p>
          </div>
          <div className="robust-security-features">
            <img src={robust_security_features} alt="" />
            <h3>Robust Security Features</h3>
            <p>Protecting your customers&#39; data and your business is our top priority. We
              implement advanced security measures, including SSL certificates, data encryption, and
              fraud detection, to safeguard your site against cyber threats and ensure compliance
              with industry standards.</p>
          </div>
        </div>
        <div className="web-ecom-card-4">
          <div className="ongoing-support">
            <img src={ongoing_support} alt="" />
            <h3>Ongoing Support and Maintenance</h3>
            <p>Launching your e-commerce site is only the first step. We provide ongoing support
              and maintenance services to keep your platform running smoothly, resolve any issues
              promptly, and ensure that your site remains up-to-date with the latest technologies and
              trends.</p>
          </div>
        </div>
        <div className="web-ecom-button">
          <button>CONTACT US</button>
        </div>
      </div>
      <div className="web-ecom-4">
        <div className="web-ecom-title-2">
          <h2>Elevate Your Brand with PCL Infotech’s e -Commerce web development Services
          </h2>
          <p>At PCL Infotech, we believe that great design is about more than just looks—it’s about creating a meaningful connection with your audience. Let us help you build a website that not only stands out from the competition but also drives engagement and growth. Partner with us to transform your digital presence and leave a lasting impression on every visitor.</p>
          <div className="web-ecom-5">
            <div className="web-ecom-logo-container-1">
              <img src={shopify_logo} alt="" />
              <img src={mailchimp_logo} alt="" />
              <img src={canva_logo} alt="" />
            </div>
            <div className="web-ecom-logo-container-2">
              <img src={woo_logo} alt="" />
              <img src={magento_logo} alt="" />
              <img src={google_analytics_logo} alt="" />
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

export default ECommerceWebsiteDevelopment
