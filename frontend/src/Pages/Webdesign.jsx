import React from 'react'
import './CSS/Webdesign.css'
import web_dev_img_1 from './Assets/web_dev_img_1.png'
import web_dev_img_2 from './Assets/web_dev_img_2.png'
import web_des_img_3 from './Assets/web_des_img_3.png'
import web_des_img_4 from './Assets/web_des_img_4.png'
import fast_load_times from './Assets/fast_load_times.png'
import brand_centric_design from './Assets/brand_centric_design.png'
import intuitive_user_experience from './Assets/intuitive_user_experience.png'
import interactive_elements from './Assets/interactive_elements.png'
import accessibility_and_inclusivity from './Assets/accessibility_and_inclusivity.png'
import consistent_branding from './Assets/consistent_branding.png'
import content_strategy_integration from './Assets/content_strategy_integration.png'
import future_proof_designs from './Assets/future_proof_designs.png'
import figma_logo from './Assets/figma_logo.png'
import penpot_logo from './Assets/penpot_logo.png'
import balsamiq_logo from './Assets/balsamiq_logo.png'
import canva_logo from './Assets/canva_logo.png'
import adobe_logo from './Assets/adobe_logo.png'
import ps_logo from './Assets/ps_logo.png'
import shopify_logo from './Assets/shopify_logo.png'
import wordpress_logo from './Assets/wordpress_logo.png'
import wix_logo from './Assets/wix_logo.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Webdesign = () => {

  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
};



  return (
    <div className='web-design'>
      <div className="web-design-1">
        <div className="web-design-left">
          <h2>Web Design Services</h2>
          <p>In today’s digital world, first impressions matter. Our design specialists, including experienced
            UI UX designers and user experience designers, create stunning, user-friendly websites that
            capture your brand’s essence and engage your audience from the moment they land on your
            page. We prioritize aesthetics, functionality, and user experience, ensuring that your website is
            not only visually appealing but also easy to navigate.</p>
          <button>Build my Web design</button>
        </div>
        <div className="web-design-right">
          <img src={web_dev_img_1} alt="" />
          <img src={web_dev_img_2} alt="" />
        </div>
      </div>
      <div className="web-design-2">
        <div className="web-des-2-left">
          <img src={web_des_img_3} alt="" />
          <p>With PCL Infotech, your website will leave
            a lasting impression and provide a seamless experience across all devices, setting you apart from
            the competition.Our team of design specialists, comprising skilled UX designers and UI designers, crafts
            visually stunning, user-friendly websites that not only reflect your brand’s essence but also
            captivate and engage your audience from the very first moment.</p>
        </div>
        <div className="web-des-2-right">
          <img src={web_des_img_4} alt="" />
        </div>
      </div>
      <div className="web-design-3">
        <div className="web-des-title-1">
          <h2>Why Our Web Design Services Excel</h2>
          <p>Whether you’re launching a new site or revamping an existing one, our team works closely with you to understand your vision and translate it into a powerful online presence that drives engagement, conversion, and business growth.</p>
        </div>
        <div className="web-des-card-1">
          <div className="fast-load-times">
            <img src={fast_load_times} alt="" />
            <h3>Fast Load Times</h3>
            <p>We design with performance in mind, optimizing images, code, and other elements to ensure
              your website loads quickly. Quick loading speeds enhance user satisfaction and can boost your
              search engine rankings.</p>
          </div>
          <div className="brand-centric-design">
            <img src={brand_centric_design} alt="" />
            <h3>Brand-Centric Design</h3>
            <p>We focus on creating designs that are true to your brand identity. Every element, from color
              schemes to typography, is carefully chosen to ensure your website communicates your brand’s
              message effectively and resonates with your target audience.</p>
          </div>
          <div className="intuitive-user-experience">
            <img src={intuitive_user_experience} alt="" />
            <h3>Intuitive User Experience</h3>
            <p>Our designs are not only beautiful but also intuitive. Guided by our UX application
              knowledge, we create seamless user experiences, guiding visitors effortlessly through your site to
              key information and calls to action, ultimately driving conversions.</p>
          </div>
        </div>
        <div className="web-des-card-2">
          <div className="interactive-elements">
            <img src={interactive_elements} alt="" />
            <h3>Interactive Elements</h3>
            <p>To enhance user engagement, we incorporate interactive elements such as animations, hover
              effects, and dynamic content. These features keep visitors interested and encourage them to
              explore more of what your site has to offer.</p>
          </div>
          <div className="accessibility-and-inclusivity">
            <img src={accessibility_and_inclusivity} alt="" />
            <h3>Accessibility and Inclusivity</h3>
            <p>We design websites that are accessible to everyone, including users with disabilities. By
              adhering to web accessibility standards, we ensure your site is inclusive and provides a positive
              experience for all visitors.</p>
          </div>
          <div className="consistent-branding">
            <img src={consistent_branding} alt="" />
            <h3>Consistent Branding</h3>
            <p>Your website plays a crucial role in establishing your brand’s identity online. We ensure
              consistency in branding across all pages, creating a cohesive and professional image that
              strengthens your brand’s identity.</p>
          </div>
        </div>
        <div className="web-des-card-3">
          <div className="content-strategy-integration">
            <img src={content_strategy_integration} alt="" />
            <h3>Content Strategy Integration</h3>
            <p>A well-designed website goes hand-in-hand with compelling content. We collaborate
              closely with content strategists to ensure that your website’s design supports and enhances your
              messaging, creating a harmonious balance between visuals and text.</p>
          </div>
          <div className="future-proof-designs">
            <img src={future_proof_designs} alt="" />
            <h3>Future-Proof Designs</h3>
            <p>Our designs are not just about meeting current needs; they’re about anticipating future
              trends and technologies. We create websites that are flexible and adaptable, ready to incorporate
              new features and functionalities as your business evolves.</p>
          </div>
        </div>
        <div className="web-des-button">
          <button>CONTACT US</button>
        </div>
      </div>
      <div className="web-design-4">
        <div className="web-des-title-2">
          <h2>Technology Stack We Consider for Outsourcing Web Design </h2>
          <p>Our team of certified web developers is competent to work on different technologies and platforms that leverage our clients with the flexibility to opt from choices and get consultation accordingly.</p>
          <div className="web-development-5">
            <div className="web-des-logo-container-1">
              <img src={figma_logo} alt="" />
              <img src={penpot_logo} alt="" />
              <img src={balsamiq_logo} alt="" />
            </div>
            <div className="web-des-logo-container-2">
              <img src={canva_logo} alt="" />
              <img src={adobe_logo} alt="" />
              <img src={ps_logo} alt="" />
            </div>
            <div className="web-des-logo-container-3">
              <img src={shopify_logo} alt="" />
              <img src={wordpress_logo} alt="" />
              <img src={wix_logo} alt="" />
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

export default Webdesign
