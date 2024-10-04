import React from 'react'
import './CSS/ContentWriting.css'
import web_dev_img_1 from './Assets/web_dev_img_1.png'
import web_ctn_img_2 from './Assets/web_ctn_img_2.png'
import web_ctn_img_3 from './Assets/web_ctn_img_3.png'
import web_ctn_img_4 from './Assets/web_ctn_img_4.png'
import tailored_content_strategy from './Assets/tailored_content_strategy.png'
import seo_optimization from './Assets/seo_optimization.png'
import engaging_and_persuasive_copy from './Assets/engaging_and_persuasive_copy.png'
import diverse_content_types from './Assets/diverse_content_types.png'
import research_driven_writing from './Assets/research_driven_writing.png'
import conversion_focused_approach from './Assets/conversion_focused_approach.png'
import ongoing_content_support from './Assets/ongoing_content_support.png'
import grammarly_logo from './Assets/grammarly_logo.png'
import buzzsumo_logo from './Assets/buzzsumo_logo.png'
import unsplash_logo from './Assets/unsplash_logo.png'
import semrush_logo from './Assets/semrush_logo.png'
import google_tre_logo from './Assets/google_tre_logo.png'
import giphy_logo from './Assets/giphy_logo.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'



const ContentWriting = () => {


  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
};


  return (
    <div className='web-ctn'>
      <div className="web-ctn-1">
        <div className="web-ctn-left">
          <h2>Content Writing Services </h2>
          <p>In the digital age, content reigns supreme, and at PCL Infotech, we harness the power of expertly crafted words to shape perceptions and drive success. Our professional content writing services are meticulously designed to deliver engaging and persuasive content that informs, captivates, and motivates your audience.</p>
          <button>Build my Content Writing Services</button>
        </div>
        <div className="web-ctn-right">
          <img src={web_dev_img_1} alt="" />
          <img src={web_ctn_img_2} alt="" />
        </div>
      </div>
      <div className="web-ctn-2">
        <div className="web-ctn-2-left">
          <img src={web_ctn_img_3} alt="" />
          <p>We understand that every word matters in capturing attention, building brand identity, and achieving your business objectives. By focusing on quality and relevance, we create content that not only resonates with your target audience but also enhances your online presence and fosters meaningful connections.</p>
        </div>
        <div className="web-ctn-2-right">
          <img src={web_ctn_img_4} alt="" />
        </div>
      </div>
      <div className="web-ctn-3">
        <div className="web-ctn-title-1">
          <h2>Transform Your Online Business with PCL Infotech’ s   Content   writing  service</h2>
          <p>At PCL Infotech, we’re committed to helping you build an e-commerce platform that not only meets your current needs but also supports your future growth. Let us be your partner in creating a powerful, user-friendly online store that converts visitors into loyal customers and drives sustained business success.</p>
          <h2>Why Choose PCL Infotech for Your Content Writing  Needs </h2>
        </div>
        <div className="web-ctn-card-1">
          <div className="tailored-content-strategy">
            <img src={tailored_content_strategy} alt="" />
            <h3>Tailored Content Strategy</h3>
            <p>We don’t just write content; we develop a comprehensive content strategy that
              aligns with your business objectives. By understanding your target audience, industry
              trends, and competitive landscape, we create content that resonates with your readers
              and supports your marketing goals.</p>
          </div>
          <div className="seo-optimization">
            <img src={seo_optimization} alt="" />
            <h3>SEO Optimization</h3>
            <p>In today’s crowded digital marketplace, visibility is crucial. Our SEO content writer
              team crafts content with SEO best practices in mind, ensuring that your website ranks
              higher in search engine results. We use strategic keywords, meta descriptions, and
              internal linking to boost your online presence and attract organic traffic.</p>
          </div>
          <div className="engaging-and-persuasive-copy">
            <img src={engaging_and_persuasive_copy} alt="" />
            <h3>Engaging and Persuasive Copy</h3>
            <p>Our content is not just informative; it’s engaging and persuasive. We use clear
              messaging and strong calls to action to capture attention and motivate your audience to
              take the desired steps, whether that’s making a purchase, signing up for a newsletter, or
              contacting your team. As an expert website content writer, we ensure your copy
              connects deeply with your audience.</p>
          </div>
        </div>
        <div className="web-ctn-card-2">
          <div className="diverse-content-types">
            <img src={diverse_content_types} alt="" />
            <h3>Diverse Content Types</h3>
            <p>From website copy and blog posts to product descriptions, whitepapers, and
              marketing materials, our team excels in creating a wide range of content types.
              Whether you need an article writer for your blog or a website content writer for your
              landing pages, we tailor each piece to suit its purpose, ensuring that it effectively
              communicates your message and achieves your desired outcomes.</p>
          </div>
          <div className="research-driven-writing">
            <img src={research_driven_writing} alt="" />
            <h3>Research-Driven Writing</h3>
            <p>Great content is grounded in solid research. Our content writing services include
              deep dives into industry trends, competitor strategies, and audience preferences to
              ensure that your content is accurate, relevant, and up-to-date. This approach not only
              builds authority but also fosters trust with your readers.</p>
          </div>
          <div className="conversion-focused-approach">
            <img src={conversion_focused_approach} alt="" />
            <h3>Conversion-Focused Approach</h3>
            <p>Content that converts is content that matters. We focus on creating content that
              guides your audience through the customer journey, from awareness to decision-
              making. By addressing pain points, answering questions, and offering solutions, our
              expert SEO content writers help turn visitors into loyal customers.</p>
          </div>
        </div>
        <div className="web-ctn-card-3">
          <div className="ongoing-content-support">
            <img src={ongoing_content_support} alt="" />
            <h3>Ongoing Content Support</h3>
            <p>Content needs evolve, and we’re here to support your long-term content strategy.
              Whether you need regular blog posts from an experienced article writer, seasonal
              marketing campaigns, or updates to your website copy from a dedicated website
              content writer, we provide ongoing content services that keep your brand’s voice strong
              and your message clear.</p>
          </div>
        </div>
        <div className="web-ctn-button">
          <button>CONTACT US</button>
        </div>
      </div>
      <div className="web-ctn-4">
        <div className="web-ctn-title-2">
          <h2>Elevate Your Brand with PCL Infotech’scontent writing  Services
          </h2>
          <p>At PCL Infotech, we believe that great design is about more than just looks—it’s about creating a meaningful connection with your audience. Let us help you build a website that not only stands out from the competition but also drives engagement and growth. Partner with us to transform your digital presence and leave a lasting impression on every visitor.</p>
          <div className="web-ctn-5">
            <div className="web-ctn-logo-container-1">
              <img src={grammarly_logo} alt="" />
              <img src={buzzsumo_logo} alt="" />
              <img src={unsplash_logo} alt="" />
            </div>
            <div className="web-ctn-logo-container-2">
              <img src={semrush_logo} alt="" />
              <img src={google_tre_logo} alt="" />
              <img src={giphy_logo} alt="" />
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

export default ContentWriting 