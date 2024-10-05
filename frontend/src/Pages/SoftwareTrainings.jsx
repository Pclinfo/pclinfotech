import React from 'react'
import './CSS/SoftwareTrainings.css'
import tp_tp_img_1 from './Assets/tp_tp_img_1.png'
import tp_tp_img_2 from './Assets/tp_tp_img_2.png'
import tp_tp_img_3 from './Assets/tp_tp_img_3.png'
import full_stack_developer from './Assets/full_stack_developer.png'
import ui_ux_designer from './Assets/ui_ux_designer.png'
import digital_marketing_1 from './Assets/digital_marketing_1.png'
import business_analyst from './Assets/business_analyst.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const SoftwareTrainings = () => {

  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
  };



  return (
    <div className='tp-tp'>
      <div className="tp-tp-img-1">
        <img src={tp_tp_img_1} alt="" />
      </div>
      <div className="tp-tp-ctn-1">
        <div className="tp-tp-ctn-title-1">
          <h2>Training and Placement Opportunities</h2>
          <p>At PCL Infotech, we are dedicated to empowering individuals with the skills and opportunities needed for a successful career in IT. Our targeted training programs and placement opportunities are designed to align with industry demands and provide you with the tools to excel in your chosen field. Here’s a look at the specific roles we focus on</p>
          <button>Get Quote Now</button>
        </div>
        <div className="tp-tp-ctn-img-1">
          <img src={tp_tp_img_2} alt="" />
        </div>
      </div>
      <div className="tp-tp-ctn-main-1">
        <div className="tp-tp-ctn-img-2">
          <img src={tp_tp_img_3} alt="" />
        </div>
        <div className="tp-tp-ctn-title-2">
          <h3>Placements</h3>
          <p>At PCL Infotech, we go beyond just delivering exceptional IT training—we’re dedicated to launching your career with our exclusive placement opportunities. Our programs, crafted by industry experts, are designed to give you the competitive edge with cutting-edge skills and practical experience in high-demand fields like Software Development, DevOps, Cybersecurity, Data Science, and more. Once you complete your training, you’ll gain direct access to top employers through our extensive network of industry partnerships. Our dedicated placement team offers one-on-one support throughout your entire job search journey, from perfecting your resume to acing interviews. We provide real-world project experience, internships, and a comprehensive placement program to secure roles in leading companies. With personalized skill assessments, career counseling, mock interviews, and resume workshops, we ensure you're fully prepared to enter the workforce with confidence. Many of our students have gone on to thrive in major companies, and now it’s your turn. Take the leap with PCL Infotech and kickstart a successful career in IT with our unmatched training and placement services tailored to your future.</p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="tp-tp-card">
        <div className="tp-tp-subcard-1">
          <h3>Full Stack Developer</h3>
          <p>As a Full Stack Developer, you'll be proficient in both front-end and back-end technologies, capable of developing and managing complete web applications. Our training covers a comprehensive range of skills including HTML, CSS, JavaScript, and frameworks like React or Angular for front-end development, as well as server-side languages like Node.js and databases like MongoDB or SQL for back-end development. With this expertise, you’ll be able to build dynamic, high-performance websites and applications from the ground up, preparing you for a versatile role in various development environments. They often play a critical role in bridging the gap between user experience and server-side logic, ensuring smooth and efficient application performance. They have a broad understanding of both client-side (front-end) and server-side (back-end) technologies, enabling them to manage all layers of the development process.</p>
        </div>
        <div className="tp-tp-subcard-img-1">
          <img src={full_stack_developer} alt="" />
        </div>
        <div className="tp-tp-subcard-2">
          <h3>UI/UX Designer
          </h3>
          <p>UI/UX Designers play a crucial role in creating user-centric designs that enhance the overall user experience of digital products. Our training program focuses on the principles of user interface (UI) design, including layout, color theory, typography, and responsive design, as well as user experience (UX) strategies such as user research, wire framing, prototyping, and usability testing. By mastering these skills, you will be equipped to design engaging and intuitive interfaces that meet user needs and drive business goals. a creative professional responsible for crafting the overall look, feel, and functionality of digital products, ensuring they are both visually appealing and user-friendly. They specialize in creating intuitive and engaging interfaces while focusing on the user experience, making sure that the design meets users' needs and expectations seamlessly.Their ultimate goal is to enhance customer satisfaction, reduce friction, and ensure that the product not only looks good but also delivers a meaningful and effective experience.
          </p>
        </div>
        <div className="tp-tp-subcard-img-2">
          <img src={ui_ux_designer} alt="" />
        </div>
        <div className="tp-tp-subcard-3">
          <h3>Digital Marketing Specialist</h3>
          <p>Digital Marketing Specialists are responsible for creating and executing strategies that promote brands and drive online traffic. Our training encompasses various aspects of digital marketing, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, and email campaigns. You’ll learn how to analyze data, optimize campaigns, and leverage different digital channels to effectively reach and engage target audiences, helping businesses achieve their marketing objectives. It encompasses a wide range of strategies aimed at increasing online visibility, driving traffic, and ultimately converting leads into customers. Digital marketing leverages the internet, mobile devices, social media, search engines, and other digital mediums to reach and engage consumers effectively. It offers scalable solutions for businesses of all sizes and industries to grow and succeed in the digital age
          </p>
        </div>
        <div className="tp-tp-subcard-img-3">
          <img src={digital_marketing_1} alt="" />
        </div>
        <div className="tp-tp-subcard-4">
          <h3>Business Analyst</h3>
          <p>Data Analysts are essential for interpreting complex data sets and providing actionable insights that drive business decisions. Our training program includes skills in data collection, cleaning, and analysis using tools like Excel, SQL, and Python. You will also gain expertise in data visualization techniques using tools such as Power BI, enabling you to present data findings clearly and effectively. This role prepares you to analyze trends, generate reports, and support data-driven strategies in various industries. They analyze an organization’s processes, systems, and operations to identify areas for improvement and help develop solutions that drive efficiency, profitability, and growth. Business Analysts work closely with stakeholders, project managers, and developers to ensure that business requirements are effectively communicated and implemented.
            Business Analysts are critical to ensuring successful project outcomes, making them essential in industries ranging from finance and healthcare to IT, retail, and manufacturing.
          </p>
        </div>
        <div className="tp-tp-subcard-img-4">
          <img src={business_analyst} alt="" />
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

export default SoftwareTrainings
