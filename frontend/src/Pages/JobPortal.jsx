import React from 'react'
import './CSS/JobPortal.css'
import cr_jp_img_1 from './Assets/cr_jp_img_1.png'
import cr_jp_img_2 from './Assets/cr_jp_img_2.png'
import diverse_projects from './Assets/diverse_projects.png'
import collaborative_opportunities from './Assets/collaborative_opportunities.png'
import technologies from './Assets/technologies.png'
import work_environment from './Assets/work_environment.png'
import ongoing_learning from './Assets/ongoing_learning.png'
import partnerships from './Assets/partnerships.png'
import competitive_compensation from './Assets/competitive_compensation.png'
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'




const JobPortal = () => {


 
  const handleMenuItemClick = (menuItem) => {
    // You can add any additional logic here if needed
};


  return (
    <div className='cr-jp'>
      <div className="cr-jp-img-1">
        <img src={cr_jp_img_1} alt="" />
      </div>
      <div className="cr-jp-title-1">
        <p>At PCL Infotech, we are committed to providing an environment where talent can thrive and careers can flourish. Join us to be part of a dynamic team that values growth, creativity, and excellence. We offer a range of opportunities designed to support your professional journey and help you achieve your career goals.</p>
      </div>
      <div className="cr-jp-title-2">
        <h2>Full-Time Positions</h2>
        <p>For those seeking a long-term career, PCL Infotech offers a variety of full-time positions across multiple departments, from IT development and project management to marketing, customer support, and beyond. We are dedicated to building a team that thrives on collaboration, innovation, and excellence</p>
        <p> full-time positions are designed to provide a platform for professional growth while ensuring a balanced and fulfilling work life.</p>
      </div>
      <div className="cr-jp-main-card-1">
        <div className="cr-jp-title-3">
          <h2>Why Choose PCL Infotech for Your Full-Time Career?</h2>
        </div>
        <div className="cr-jp-subcard-1">
          <div className="career-advancement">
            <h3>Career Advancement</h3>
            <p>At PCL Infotech, we prioritize your growth through continuous learning, offering opportunities for promotion and leadership as you excel and take on new challenges.</p>
          </div>
          <div className="professional-development">
            <h3>Professional Development</h3>
            <p>We nurture talent with training, certifications, and mentorship programs, connecting you with industry leaders to support your career growth.</p>
          </div>
          <div className="inclusive-culture">
            <h3>Inclusive Culture</h3>
            <p>At PCL Infotech, diversity fuels innovation. We foster an inclusive, respectful environment where unique perspectives are valued and creativity thrives.</p>
          </div>
        </div>
        <div className="cr-jp-subcard-2">
          <div className="innovation-driven-environment">
            <h3>Innovation-Driven Environment</h3>
            <p>At PCL Infotech, you'll work on cutting-edge projects, driving digital transformation and creating impactful solutions across industries.</p>
          </div>
          <div className="collaborative-teamwork">
            <h3>Collaborative Teamwork</h3>
            <p>At PCL Infotech, teamwork drives success. We foster open communication and collaboration across departments, uniting professionals to deliver impactful solutions</p>
          </div>
          <div className="impactful-work">
            <h3>Impactful Work</h3>
            <p>At PCL Infotech, your contributions lead to real-world solutions, making a lasting impact through innovative software and enhanced business operations.</p>
          </div>
        </div>
      </div>
      <div className="cr-jp-title-4">
        <h2>Join Our Team</h2>
      </div>
      <div className="cr-jp-title-5">
        <img src={cr_jp_img_2} alt="" />
        <p>At PCL Infotech, we believe that every team member plays a vital role in our success. We invite professionals who are passionate about technology, innovation, and making a difference to explore our current full-time opportunities. Whether you're a seasoned professional or an emerging talent, we offer a supportive environment where you can grow and succeed.Discover your potential with PCL Infotech and take the next step in your career with us.</p>
      </div>
      <div className="cr-jp-title-6">
        <h2>
          <span className="b-c">Our</span> <span className="l-c">Positions</span>
        </h2>
      </div>

      <div className="cr-jp-jobcard-1">
        <div className="cr-jp-jcard-1">
          <div className="cr-jp-jcard-title-1">
            <h3>PHP DEVELOPER</h3>
            <p>Full-time (Exp- 2+ yrs)</p>
          </div>
          <p>We are  seeking an experienced and skilled PHP Laravel 8 Developer to join our team in Chennai. The ideal candidate should have a strong background in PHP development, specifically with Laravel 8, and experience building web applications. This is a great opportunity to work in a dynamic IT solutions company and contribute to the development of innovative projects</p>
          <button>Apply now</button>
        </div>
        <div className="cr-jb-jcard-2">
          <div className="cr-jp-jcard-title-2">
            <h3>MBA (Finance)</h3>
            <p>Full-time (Exp- 2+ yrs)</p>
          </div>
          <p>we are seeking a highly motivated and skilled MBA Finance professional to join our team in Chennai. The ideal candidate should possess strong knowledge of taxation and audit processes. This role offers a great opportunity to work with an innovative company in the financial and investment sector.</p>
          <button>Apply now</button>
        </div>
      </div>
      <div className="cr-jp-title-7">
        <h2>Job Outsourcing</h2>
        <p>At PCL Infotech, we understand the importance of flexibility in today’s fast-paced world. That’s why we offer freelance talent and specialists a chance to engage in meaningful work on a project basis. By outsourcing to professionals from diverse fields, we ensure our clients receive innovative solutions while giving freelancers the freedom to work on their own terms.</p>
      </div>
      <div className="cr-jp-main-card-2">
        <div className="cr-jp-title-4">
          <h2>Our VPS Hosting Services Include</h2>
        </div>
        <div className="cr-jp-subcard-3">
          <div className="diverse-projects">
            <img src={diverse_projects} alt="" />
            <h3>Diverse Projects</h3>
            <p>Freelancers at PCL Infotech have the opportunity to work on a wide range of exciting projects. From building complex IT solutions and software to contributing to web design, content creation, and digital marketing strategies, we ensure that every project aligns with your skill set and interests</p>
          </div>
          <div className="collaborative-opportunities">
            <img src={collaborative_opportunities} alt="" />
            <h3>Collaborative Opportunities</h3>
            <p>We believe that collaboration leads to innovation. A You'll collaborate closely with our in-house teams, exchanging ideas and leveraging each other’s expertise. This provides a unique opportunity gain new insights, and expand your network within the tech and digital industry</p>
          </div>
          <div className="technologies">
            <img src={technologies} alt="" />
            <h3>Access to Cutting-Edge Technologies</h3>
            <p>By working with us, freelancers get to engage with the latest tools and technologies in the IT space. Whether it's advanced cloud computing platforms, the newest web development frameworks, or innovative mobile app solutions, you’ll be on the cutting edge of technology.</p>
          </div>
        </div>
        <div className="cr-jp-subcard-4">
          <div className="work-environment">
            <img src={work_environment} alt="" />
            <h3>Flexible Work Environment</h3>
            <p>Freelancers enjoy the flexibility to manage their time and workload. You can choose projects that fit your schedule and work from anywhere, giving you the freedom to balance your professional and personal life.</p>
          </div>
          <div className="ongoing-learning">
            <img src={ongoing_learning} alt="" />
            <h3>Ongoing Learning and Development</h3>
            <p>We believe in the continuous development of our outsourced talent. As part of our team, freelancers have the chance to participate in training programs and workshops that enhance their skills, helping them stay competitive in a fast-changing industry.</p>
          </div>
          <div className="partnerships">
            <img src={partnerships} alt="" />
            <h3>Long-Term Partnerships</h3>
            <p>we don’t just see freelancers as temporary hires. We value long-term relationships with our freelancers and often offer recurring opportunities for those who excel in their work. Many of our freelancers move on to more substantial roles or repeated engagements based on the quality of their contributions.</p>
          </div>
        </div>
        <div className="cr-jp-subcard-5">
          <div className="competitive-compensation">
            <img src={competitive_compensation} alt="" />
            <h3>Competitive Compensation</h3>
            <p>We recognize the value of expertise. That's why we offer competitive compensation for freelance work. You'll be rewarded fairly based on your skills, experience, and the complexity of the projects you take on. We strive to ensure that our freelance partners feel appreciated and adequately compensated for their time and effort</p>
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

export default JobPortal
