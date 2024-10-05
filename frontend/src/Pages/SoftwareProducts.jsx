import React from 'react'
import './CSS/SoftwareProducts.css'
import web_dev_img_1 from './Assets/web_dev_img_1.png'
import web_sfw_img_2 from './Assets/web_sfw_img_2.png'
import web_sfw_img_3 from './Assets/web_sfw_img_3.png'
import web_sfw_img_4 from './Assets/web_sfw_img_4.png'
import innovative_and_reliable from './Assets/innovative_and_reliable.png'
import customized_for_your_business from './Assets/customized_for_your_business.png'
import seamless_integration_1 from './Assets/seamless_integration_1.png'
import user_friendly_design from './Assets/user_friendly_design.png'
import enterprise_resource_planning from './Assets/enterprise_resource_planning.png'
import customer_relationship_management from './Assets/customer_relationship_management.png'
import accounting_software from './Assets/accounting_software.png'
import project_management_tools from './Assets/project_management_tools.png'
import affordable_pricing from './Assets/affordable_pricing.png'
import custom_software_development from './Assets/custom_software_development.png'
import support_and_training from './Assets/support_and_training.png'
import future_proof_solutions from './Assets/future_proof_solutions.png'
import github_logo from './Assets/github_logo.png'
import angular_logo from './Assets/angular_logo.png'
import react_logo from './Assets/react_logo.png'
import mongo_logo from './Assets/mongo_logo.png'
import nodejs_logo from './Assets/nodejs_logo.png'
import php_logo from './Assets/php_logo.png'
import vs_logo from './Assets/vs_logo.png'
import linux_logo from './Assets/linux_logo.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'




const SoftwareProducts = () => {


  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
};




  return (
    <div className='web-sfw'>
      <div className="web-sfw-1">
        <div className="web-sfw-left">
          <h2>Software Products Development
          </h2>
          <p>At  PCL Infotech, we offer a wide range of software products designed to streamline operations, boost productivity, and empower businesses to achieve more. Whether you’re a startup, small business, or an enterprise, our software solutions are built to meet your unique needs.</p>
          <button>Build my Software Product Development </button>
        </div>
        <div className="web-sfw-right">
          <img src={web_dev_img_1} alt="" />
          <img src={web_sfw_img_2} alt="" />
        </div>
      </div>
      <div className="web-sfw-2">
        <div className="web-sfw-2-left">
          <img src={web_sfw_img_3} alt="" />
          <p>Whether you need a custom app for iOS, Android, or both, our expert development team ensures that your app is not only fully functional but also user-friendly, aesthetically pleasing, and strategically aligned with your business goals.</p>
        </div>
        <div className="web-sfw-2-right">
          <img src={web_sfw_img_4} alt="" />
        </div>
      </div>
      <div className="web-sfw-3">
        <div className="web-sfw-title-1">
          <h2>Transform Your Online Business with PCL Infotech’ s Software Product Development </h2>
          <p>At PCL Infotech, we’re committed to helping you build an e-commerce platform that not only meets your current needs but also supports your future growth. Let us be your partner in creating a powerful, user-friendly online store that converts visitors into loyal customers and drives sustained business success.</p>
          <h2>Why Choose PCL Infotech for Your Software Product Needs</h2>
        </div>
        <div className="web-sfw-card-1">
          <div className="innovative-and-reliable">
            <img src={innovative_and_reliable} alt="" />
            <h3>Innovative and Reliable</h3>
            <p>We leverage cutting-edge technologies to deliver innovative software products that stay ahead of industry trends. You can rely on our solutions for consistent performance, security, and scalability.</p>
          </div>
          <div className="customized-for-your-business">
            <img src={customized_for_your_business} alt="" />
            <h3>Customized for Your Business</h3>
            <p> Our software products aren’t one-size-fits-all. We understand every business is different, so we customize our solutions to fit your specific goals, helping you maximize efficiency and growth.</p>
          </div>
          <div className="seamless-integration-1">
            <img src={seamless_integration_1} alt="" />
            <h3>Seamless Integration</h3>
            <p> Our software integrates effortlessly with your existing systems, ensuring a smooth transition without disrupting your operations.</p>
          </div>
        </div>
        <div className="web-sfw-card-2">
          <div className="user-friendly-design">
            <img src={user_friendly_design} alt="" />
            <h3>User-Friendly Design</h3>
            <p>Our solutions are designed with your team in mind. With an intuitive interface and easy-to-use features, you can get started without a steep learning curve.</p>
          </div>
          <div className="enterprise-resource-planning">
            <img src={enterprise_resource_planning} alt="" />
            <h3>Enterprise Resource Planning (ERP)</h3>
            <p>Manage and automate key business processes with our powerful ERP software, from inventory to human resources and beyond.</p>
          </div>
          <div className="customer-relationship-management">
            <img src={customer_relationship_management} alt="" />
            <h3>Customer Relationship Management (CRM)</h3>
            <p> Build better customer relationships, streamline your sales processes, and boost customer satisfaction with our feature-rich CRM solutions.</p>
          </div>
        </div>
        <div className="web-sfw-card-3">
          <div className="accounting-software">
            <img src={accounting_software} alt="" />
            <h3>Accounting Software</h3>
            <p> Simplify financial management with our robust accounting software that helps you track expenses, generate reports, and ensure compliance with ease.</p>
          </div>
          <div className="project-management-tools">
            <img src={project_management_tools} alt="" />
            <h3>Project Management Tools</h3>
            <p>Stay on top of deadlines, assign tasks, and manage resources efficiently with our project management software, designed to keep your teams productive and projects on track.</p>
          </div>
          <div className="affordable-pricing">
            <img src={affordable_pricing} alt="" />
            <h3>Affordable Pricing</h3>
            <p>High-quality software doesn’t have to come with a high price tag. Our competitive pricing ensures you get the best value for your investment .</p>
          </div>
        </div>
        <div className="web-sfw-card-4">
          <div className="custom-software-development">
            <img src={custom_software_development} alt="" />
            <h3>Custom Software Development</h3>
            <p> Have a specific need? We specialize in developing custom software tailored to your business requirements, ensuring that the solution aligns perfectly with your objectives.</p>
          </div>
          <div className="support-and-training">
            <img src={support_and_training} alt="" />
            <h3>Support and Training</h3>
            <p>We don’t just provide software; we provide ongoing support and training to ensure you’re getting the most out of our products.</p>
          </div>
          <div className="future-proof-solutions">
            <img src={future_proof_solutions} alt="" />
            <h3>Project Management Tools</h3>
            <p>Stay on top of deadlines, assign tasks, and manage resources efficiently with our project management software, designed to keep your teams productive and projects on track.</p>
          </div>
        </div>
        <div className="web-sfw-button">
          <button>CONTACT US</button>
        </div>
      </div>
      <div className="web-sfw-4">
        <div className="web-sfw-title-2">
          <h2>Elevate Your Brand with PCL Infotech’s e -Commerce web development Services
          </h2>
          <p>At PCL Infotech, we believe that great design is about more than just looks—it’s about creating a meaningful connection with your audience. Let us help you build a website that not only stands out from the competition but also drives engagement and growth. Partner with us to transform your digital presence and leave a lasting impression on every visitor.</p>
          <div className="web-sfw-5">
            <div className="web-sfw-logo-container-1">
              <img src={github_logo} alt="" />
              <img src={angular_logo} alt="" />
              <img src={react_logo} alt="" />
              <img src={mongo_logo} alt="" />
            </div>
            <div className="web-sfw-logo-container-2">
              <img src={nodejs_logo} alt="" />
              <img src={php_logo} alt="" />
              <img src={vs_logo} alt="" />
              <img src={linux_logo} alt="" />
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

export default SoftwareProducts