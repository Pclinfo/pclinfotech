import React, {useState} from 'react';
import Slider from 'react-slick';
import './Hero.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import web_banner from '../Assets/web_banner.png'
import hero_down_img from '../Assets/hero_down_img.jpg';
import { FaWhatsapp, FaPhoneAlt, FaComments } from 'react-icons/fa'; // Added chat icon
import Modal from 'react-modal';



const Hero = () => {
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
      const response = await fetch('https://pclinfotech-backend.onrender.com/submitForm', {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <div className="hero">
      <Slider {...settings}>
        <div className="slide">
          <img src={web_banner} alt="Slide 1" className="slide-img" />
          <div className="slide-content">
            <h2>PCL InfoTech - Your Trusted Partner for Digital Success</h2>
            <p>At PCL InfoTech, we offer a complete suite of IT solutions designed to propel your business
              forward in the digital age. We tailor our services to your unique needs, ensuring that you
              build a strong online presence, deliver exceptional user experiences, and achieve your
              business objectives.</p>
            <div className="slide-btn">
              <button>Read More</button>
              <button onClick={openModal}>Order Now</button>
            </div>
          </div>
        </div>
        <div className="slide">
          <img src={web_banner} alt="Slide 2" className="slide-img" />
          <div className="slide-content">
            <h2>Web Design</h2>
            <p>Our design specialists create stunning, user-friendly websites that capture your brand’s
              essence. We prioritize aesthetics, functionality, and user experience to ensure your website
              leaves a lasting impression.</p>
            <div className="slide-btn">
              <button>Read More</button>
              <button onClick={openModal}>Order Now</button>
            </div>
          </div>
        </div>
        <div className="slide">
          <img src={web_banner} alt="Slide 3" className="slide-img" />
          <div className="slide-content">
            <h2>Servers & Hosting</h2>
            <p>Ensure your website is fast, secure, and always online with our comprehensive hosting and
              server solutions. We offer a range of services to meet your specific needs, from domain
              registration to dedicated servers.</p>
            <div className="slide-btn">
              <button>Read More</button>
              <button onClick={openModal}>Order Now</button>
            </div>
          </div>
        </div>
      </Slider>
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
      <div className="hero-down">
        <div className="hero-down-img">
          <img src={hero_down_img} alt="" />
        </div>
        <div className="hero-down-content">
          <h2>
          <span className="b-c">Our</span> <span className="l-c">Expertise</span>
          </h2>
          <p>Elevate Your Business Success and Gain a Competitive Edge with Our Comprehensive Custom Software Development Solutions at PCL Infotech. Our expert team is dedicated to crafting tailored software solutions that align with your unique business needs, driving innovation and operational efficiency. Experience the difference of quality-driven development that not only meets but exceeds your expectations.</p>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="floating-icons">
        <a href="https://api.whatsapp.com/message/X7OXQGLQJBJ2D1?autoload=1&app_absent=0" target="_blank" className="icon whatsapp" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="+91 72000 74253" className="icon phone">
          <FaPhoneAlt />
        </a>
      </div>

      {/* Chatbot Button */}
      <div className="chatbot-button">
        <a href="#chat" className="chat-link">
          <FaComments />
          <span>Speak to us!</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
